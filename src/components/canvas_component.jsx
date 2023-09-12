import { useMemo } from 'react';
import { Float, Scroll, ScrollControls, Sparkles } from "@react-three/drei";
import OverlayHtml from "./overlay_html";
import ButterflyModel from "../models/Scene";
import { Bloom, DepthOfField, EffectComposer, Vignette } from "@react-three/postprocessing";

const CanvasComponent = () => {

    return (
        <>
            <EffectComposer>
                <DepthOfField 
                    focusDistance={0}
                    focalLength={0.2}
                    bokehScale={3}
                />
                <Bloom 
                    intensity={2}
                    luminanceThreshold={0.1} 
                    luminanceSmoothing={0.9}
                />
                <Vignette 
                    eskil={false} 
                    offset={.1} 
                    darkness={1.3} 
                />
            </EffectComposer>
            <color attach='background' args={['#000000']} />
            <ambientLight intensity={1} />
            <directionalLight position={[0,5,0]} intensity={1.5} castShadow />

            <ScrollControls pages={6} damping={0.5}>
                <Scroll>
                    <Float
                        speed={0.5}
                        rotationIntensity={2}
                        floatIntensity={0.2}
                        floatingRange={[1, 1]}
                    >
                        <ButterflyModel scale={0.02} position={[2.5, -1.5, -0.5]} />
                        <ButterflyModel scale={0.02} position={[-6.5, -0.75, -1.5]} />
                    </Float>
                    <Sparkles noise={0} count={700} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}/>
                    <Sparkles noise={0} count={100} speed={0.02} size={3} color={"#FFF"} opacity={2} scale={[30,100,10]} />
                </Scroll>
                <Scroll 
                    html 
                    style={{
                        'width': '100%'
                    }}
                >
                    <OverlayHtml />
                </Scroll>
            </ScrollControls>
        </>
    );
}

export default CanvasComponent;