import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Ani Naredla was here. Hello World.
            </p>
            <h1>Ani put this header here</h1>
            <img
                src="https://static01.nyt.com/images/2022/06/28/science/14tb-giantrodents/14tb-giantrodents-superJumbo.jpg"
                alt="A Capybara Vibing"
            />
            A list of random foods:
            <ul>
                <li> coffee creamer </li>
                <li> blueberry oatmeal </li>
                <li> chicken kabob </li>
                <li> pasta shells </li>
                <li> tea biscuits</li>
                <li> mild cheddar</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        This is text in the left column of the page. There is a
                        red-filled rectangle left-aligned to the page below.
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "100px",
                                width: "300px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        This is text in the right column of the page. There is a
                        red-filled rectangle left-aligned to the page below. My
                        OCD is slightly triggered by the lack of symmetry.
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "100px",
                                width: "300px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
