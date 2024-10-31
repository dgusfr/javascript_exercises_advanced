async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not fetch data from ${url}: ${error}`);
  }
}

const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
fetchData(apiUrl).then((data) => console.log(data));
