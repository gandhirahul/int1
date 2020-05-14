// componentDidMount() {
//   const twoSeconds = 2000;
//   this.addTweet

//   this.interval = setInterval(() => {
//     this.addTweet();
//   }, twoSeconds);
// }

import React from "react";
import { MemoTweets } from "../Tweets";
import {
  fetchTweetsByLastId,
  fetchTweetsBeforeNow,
  fetchTweetsBeforeId
} from "../../apis/tweetsApi";

export class Home extends React.PureComponent {
  state = {
    tweets: []
  };

  componentDidMount() {
    this.addTweet();

    document.addEventListener("scroll", this.addTweetsOnScroll);
  }

  addTweetsOnScroll = () => {
    const scrollDeep = window.scrollY;

    if (scrollDeep === 0) {
      this.interval = setInterval(() => {
        this.addTweet();
      }, 2000);
    }
    if (scrollDeep > 0) {
      clearInterval(this.interval);
    }
    console.log(
      scrollDeep + window.innerHeight,
      document.documentElement.scrollHeight
    );

    if (
      scrollDeep + window.innerHeight ===
      document.documentElement.scrollHeight
    ) {
      this.addTweet(true);
    }
  };

  async addTweet(fetchFromOldest = false) {
    const { tweets } = this.state;
    let lastTweetId = tweets[0] ? tweets[0].id : undefined;
    let fetchFunction =
      lastTweetId === 0 ? fetchTweetsBeforeNow : fetchTweetsByLastId;
    if (fetchFromOldest) {
      lastTweetId = tweets[tweets.length - 1].id;
      fetchFunction = fetchTweetsBeforeId;
    }
    const tweetsResponse = await fetchFunction(lastTweetId);

    if (!(tweetsResponse instanceof Error)) {
      if (fetchFromOldest) {
        this.setState({
          tweets: [...tweets, ...tweetsResponse]
        });
      } else {
        this.setState({
          tweets: [...tweetsResponse, ...tweets]
        });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    document.removeEventListener("scroll", this.addTweetsOnScroll);
  }

  render() {
    const { tweets } = this.state;
    return (
      <>
        <MemoTweets tweets={tweets} />
      </>
    );
  }
}
