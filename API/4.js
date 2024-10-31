async function handleApiError(requestFunction, maxAttempts) {
  let attempts = 0;
  while (attempts < maxAttempts) {
    try {
      return await requestFunction();
    } catch (error) {
      attempts++;
      if (attempts >= maxAttempts) {
        throw new Error(`Failed after ${attempts} attempts: ${error}`);
      }
    }
  }
}

async function fetchWithRetry() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
}

handleApiError(fetchWithRetry, 3)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
