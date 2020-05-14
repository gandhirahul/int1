import React from "react";
import { MemoTweet } from "./Tweet";
import css from "./Tweets.module.css";

export const Tweets = ({ tweets }) => {
  return (
    <div className={css.tweetsPage}>
      {tweets.length ? (
        tweets.map(tweet => (
          <MemoTweet
            key={tweet.id}
            image={tweet.image}
            username={tweet.username}
            text={tweet.text}
          />
        ))
      ) : (
        <div className={css.loadingState}>Loading...</div>
      )}
    </div>
  );
};

export const MemoTweets = React.memo(Tweets);
