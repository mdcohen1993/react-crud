import { Row } from 'react-bootstrap';
import { TweetContext } from './TweetForm';
import { useContext } from 'react';

export default function TweetItem(props){
    const tweets = props.tweets
    const tweetDisplay = tweets.map(tweet =>
        {
            return(
                <div className='tweetDesign' key={tweet.key}>
                    {tweet.text}
                </div>
            )
        })

        return(
            <Row className="justify-content-center">
            <div>{tweetDisplay}</div>
            </Row>
        )

}