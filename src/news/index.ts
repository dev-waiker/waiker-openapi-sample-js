import { signedAxios } from "../auth/sign";
import {
  GetNewsDetailResponse,
  GetNewsListParameters,
  GetNewsListResponse,
  GetNewsStocksResponse,
  SearchRelateNewsParameters,
} from "./news.type";

export function getNewsList(parameters: GetNewsListParameters) {
  return signedAxios.get<GetNewsListResponse>(
    `/v2/center/ai-news?page=${parameters.page}&size=${parameters.size}`
  );
}

export function getNewsStockList(newsId: number) {
  return signedAxios.get<GetNewsStocksResponse>(
    `https://oapi.waiker.ai/v2/center/news/${newsId}/stocks`
  );
}

export function getNewsDetail(newsId: number) {
  return signedAxios.get<GetNewsDetailResponse>(`/v2/center/ai-news/${newsId}`);
}

export function searchStockRelateNews(parameters: SearchRelateNewsParameters) {
  return signedAxios.get(`
  https://oapi.waiker.ai/v2/center/ai-news/news-search/stock?size=${
    parameters.size
  }&page=${parameters.page}&q=${encodeURIComponent(parameters.q ?? "")}`);
}

export function searchKeywordRelateNews(
  parameters: SearchRelateNewsParameters
) {
  return signedAxios.get(`
  https://oapi.waiker.ai/v2/center/ai-news/news-search?size=${
    parameters.size
  }&page=${parameters.page}&q=${encodeURIComponent(parameters.q ?? "")}`);
}
