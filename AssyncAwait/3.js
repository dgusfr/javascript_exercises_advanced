async function fetchDataWithErrorHandling(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(`Could not fetch data from ${url}: ${error}`);
  }
}

const apiUrlWithErrorHandling =
  "https://api.coindesk.com/v1/bpi/currentprice.json";
fetchDataWithErrorHandling(apiUrlWithErrorHandling)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
