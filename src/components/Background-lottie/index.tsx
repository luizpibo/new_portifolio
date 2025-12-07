"use client"

import background from "./background2.json";
import Lottie from "lottie-react-web";

export default function Background() {
    return (
        <>
            {/* Container fixo que ocupa toda a tela */}
            <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none overflow-hidden">
                {/* Div com tamanho exagerado para garantir cobertura total */}
                <div
                    className="absolute blur-sm opacity-30 md:opacity-40"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: 'max(200vw, 800px)',
                        minHeight: 'max(200vh, 1400px)',
                        width: '250vw',
                        height: '250vh',
                    }}
                >
                    {/* Container interno que força o Lottie a expandir */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <div style={{ width: '100%', height: '100%' }}>
                            <Lottie
                                options={{
                                    animationData: background,
                                    loop: true,
                                    autoplay: true,
                                }}
                                height="100%"
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
