import React, { useState } from "react";
import { Button } from "react-bootstrap";

// export const COLORS = ["red", "blue", "green"];
// const DEFAULT_COLOR_INDEX = 0;

// function ChangeColor(): JSX.Element {
//     const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
//     return (
//         <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
//             Next Color
//         </Button>
//     );
// }

const colorTransition: Record<string, string> = {
    red: "blue",
    blue: "green",
    green: "red"
};

function ColorPreview(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    function changeColor(): void {
        const newColor = colorTransition[color];
        setColor(newColor);
    }
    return (
        <>
            <div>
                <span>The current color is: {color}</span>
            </div>
            <div>
                <Button onClick={changeColor}>Next Color</Button>
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        </>
    );
}

export function ColoredBox(): JSX.Element {
    return (
        <div>
            <h3>Colored Box</h3>
            {/* <span>The current color is: {color}</span> */}
            <div>
                {/* <ChangeColor></ChangeColor> */}
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}
