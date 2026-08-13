import React from 'react';
import { useTheme } from '../context/ThemeContext';

// A fixed, full-viewport layered background: soft animated color
// orbs + a subtle perspective grid, so it reads as a "3D" backdrop
// without the weight of a real three.js scene. Fully theme-aware.
export const AppBackground = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden transition-colors duration-700 ${
        isDark ? 'bg-[#05050a]' : 'bg-[#f5f6fb]'
      }`}
      aria-hidden="true"
    >
      {/* Perspective grid floor */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
            : 'linear-gradient(rgba(15,15,30,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,15,30,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)',
        }}
      />

      {/* Floating gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Vignette to keep content readable */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 70% 60% at 50% 20%, transparent 0%, #05050a 85%)'
            : 'radial-gradient(ellipse 70% 60% at 50% 20%, transparent 0%, #f5f6fb 85%)',
        }}
      />

      <style>{`
        .orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: ${isDark ? 0.45 : 0.35};
          will-change: transform;
        }
        .orb-1 {
          width: 42vw;
          height: 42vw;
          top: -10%;
          left: -10%;
          background: radial-gradient(circle, #ec4899, transparent 70%);
          animation: float1 22s ease-in-out infinite;
        }
        .orb-2 {
          width: 38vw;
          height: 38vw;
          top: 20%;
          right: -12%;
          background: radial-gradient(circle, #6366f1, transparent 70%);
          animation: float2 26s ease-in-out infinite;
        }
        .orb-3 {
          width: 34vw;
          height: 34vw;
          bottom: -12%;
          left: 25%;
          background: radial-gradient(circle, #06b6d4, transparent 70%);
          animation: float3 30s ease-in-out infinite;
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(6vw, 8vh) scale(1.15); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5vw, 6vh) scale(1.1); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4vw, -6vh) scale(1.2); }
        }
      `}</style>
    </div>
  );
};
