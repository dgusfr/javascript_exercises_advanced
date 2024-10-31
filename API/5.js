async function fetchProtectedData(url, token) {
  try {
    let response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not fetch protected data: ${error}`);
  }
}

const apiUrl = "https://api.protected.com/data";
const token = "your-auth-token";
fetchProtectedData(apiUrl, token).then((data) => console.log(data));
