import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        questionType === "multiple_choice_question"
            ? setType("short_answer_question")
            : setType("multiple_choice_question");
    }
    //return <div>Change Type</div>;
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
        </div>
    );
}
