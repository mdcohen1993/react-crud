import "../App.css";
import { Form, Container, Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";


export function Profile(props) {
  const [user, setUser] = useContext(UserContext);

  const addUser = (e) => {
    const targetInput = e.target.value;
    e.preventDefault();
    setUser([
      {
        userName: JSON.parse(targetInput),
      },
    ]);
    console.log(user);
  };
  useEffect(() => {
    localStorage.setItem("tweetArray", user);
    console.log(user);
  });

  useEffect(() => {
    const data = localStorage.getItem("tweetArray");
    if (data) {
      setUser(data.tweetArray);
    }
  });

  return (
    <Container>
      <h1 className="profileHeader">Profile</h1>
      <Form className="form" onSubmit={addUser}>
        <Form.Label >User Name</Form.Label>
        <Form.Control
          className="profileInput"
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        <Button variant="primary" className="saveBtn" type="submit">
          Save
        </Button>{" "}
      </Form>
    </Container>
  );
}
