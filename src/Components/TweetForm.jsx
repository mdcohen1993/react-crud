import { React, useState, useEffect } from 'react';
import { Form, Button, Alert, Row } from 'react-bootstrap';
import './TweetForm.css'


export default function TweetForm(props) {
  const [tweets, setTweets] = useState([]);
  const [currentTweet, setCurrentTweet] = useState("");
  const timeStamp = new Date(Date.now())

  const addTweet = e => {
    e.preventDefault();
    setTweets([
      ...tweets,
      {
        text: currentTweet,
        key: timeStamp.toISOString()
      }
    ]);
    setCurrentTweet('')
    console.log(currentTweet)
  };

  useEffect(()=>{
    const data = localStorage.getItem('tweetArray');
    if(data){
      setTweets(JSON.parse(data));
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('tweetArray', JSON.stringify([...tweets])
  )});


  const tweetDisplay = tweets.map(tweet => {
    return (
      <div className='tweetDisplay' key={tweet.key}>
        <div className='userName'>
          Max
          </div>
      <div className='tweetText'>
          {tweet.text}
        </div>
        <div className ='timestamp'>{tweet.key}</div>
      </div>
    )
  })

  return (
    <>
      <Row className='justify-content-center'>
        <Form className='tweetForm' onSubmit={addTweet}>
          <Form.Group>
            <Form.Control required className='textarea' as='textarea' type='tweet' placeholder='What you have in mind...' onChange={e => setCurrentTweet(e.target.value)} value={currentTweet.text} />
          </Form.Group>
          <Button variant="primary" className='addBtn' type='submit' disabled={currentTweet.length > 140 && 'disabled'}>Tweet</Button>{' '}

          {currentTweet.length > 140 && <Alert variant='danger' className='alert'>
            The tweet can't contain more then 140 chars.
          </Alert>}
        </Form>
      </Row>
      <Row className='justify-content-center'>
        <div>
          {tweetDisplay}
        </div>
      </Row>
    </>
  )
}

