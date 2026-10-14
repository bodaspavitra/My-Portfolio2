import React, { useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/* =========================
   Cosmic Particles
========================= */

const CosmicParticles = () => {
    const particlesRef = React.useRef();

    const particles = useMemo(() => {
        const count = 3000;

        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const cyan = new THREE.Color("#00e5ff");
        const purple = new THREE.Color("#8b5cf6");
        const pink = new THREE.Color("#ec4899");

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            const radius = 3 + Math.random() * 12;
            const angle = Math.random() * Math.PI * 2;

            positions[i3] =
                Math.cos(angle) * radius +
                (Math.random() - 0.5) * 5;

            positions[i3 + 1] =
                (Math.random() - 0.5) * 10;

            positions[i3 + 2] =
                Math.sin(angle) * radius +
                (Math.random() - 0.5) * 5;

            const random = Math.random();

            const color =
                random < 0.33
                    ? cyan
                    : random < 0.66
                        ? purple
                        : pink;

            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        return {
            positions,
            colors,
        };
    }, []);

    useFrame((state) => {
        if (!particlesRef.current) return;

        particlesRef.current.rotation.y += 0.0007;

        particlesRef.current.rotation.x =
            state.mouse.y * 0.03;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />

                <bufferAttribute
                    attach="attributes-color"
                    count={particles.colors.length / 3}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>

            <pointsMaterial
                size={0.035}
                vertexColors
                transparent
                opacity={0.85}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};


/* =========================
   Robot
========================= */

const Robot = () => {
    const robotRef = React.useRef();

    useFrame((state) => {
        if (!robotRef.current) return;

        robotRef.current.rotation.y =
            THREE.MathUtils.lerp(
                robotRef.current.rotation.y,
                state.mouse.x * 0.5,
                0.05
            );

        robotRef.current.rotation.x =
            THREE.MathUtils.lerp(
                robotRef.current.rotation.x,
                -state.mouse.y * 0.2,
                0.05
            );
    });

    return (
        <Float
            speed={2}
            rotationIntensity={0.2}
            floatIntensity={0.5}
        >
            <group
                ref={robotRef}
                position={[0, -0.5, 0]}
            >

                {/* Head */}
                <mesh position={[0, 1.6, 0]}>
                    <boxGeometry args={[1.4, 1.15, 1.15]} />

                    <meshStandardMaterial
                        color="#15152a"
                        metalness={0.8}
                        roughness={0.25}
                    />
                </mesh>

                {/* Face */}
                <mesh position={[0, 1.6, 0.59]}>
                    <boxGeometry args={[1.05, 0.65, 0.04]} />

                    <meshStandardMaterial
                        color="#020617"
                        emissive="#06b6d4"
                        emissiveIntensity={0.5}
                    />
                </mesh>

                {/* Eyes */}
                <mesh position={[-0.25, 1.65, 0.63]}>
                    <sphereGeometry args={[0.09, 16, 16]} />

                    <meshStandardMaterial
                        color="#00ffff"
                        emissive="#00ffff"
                        emissiveIntensity={5}
                    />
                </mesh>

                <mesh position={[0.25, 1.65, 0.63]}>
                    <sphereGeometry args={[0.09, 16, 16]} />

                    <meshStandardMaterial
                        color="#00ffff"
                        emissive="#00ffff"
                        emissiveIntensity={5}
                    />
                </mesh>

                {/* Antenna */}
                <mesh position={[0, 2.3, 0]}>
                    <cylinderGeometry args={[0.035, 0.035, 0.35]} />

                    <meshStandardMaterial color="#8b5cf6" />
                </mesh>

                <mesh position={[0, 2.5, 0]}>
                    <sphereGeometry args={[0.09, 16, 16]} />

                    <meshStandardMaterial
                        color="#ec4899"
                        emissive="#ec4899"
                        emissiveIntensity={4}
                    />
                </mesh>

                {/* Body */}
                <mesh position={[0, 0.3, 0]}>
                    <boxGeometry args={[1.7, 1.8, 1]} />

                    <meshStandardMaterial
                        color="#111827"
                        metalness={0.85}
                        roughness={0.2}
                    />
                </mesh>

                {/* Chest */}
                <mesh position={[0, 0.45, 0.53]}>
                    <boxGeometry args={[0.85, 0.55, 0.04]} />

                    <meshStandardMaterial
                        color="#020617"
                        emissive="#8b5cf6"
                        emissiveIntensity={0.6}
                    />
                </mesh>

                {/* Arms */}
                <mesh position={[-1.05, 0.3, 0]}>
                    <capsuleGeometry
                        args={[0.22, 0.9, 8, 16]}
                    />

                    <meshStandardMaterial
                        color="#1e293b"
                        metalness={0.8}
                    />
                </mesh>

                <mesh position={[1.05, 0.3, 0]}>
                    <capsuleGeometry
                        args={[0.22, 0.9, 8, 16]}
                    />

                    <meshStandardMaterial
                        color="#1e293b"
                        metalness={0.8}
                    />
                </mesh>

                {/* Legs */}
                <mesh position={[-0.45, -1.25, 0]}>
                    <capsuleGeometry
                        args={[0.25, 0.8, 8, 16]}
                    />

                    <meshStandardMaterial
                        color="#111827"
                        metalness={0.8}
                    />
                </mesh>

                <mesh position={[0.45, -1.25, 0]}>
                    <capsuleGeometry
                        args={[0.25, 0.8, 8, 16]}
                    />

                    <meshStandardMaterial
                        color="#111827"
                        metalness={0.8}
                    />
                </mesh>

            </group>
        </Float>
    );
};


/* =========================
   Scene
========================= */

const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.25} />

            <pointLight
                position={[0, 3, 4]}
                intensity={20}
                distance={10}
                color="#06b6d4"
            />

            <pointLight
                position={[-4, 1, 2]}
                intensity={15}
                distance={10}
                color="#8b5cf6"
            />

            <pointLight
                position={[4, 1, 2]}
                intensity={15}
                distance={10}
                color="#ec4899"
            />

            <CosmicParticles />

            <Sparkles
                count={250}
                scale={[15, 10, 15]}
                size={2}
                speed={0.3}
                color="#c084fc"
            />

            <Robot />

            <fog
                attach="fog"
                args={["#030014", 5, 20]}
            />
        </>
    );
};


