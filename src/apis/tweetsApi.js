import { baseUrl, username, routes } from "./routes";

const fetchWrapper = fetchUrl => {
  return fetch(fetchUrl)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(
      data => {
        return data;
      },
      error => {
        return new Error(error);
      }
    )
    .catch(err => {
      console.error(err);
    });
};

export const fetchTweetsByLastId = lastTweetId => {
  return fetchWrapper(
    `${baseUrl}/${username}/api?${routes.afterID}${lastTweetId}`
  );
};

export const fetchTweetsBeforeNow = () => {
  const timestamp = Date.now();
  return fetchWrapper(
    `${baseUrl}/${username}/api?${routes.beforeTime}${timestamp}`
  );
};

export const resetDatabase = () => {
  return fetch(`${baseUrl}/${username}/${routes.reset}`);
};
