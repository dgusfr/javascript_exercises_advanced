async function fetchMultipleData(urls) {
  try {
    const promises = urls.map((url) => fetchData(url));
    const data = await Promise.all(promises);
    return data;
  } catch (error) {
    return Promise.reject(`Could not fetch multiple data: ${error}`);
  }
}

const apiUrls = [
  "https://api.coindesk.com/v1/bpi/currentprice.json",
  "https://api.spacexdata.com/v4/launches/latest",
  "https://api.exchangerate-api.com/v4/latest/USD",
];
fetchMultipleData(apiUrls)
  .then((dataArray) => console.log(dataArray))
  .catch((error) => console.error(error));
