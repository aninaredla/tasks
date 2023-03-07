import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        //HOW TO DISABLE BUTTONS WITH CONDITIONS?
        <div>
            <Button onClick={startQuiz} disabled={progress || attempts <= 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
            <p>Attempts Left: {attempts}</p>
        </div>
    );
    //return <div>Start Attempt</div>;
}
