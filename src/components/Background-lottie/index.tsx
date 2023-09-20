"use client"

import background from "./background2.json";
import Lottie from "lottie-react-web";

export default function Background() {
    return (
        <>
            <div className="absolute top-24 bg-center left-0 right-0 w-full mx-auto z-0 scale-150 blur-sm max-w-6xl">
                <Lottie
                    options={{
                        animationData: background,
                    }}
                />
            </div>
        </>
    )
}
