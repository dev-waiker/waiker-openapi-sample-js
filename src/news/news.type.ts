export type GetNewsListParameters = {
  page: number;
  size: number;
};

export type News = {
  /**
   * 뉴스 상세 ID 값
   */
  id: number;

  /**
   * 뉴스 원문 제목
   */
  originTitle: string;

  /**
   * 뉴스 원문 본문
   */
  originBody: string;

  /**
   * 뉴스 국문 제목
   */
  titleKo: string;

  /**
   * 뉴스 국문 본문
   */
  bodyKo: string;

  /**
   * 뉴스 발행 주체
   */
  originPress: string;

  /**
   * 뉴스 연관 종목 태그 리스트
   */
  waikerTags: string[];

  /**
   * 뉴스 발행 날짜
   */
  publishedDt: string;

  /**
   * 뉴스 원문 Display URL
   */
  landingUrl: string;
};

export type GetNewsListResponse = {
  data: News[];
  page: number;
  size: number;
  totalPage: number;
  totalCount: number;
  code: string;
  status: number;
  message: string;
  timestamp: string;
};

export type NewsStock = {
  /**
   * 태그 출처 W(웨이커), R(레피니티브)
   */
  tagFrom: string;

  /**
   * 태그 종목 연관도 스코어(1에 가까울수록 연관도가 높음)
   */
  relationScore: number;

  /**
   * 태그 종목 티커 정보
   */
  ticker: string;

  /**
   * 태그 종목 국가
   */
  country: string;

  /**
   * 태그 종목 티커 이름
   */
  name: string;

  /**
   * 태그 종목 관련 이미지
   */
  imageUrl: string;

  /**
   * 태그 종목 주가 변동률
   */
  percent: number;

  /**
   * 태그 종목 거래소
   */
  exchange: string;
};

export type GetNewsStocksResponse = {
  data: NewsStock[];
  code: string;
  status: number;
  message: string;
  timestamp: string;
};

export type NewsDetailBody = {
  data: string;
  type: "ul" | "string" | "table" | "image";
  style: "center";
};

export type NewsDetail = {
  id: number;
  origin: {
    body: {
      [index: string]: NewsDetailBody;
    };
    title: string;
    origin_body: string;
  };
  trans: {
    en: {
      body: {
        [index: string]: NewsDetailBody;
      };
      title: string;
      origin_body: string;
    };
    ko: {
      body: {
        [index: string]: NewsDetailBody;
      };
      title: string;
      origin_body: string;
    };
  };
  summ: {
    en: string;
    ko: string;
  };
  originPress: string;
  waikerTags: string[];
  publishedDt: string;
  originLanguage: string;
  landingUrl: string;
  updatedDt: string;
};

export type GetNewsDetailResponse = {
  data: NewsDetail;
  code: string;
  status: number;
  message: string;
  timestamp: string;
};

export type SearchRelateNewsParameters = {
  q?: string;
  page: number;
  size: number;
};

export type SearchRelateNewsResponse = {
  data: News[];
  page: number;
  size: number;
  totalPage: number;
  totalCount: number;
  code: string;
  status: number;
  message: string;
  timestamp: string;
};
