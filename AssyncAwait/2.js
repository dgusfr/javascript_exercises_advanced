async function fetchSequentialData() {
  const urls = [
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    "https://api.spacexdata.com/v4/launches/latest",
    "https://api.exchangerate-api.com/v4/latest/USD",
  ];

  try {
    for (const [index, url] of urls.entries()) {
      const data = await fetchData(url);
      console.log(`Data ${index + 1}:`, data);
    }
  } catch (error) {
    console.error(`Error in fetching sequential data: ${error}`);
  }
}

fetchSequentialData();
