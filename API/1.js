async function fetchRandomJoke() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let joke = await response.json();
    return joke;
  } catch (error) {
    console.error(`Could not fetch joke: ${error}`);
  }
}

fetchRandomJoke().then((joke) => console.log(joke));
