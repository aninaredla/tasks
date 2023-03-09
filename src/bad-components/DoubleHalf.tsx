import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

// function Doubler(): JSX.Element {
//     return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
// }

// function Halver(): JSX.Element {
//     return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
// }

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function doubleVal(): void {
        setDhValue(dhValue * 2);
    }
    function halfVal(): void {
        setDhValue(dhValue / 2);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            {/* <Doubler></Doubler>
            <Halver></Halver> */}
            <Button onClick={doubleVal}>Double</Button>
            <Button onClick={halfVal}>Halve</Button>
        </div>
    );
}

//AM I ALLOWED TO EVEN DO IT THIS WAY??? WILL THE TESTS BUG OUT???
