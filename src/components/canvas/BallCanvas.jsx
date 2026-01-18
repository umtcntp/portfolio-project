import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import Ball from "./Ball";
const PALETTE = [
    "#1F2937",
    "#111827",
    "#0F172A",
    "#1E293B",
    "#223049",
    "#16263A",
];


const BallsCanvas = ({ icons = [] }) => {
    const { cols, positions } = useMemo(() => makeGrid(icons.length), [icons.length]);

    return (
        <Canvas
            orthographic
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            // zoom arttıkça içerik büyür, azaldıkça küçülür
            camera={{ position: [0, 0, 10], zoom: 70 }}
        >
            <Suspense fallback={<CanvasLoader />}>
                {/* UI gibi kalsın diye zoom kapalı; rotate da kapatmak istersen false yap */}
                <OrbitControls enableZoom={false} enableRotate={false} />

                {/* Işıklar */}
                <ambientLight intensity={0.65} />
                <directionalLight position={[2, 2, 5]} intensity={0.9} />

                {icons.map((icon, i) => (
                    <group key={`${i}-${icon}`} position={positions[i]}>
                        <Ball
                            imgUrl={icon}
                            index={i}
                            baseColor={PALETTE[i % PALETTE.length]}
                        />
                    </group>
                ))}
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

function makeGrid(n) {
    // 4 kolon genelde ideal; çok ikon varsa 5'e çıkabilir
    const cols = 6;
    const rows = Math.ceil(n / cols);

    // spacing küçüldükçe sağ/sol boşluk azalır (ama çok küçültürsen toplar yaklaşır)
    const spacingX = 3;
    const spacingY = 2.7;

    // Grid'i hem X hem Y ekseninde ortalamak için offset hesaplıyoruz
    const totalW = (cols - 1) * spacingX;
    const totalH = (rows - 1) * spacingY;

    const positions = [];
    for (let i = 0; i < n; i++) {
        const r = Math.floor(i / cols);
        const c = i % cols;

        const x = c * spacingX - totalW / 2;
        const y = -(r * spacingY) + totalH / 2; // üstten başlasın, aşağı insin

        positions.push([x, y, 0]);
    }

    return { cols, positions };
}

export default BallsCanvas;
