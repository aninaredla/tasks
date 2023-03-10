import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorIdx {
    coloridx: number;
    setColorIndex: (newIndex: number) => void;
}

function ChangeColor({ setColorIndex, coloridx }: colorIdx): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((coloridx + 1) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview(props: colorIdx): JSX.Element {
    return (
        <>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[props.coloridx],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        </>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setColorIndex={setColorIndex}
                    coloridx={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    coloridx={colorIndex}
                    setColorIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
