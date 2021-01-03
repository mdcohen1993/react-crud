import { useState } from "react";

export default function TweetItem(props) {
  const url =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";
  const [tweets, setTweets] = useState([]);
  let tweetIds = {}
  function fetchTweets(){
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let newTweets = []
        for (let i = 0; i < data.tweets.length; i++){
          if (!(data.tweets[i].id in tweetIds) ){
            newTweets.push(data.tweets[i])
            tweetIds[data.tweets[i].id] = true
          }
        }
        if(newTweets.length){
          for(let i = 0; i < newTweets.length; i++){
            tweets.push(newTweets[i])
          }
          return tweets
        }
      })
    }
  fetchTweets()

  console.log("rendering tweets: ", tweets);
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
