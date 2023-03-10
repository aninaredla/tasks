import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface currPosition {
    currPos: number;
    setPosition: (pos: number) => void;
}

function ShoveBoxButton({ currPos, setPosition }: currPosition): JSX.Element {
    return (
        <Button onClick={() => setPosition(4 + currPos)}>Shove the Box</Button>
    );
}

function MoveableBox({ currPos }: currPosition): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: currPos + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    currPos={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox
                    currPos={position}
                    setPosition={setPosition}
                ></MoveableBox>
            </div>
        </div>
    );
}
