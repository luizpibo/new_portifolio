'use client'

import Lottie from "lottie-react-web";
import spinningAnimation from "./spinningAnimation.json";

export default function Spinning() {
    return (
        <>
            <div className="absolute bottom-0 bg-center top-0 left-0 right-0 scale-150 w-full mx-auto z-0 overflow-visible">
                <Lottie
                    options={{
                        animationData: spinningAnimation,
                    }}
                    height="100%"
                    width="100%"
                />
            </div>
        </>
    )
}