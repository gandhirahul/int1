import React from "react";
import css from "./Tweet.module.css";

export const Tweet = ({ image, username, text }) => (
  <div className={css.tweetRow}>
    <div className={css.imageWrapper}>
      <img className={css.tweetImage} src={image} alt={username} />
    </div>
    <div className={css.tweetContent}>
      <h2>{username}</h2>
      <p className={css.tweetText}>{text}</p>
    </div>
  </div>
);

export const MemoTweet = React.memo(Tweet);
