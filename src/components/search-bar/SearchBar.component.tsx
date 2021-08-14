import React, { ChangeEvent, FormEvent } from "react";
import { throttleFactory } from "../../util";
import { MIN_KEYWORD_LENGTH, THROTTLE_TIMER } from "../../config";
import { useAppDispatch } from "../../hooks";
import { apiClient } from "../../api";
import {
  clearSearchResults,
  errorSearchResults,
  getSearchResults,
  idleSearchResults,
  pendingSearchResults,
} from "../../redux/actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const throttler = throttleFactory(THROTTLE_TIMER);

interface SearchFormConfig {
  onSubmit: (keyword: string) => void;
  onClear: () => void;
  onPending: () => void;
  onIdle: () => void;
}

const useSearchForm = (config: SearchFormConfig) => {
  const [keyword, setKeyword] = React.useState("");
  const [isPristine, setIsPristine] = React.useState(true);

  React.useEffect(() => {
    if (!isPristine && !keyword.length) config.onClear();
    else if (keyword.length < MIN_KEYWORD_LENGTH && keyword.length > 0)
      config.onIdle();
    else if (keyword.length >= MIN_KEYWORD_LENGTH) config.onSubmit(keyword);
  }, [config, keyword, isPristine]);

  const handleChange = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setKeyword(inputValue);
      if (inputValue.length >= MIN_KEYWORD_LENGTH) config.onPending();
      if (isPristine) setIsPristine(false);
    },
    [config, isPristine]
  );

  const handleSubmit = React.useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      config.onSubmit(keyword);
    },
    [config, keyword]
  );

  const clearInput = React.useCallback(() => {
    setKeyword("");
    config.onClear();
  }, [config]);

  return {
    keyword,
    setKeyword,
    isPristine,
    handleChange,
    handleSubmit,
    clearInput,
  };
};

export const SearchBarComponent = () => {
  const dispatch = useAppDispatch();

  const onClear = () => {
    throttler(() => {
      dispatch(clearSearchResults());
    }, 0)();
  };

  const onSubmit = (keyword: string) => {
    throttler(async () => {
      try {
        const results = await apiClient.search(keyword);
        dispatch(getSearchResults(results, `Displaying ${results.length} results that match your query`));
      } catch (e) {
        console.error(e);
        dispatch(errorSearchResults(e.message));
      }
    })();
  };

  const onIdle = () => {
    throttler(() => {
      dispatch(
        idleSearchResults("Search query must contain at least 3 characters")
      );
    }, 0)();
  };

  const onPending = () => {
    dispatch(pendingSearchResults("Searching..."));
  };

  const searchFormAPI = useSearchForm({
    onSubmit,
    onClear,
    onPending,
    onIdle,
  });

  return (
    <Form
      autoComplete="off"
      onSubmit={searchFormAPI.handleSubmit}
      data-testid="search-bar-component"
    >
      <Form.Group as={Row} className="flex-align-cv">
        <Col xs="12"md="9">
          <Form.Control
            name="keyword"
            data-testid="search-input"
            onChange={searchFormAPI.handleChange}
            value={searchFormAPI.keyword}
            placeholder="Search by username"
          />
        </Col>
        <Col xs="12" md="3">
          <Button
            className="full-width margin-v"
            data-testid="clear-search"
            type="button"
            variant="secondary"
            onClick={searchFormAPI.clearInput}
          >
            Clear Search
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
