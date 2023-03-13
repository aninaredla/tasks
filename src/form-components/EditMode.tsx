import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            <div>
                {name} {isStudent ? "is" : "is not"} a student.
            </div>
            <div>
                {" "}
                {editMode && (
                    <>
                        <Form.Group controlId="formEdit">
                            <Form.Label>Enter Name:</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={updateName}
                                disabled={!editMode}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Check the box if you're a Student"
                            checked={isStudent}
                            onChange={updateStudent}
                            disabled={!editMode}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
