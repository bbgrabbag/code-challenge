import React, { ChangeEvent, FormEvent } from "react";
import { throttleFactory } from "../../util";
import { MIN_KEYWORD_LENGTH, THROTTLE_TIMER } from "../../config";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { apiClient } from "../../api";
import {
  clearSearchResults,
  errorSearchResults,
  getSearchResults,
  idleSearchResults,
  pendingSearchResults,
} from "../../redux/actions";
import { ESearchResultsStatus } from "../../redux/reducers";

const throttler = throttleFactory(THROTTLE_TIMER);

interface SearchFormConfig {
  onSubmit: (keyword: string) => void;
  onClear: () => void;
  onPending: (keyword: string) => void;
}

const useSearchForm = (config: SearchFormConfig) => {
  const [keyword, setKeyword] = React.useState("");
  const [isPristine, setIsPristine] = React.useState(true);

  React.useEffect(() => {
    if (!isPristine && !keyword) {
      config.onClear();
    }
    if (keyword.length >= MIN_KEYWORD_LENGTH) {
      config.onSubmit(keyword);
    }
  }, [config, keyword, isPristine]);

  const handleChange = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setKeyword(inputValue);
      config.onPending(inputValue);
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
  const searchResultsStatus = useAppSelector(
    (state) => state.searchResults.status
  );

  const onClear = () => {
    dispatch(clearSearchResults());
  };

  const onSubmit = async (keyword: string) => {
    try {
      const results = await apiClient.search(keyword);
      dispatch(getSearchResults(results));
    } catch (e) {
      console.error(e);
      dispatch(errorSearchResults(e.message));
    }
  };

  const onPending = (keyword: string) => {
    if (searchResultsStatus !== ESearchResultsStatus.PENDING) {
      if (keyword.length >= MIN_KEYWORD_LENGTH) {
        dispatch(pendingSearchResults());
      } else if (keyword.length > 0) {
        dispatch(
          idleSearchResults("Search query must contain at least 3 characters")
        );
      }
    }
  };

  const searchFormAPI = useSearchForm({
    onSubmit: throttler(onSubmit),
    onClear: throttler(onClear),
    onPending,
  });

  return (
    <form onSubmit={searchFormAPI.handleSubmit}>
      <input
        name="keyword"
        onChange={searchFormAPI.handleChange}
        value={searchFormAPI.keyword}
        placeholder="Search GitHub users"
      />
      <button type="button" onClick={searchFormAPI.clearInput}>
        Clear
      </button>
    </form>
  );
};
