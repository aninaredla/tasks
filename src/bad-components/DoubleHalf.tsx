import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface changeValue {
    val: number;
    setDhValue: (currVal: number) => void;
}

function Doubler({ setDhValue, val }: changeValue): JSX.Element {
    return <Button onClick={() => setDhValue(2 * val)}>Double</Button>;
}

function Halver({ setDhValue, val }: changeValue): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * val)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} val={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} val={dhValue}></Halver>
        </div>
    );
}
