import React, { ChangeEvent, FormEvent } from "react";
import { throttleFactory } from "../../util";
import { THROTTLE_TIMER } from "../../config";

const throttler = throttleFactory(THROTTLE_TIMER);

interface SearchFormConfig {
  onSubmit: (keyword: string) => void;
  onClear: () => void;
}

const useSearchForm = (config: SearchFormConfig) => {
  const [keyword, setKeyword] = React.useState("");
  const [isPristine, setIsPristine] = React.useState(true);

  React.useEffect(() => {
    if (!isPristine && !keyword) {
      config.onClear();
    }
    if (keyword) {
      config.onSubmit(keyword);
    }
  }, [config, keyword, isPristine]);

  const handleChange = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
      if (isPristine) setIsPristine(false);
    },
    [isPristine]
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
  const onClear = () => {
    console.log("CLEARING FORM");
  };

  const onSubmit = (keyword: string) => {
    console.log("SUBMITTING", keyword);
  };

  const searchFormAPI = useSearchForm({
    onSubmit: throttler(onSubmit),
    onClear: throttler(onClear),
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
