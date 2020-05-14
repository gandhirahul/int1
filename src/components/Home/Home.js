import React from "react";
import { MemoTweets } from "../Tweets";
import {
  fetchTweetsByLastId,
  fetchTweetsBeforeNow
} from "../../apis/tweetsApi";

export class Home extends React.PureComponent {
  state = {
    tweets: []
  };

  componentDidMount() {
    const twoSeconds = 2000;
    this.addTweet();

    this.interval = setInterval(() => {
      this.addTweet();
    }, twoSeconds);
  }

  async addTweet() {
    const { tweets } = this.state;
    const lastTweetId = tweets[0] ? tweets[0].id : undefined;
    const fetchFunction =
      lastTweetId === 0 ? fetchTweetsBeforeNow : fetchTweetsByLastId;

    const tweetsResponse = await fetchFunction(lastTweetId);
    if (!(tweetsResponse instanceof Error)) {
      this.setState({
        tweets: [...tweetsResponse, ...tweets]
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
