import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function updateAttemptsLeft(event: React.ChangeEvent<HTMLInputElement>) {
        if (!isNaN(parseInt(event.target.value))) {
            setAttemptsRequested(parseInt(event.target.value));
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts Left: {attemptsLeft}</span>
            <Form.Group controlId="formAttemptsRequested">
                <Form.Label>Enter Requested Attempts (Number):</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateAttemptsLeft}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft <= 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + attemptsRequested)
                }
            >
                gain
            </Button>
        </div>
    );
}
