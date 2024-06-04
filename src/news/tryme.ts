import {
  getNewsDetail,
  getNewsList,
  getNewsStockList,
  searchKeywordRelateNews,
  searchStockRelateNews,
} from ".";

export async function newsApiSamples() {
  console.group("News API Samples");

  console.info("Call::News-List");
  const newsList = await getNewsList({ page: 0, size: 20 })
    .then((res) => res.data.data)
    .catch((err) => console.error(err?.response));
  console.log("Result::", newsList);

  if (!!newsList?.length) {
    console.info("Call::News-Stocks");
    const stocks = await getNewsStockList(newsList[0].id)
      .then((res) => res.data.data)
      .catch((err) => console.error(err?.response));
    console.log("Result::", stocks);

    console.info("Call::News-Detail");
    const detail = await getNewsDetail(newsList[0].id)
      .then((res) => res.data.data)
      .catch((err) => console.error(err?.response));
    console.log("Result::", detail);
  }

  console.info("Call::Search Stock Relate News");
  const stockRelateNews = await searchStockRelateNews({
    page: 0,
    size: 20,
    q: "마이크로소프트",
  })
    .then((res) => res.data.data)
    .catch((err) => console.error(err?.response));
  console.log("Result::", stockRelateNews);

  console.info("Call::Search Keyword Relate News");
  const keywordRelateNews = await searchKeywordRelateNews({
    page: 0,
    size: 20,
    q: "코스피",
  })
    .then((res) => res.data.data)
    .catch((err) => console.error(err?.response));
  console.log("Result::", keywordRelateNews);

  console.groupEnd();
}
