export interface ISearchResultData {
  avatar_url: string;
  login: string;
  type: string;
  score: number;
}

export enum ISearchResultsStatus {
  PENDING = "PENDING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  IDLE = "IDLE",
}
