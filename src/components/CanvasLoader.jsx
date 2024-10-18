import React from 'react'
import {Html, useProgress} from "@react-three/drei";

export default function CanvasLoader() {

    const progress = useProgress();

    return (
        <Html
            as={"div"}
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <span className={"canvas-loader"} />
            <p style={{
                fontStyle: 14,
                color: "#F1F1F1",
                fontWeight: 800,
                marginTop: 40
            }} >
                {progress !== 0 ? `${progress}` : `Loading...`}
            </p>
        </Html>
    )
}
