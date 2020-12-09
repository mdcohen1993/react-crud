import { useState, useContext, useEffect } from "react";
import { Form, Button, Alert, Row, Spinner } from "react-bootstrap";
import "./TweetForm.css";
import TweetItem from "./TweetItem";
import { UserContext } from "../UserContext";

export default function TweetForm(props) {
  const [currentTweet, setCurrentTweet] = useState("");
  const [loadSpinner, setLoadSpinner] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const timeStamp = new Date(Date.now());
  const url =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

const handleChange =(e) => {
    setUser(e.target.value)
  }

  useEffect(() => {
    const data = localStorage.getItem("tweetArray");
    if (data) {
      setUser(data.tweetArray);
    }
  });

  const addTweet = (e) => {
    e.preventDefault();
    setLoadSpinner(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: currentTweet,
        userName: user,
        date: timeStamp,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setCurrentTweet(data);
        setLoadSpinner(false);
      })
      .catch((e) => console.log(e));
  };


  return (
    <>
      <Row className="justify-content-center">
        <Form className="tweetForm" onSubmit={addTweet}>
          <Form.Group>
            <Form.Control
              required
              className="textarea"
              as="textarea"
              name="tweet[currentTweet]"
              type="text"
              placeholder="What you have in mind..."
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="addBtn"
            type="submit"
            disabled={currentTweet.length > 140 && "disabled"}
          >
            Tweet
          </Button>{" "}
          {currentTweet.length > 140 && (
            <Alert variant="danger" className="alert">
              The tweet can't contain more then 140 chars.
            </Alert>
          )}
          <Spinner
            className="loadSpinner"
            animation="border"
            variant="light"
            style={{ display: loadSpinner ? "block" : "none" }}
          />
        </Form>
      </Row>
      <Row className="justify-content-center">
        <TweetItem key={timeStamp} currentTweet={currentTweet}></TweetItem>
      </Row>
    </>
  );
}
