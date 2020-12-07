import { React, useState, useEffect } from "react";

export default function TweetItem(props) {
  const url =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";
  const [tweets, updateTweets] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        updateTweets(data.tweets);
      });
  }, []);

  console.log(tweets);
  const tweetList = tweets.map((tweet) => {
    return (
      <div className="tweetDisplay" key={tweet.id}>
        <div className="userName">{tweet.userName}</div>
        <div className="tweetText">{tweet.content}</div>
        <div className="timestamp">{tweet.date}</div>
      </div>
    );
  });

  return <div>{tweetList}</div>;
}
