import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQ = questions.filter(
        (question: Question): boolean => question.published
    );
    return publishedQ;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQ = questions.filter(
        (question: Question): boolean =>
            question.body !== "" &&
            question.expected !== "" &&
            question.options.length > 0
    );
    return nonEmptyQ;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundQ = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (foundQ === undefined) {
        return null;
    }
    return foundQ; // HOW TO RETURN NULL??
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const filteredQ = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return filteredQ;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questionNames = questions.map(
        (question: Question): string => question.name
    );
    return questionNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    //const pointSum = questions.reduce(
    //    (currSum: number, question: Question) => (currSum + question.points, 0)
    //);
    let pointSum = 0;
    questions.map((question: Question) =>
        question.points > 0 ? (pointSum += question.points) : (pointSum += 0)
    );
    return pointSum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let publishedPoints = 0;
    questions.map((question: Question) =>
        question.published === true
            ? (publishedPoints += question.points)
            : (publishedPoints += 0)
    );
    return publishedPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    //let questionCSV = "";
    // questions.map(
    //     (question: Question) =>
    //         (questionCSV +=
    //             question.id.toString() +
    //             "," +
    //             question.name +
    //             "," +
    //             question.options.length.toString() +
    //             "," +
    //             question.points.toString() +
    //             "," +
    //             question.published +
    //             "\n")
    // );
    const questionCSV = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return questionCSV;
    //WHAT IS CAUSING ERROR??
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const qAnswers: Answer[] = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return qAnswers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPublishedQ = questions.map(
        (question: Question): Question => ({
            ...question,
            published: question.published === false ? true : true
        })
    );
    return allPublishedQ;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let typeshort = 0;
    let typemcq = 0;
    questions.map((question: Question) =>
        question.type === "short_answer_question"
            ? (typeshort += 1)
            : (typeshort += 0)
    );
    questions.map((question: Question) =>
        question.type === "multiple_choice_question"
            ? (typemcq += 1)
            : (typemcq += 0)
    );
    return typemcq === 0 || typeshort === 0;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    //how to make a full deep
    let newQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    newQuestions = [...newQuestions, makeBlankQuestion(id, name, type)];
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQuestionsRenamed = questions.map(
        (question: Question): Question => ({
            ...question,
            name: targetId === question.id ? newName : question.name
        })
    );
    return newQuestionsRenamed;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    // change question type
    let newQuestionTypes = questions.map(
        (question: Question): Question => ({
            ...question,
            type: targetId === question.id ? newQuestionType : question.type
        })
    );
    // change question options list
    newQuestionTypes = newQuestionTypes.map(
        (question: Question): Question => ({
            ...question,
            options:
                targetId === question.id &&
                question.type !== "multiple_choice_question"
                    ? []
                    : question.options
        })
    );
    return newQuestionTypes;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let newQuestionOptions = questions.map(
        // adding the option if needed
        (question: Question): Question => ({
            ...question,
            options:
                targetId === question.id && targetOptionIndex === -1
                    ? [...question.options, newOption]
                    : question.options
        })
    );
    //case if the target option index is NOT -1
    const newOptions = [...questions[targetId].options];
    if (targetOptionIndex !== -1) {
        newOptions[targetOptionIndex] = newOption; //change the option list
    }
    newQuestionOptions = newQuestionOptions.map(
        //change the options array for the required question
        (question: Question): Question => ({
            ...question,
            options:
                targetId === question.id && targetOptionIndex !== -1
                    ? newOptions
                    : question.options
        })
    );
    return newQuestionOptions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const targetQArr = questions.filter(
        (question: Question): boolean => question.id === targetId
    ); // making array with the target question
    const targetQ = targetQArr[0];
    const duplicateQ = duplicateQuestion(newId, targetQ); //making the duplicate question with newID
    let newQuestionDuplicate = questions.map(
        (question: Question): Question => ({ ...question })
    ); //deep copy of questions array
    const targetidx = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    newQuestionDuplicate = newQuestionDuplicate.splice(
        targetidx,
        0,
        duplicateQ
    );
    return newQuestionDuplicate;
}
