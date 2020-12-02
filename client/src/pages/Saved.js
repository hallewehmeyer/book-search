import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import booksController from "../../../controllers/booksController";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Search from "./Search";



function Saved(props) {
  const [book, setSaved] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {} = useParams()
  useEffect(() => {
    API.getSaved()
      .then(res => {
        console.log(res.data)
        setSaved(res.data)})
      .catch(err => console.log(err));

  }, [])


  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1></h1>
              <p>
              
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Saved;
