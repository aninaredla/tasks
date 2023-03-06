import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeft] = useState<number>(2);
    const [rightDie, setRight] = useState<number>(3);

    function changeLeft(): void {
        setLeft(d6);
    }
    function changeRight(): void {
        setRight(d6);
    }

    return (
        <div>
            <Button onClick={changeLeft}>Roll Left</Button>
            <Button onClick={changeRight}>Roll Right</Button>
            <span data-testid="left-die">{leftDie.toString()}</span>{" "}
            <span data-testid="right-die">{rightDie.toString()}</span>
            {leftDie === rightDie && leftDie !== 1 && <div>Win</div>}
            {leftDie === 1 && rightDie === 1 && <div>Lose</div>}
        </div>
    );
    //return <div>Two Dice</div>;
}
