import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🪁" | "🎆" | "🪔" | "🦃" | "🎁"; //Sankranti, Fourth of July, Diwali, Thankgiving, Christmas

const alphabeticalTransition: Record<string, string> = {
    "🎁": "🪔",
    "🪔": "🎆",
    "🎆": "🪁",
    "🪁": "🦃",
    "🦃": "🎁"
};

const calendarTransition: Record<string, string> = {
    "🪁": "🎆",
    "🎆": "🪔",
    "🪔": "🦃",
    "🦃": "🎁",
    "🎁": "🪁"
};

export function CycleHoliday(): JSX.Element {
    //return <div>Cycle Holiday 🪔</div>;
    // Sankranti(🪁) 4thJuly(🎆) Diwali(🪔) thanksgiving(🦃) christmas(🎁)
    const [Holiday, setHoliday] = useState<string>("🪁");
    function changeByAlphabet(): void {
        const newHoliday = alphabeticalTransition[Holiday];
        setHoliday(newHoliday);
    }
    function changeByYear(): void {
        const newHoliday = calendarTransition[Holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <p>Holiday: {Holiday}</p>
            <Button onClick={changeByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changeByYear}>Advance by Year</Button>
        </div>
    );
}
