import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Candle = {
  x: number;
  z: number;
  height: number;
  wick: number;
  bull: boolean;
  phase: number;
  baseY: number;
};

function makeCandles(count: number): Candle[] {
  // deterministic pseudo-random so SSR/CSR and reloads stay stable
  let seed = 20260901;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  const out: Candle[] = [];
  for (let i = 0; i < count; i++) {
    const col = i % 8;
    const row = Math.floor(i / 8);
    out.push({
      x: (col - 3.5) * 2.6 + (rnd() - 0.5) * 0.8,
      z: (row - 2) * 3.4 + (rnd() - 0.5) * 1.2,
      height: 1.6 + rnd() * 5.2,
      wick: 0.8 + rnd() * 2.2,
      bull: rnd() > 0.48,
      phase: rnd() * Math.PI * 2,
      baseY: (rnd() - 0.5) * 2.4,
    });
  }
  return out;
}

function Candlestick({ candle }: { candle: Candle }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.position.y = candle.baseY + Math.sin(t * 0.45 + candle.phase) * 0.45;
  });

  const color = candle.bull ? "#22c98a" : "#d3324a";

  return (
    <group ref={group} position={[candle.x, candle.baseY, candle.z]}>
      <mesh>
        <boxGeometry args={[1.3, candle.height, 1.3]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.62}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.35}
          metalness={0.1}
        />
      </mesh>
      <mesh position={[0, candle.height / 2 + candle.wick / 2, 0]}>
        <boxGeometry args={[0.16, candle.wick, 0.16]} />
        <meshStandardMaterial color={color} transparent opacity={0.45} emissive={color} />
      </mesh>
      <mesh position={[0, -candle.height / 2 - candle.wick / 3, 0]}>
        <boxGeometry args={[0.16, candle.wick / 1.5, 0.16]} />
        <meshStandardMaterial color={color} transparent opacity={0.3} emissive={color} />
      </mesh>
    </group>
  );
}

function Field() {
  const candles = useMemo(() => makeCandles(40), []);
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.x = Math.sin(t * 0.08) * 4.5;
    state.camera.position.y = 2.4 + Math.sin(t * 0.06) * 0.8;
    state.camera.lookAt(0, 0, 0);
    if (group.current) group.current.rotation.y = Math.sin(t * 0.04) * 0.08;
  });

  return (
    <group ref={group}>
      {candles.map((c, i) => (
        <Candlestick key={i} candle={c} />
      ))}
    </group>
  );
}

export default function CandlestickScene() {
  return (
    <Canvas
      camera={{ position: [0, 2.4, 18], fov: 55 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#08090c"]} />
      <fog attach="fog" args={["#08090c", 22, 52]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[8, 14, 10]} intensity={1.1} />
      <pointLight position={[-10, 4, 6]} intensity={35} color="#22c98a" distance={40} />
      <pointLight position={[12, -2, 4]} intensity={25} color="#d3324a" distance={40} />
      <Field />
    </Canvas>
  );
}