/* =========================
   Intro Loader
========================= */

export const IntroLoader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 4500;
        const start = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;

            const value = Math.min(
                Math.round(
                    (elapsed / duration) * 100
                ),
                100
            );

            setProgress(value);

            if (value >= 100) {
                clearInterval(interval);

                setTimeout(() => {
                    setLoading(false);
                }, 500);
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[99999] h-screen w-screen overflow-hidden bg-[#030014]">

            {/* Three.js */}
            <div className="absolute inset-0">

                <Canvas
                    camera={{
                        position: [0, 0, 8],
                        fov: 50,
                    }}
                    dpr={[1, 2]}
                >
                    <Scene />
                </Canvas>

            </div>

            {/* Dark Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#030014_100%)]" />

            {/* Text */}
            <div className="relative z-20 flex h-full flex-col items-center justify-center text-center">

                <div className="mt-[350px]">

                    <p className="mb-3 text-xs uppercase tracking-[0.6em] text-cyan-300/80">
                        Initializing
                    </p>

                    <h1 className="bg-gradient-to-r from-cyan-300 via-purple-400 to-fuchsia-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
                        Welcome to Pavitra's World
                    </h1>

                    <p className="mt-4 text-sm tracking-[0.3em] text-white/40">
                        UI/UX & PRODUCT DESIGNER
                    </p>

                    {/* Loading */}
                    <div className="mx-auto mt-8 w-64">

                        <div className="mb-2 flex justify-between text-[10px] uppercase tracking-widest text-white/40">

                            <span>Loading</span>

                            <span>{progress}%</span>

                        </div>

                        <div className="h-[2px] overflow-hidden rounded-full bg-white/10">

                            <div
                                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 transition-all duration-100"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />

                        </div>

                    </div>

                    {/* Music Bars */}
                    <div className="mt-8 flex items-end justify-center gap-1">

                        <span className="h-3 w-[2px] animate-pulse bg-cyan-400" />

                        <span className="h-6 w-[2px] animate-pulse bg-purple-400 [animation-delay:100ms]" />

                        <span className="h-4 w-[2px] animate-pulse bg-fuchsia-400 [animation-delay:200ms]" />

                        <span className="h-8 w-[2px] animate-pulse bg-cyan-400 [animation-delay:300ms]" />

                        <span className="h-5 w-[2px] animate-pulse bg-purple-400 [animation-delay:400ms]" />

                        <span className="h-3 w-[2px] animate-pulse bg-fuchsia-400 [animation-delay:500ms]" />

                    </div>

                    <p className="mt-2 text-[9px] tracking-[0.4em] text-white/30">
                        SOUND ON
                    </p>

                </div>

            </div>

        </div>
    );
};