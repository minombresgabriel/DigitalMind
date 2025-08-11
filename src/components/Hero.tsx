"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated mesh gradient background */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            conic-gradient(from 0deg at 50% 50%, 
              #7c3aed, #ec4899, #06b6d4, #8b5cf6, #f59e0b, #7c3aed),
            linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #581c87 100%)
          `,
          backgroundSize: '100% 100%, 400% 400%, 100% 100%',
          animation: 'gradient-shift 8s ease infinite'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic glow orbs */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ec4899, #f59e0b)',
            left: `${20 + mousePosition.x * 0.1}%`,
            top: `${10 + mousePosition.y * 0.05}%`,
            transform: `translate(-50%, -50%) scale(${1 + Math.sin(Date.now() * 0.001) * 0.2})`,
            animation: 'pulse-glow 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #06b6d4, #8b5cf6)',
            right: `${15 + mousePosition.x * 0.08}%`,
            bottom: `${20 + mousePosition.y * 0.06}%`,
            transform: `translate(50%, 50%) scale(${1 + Math.cos(Date.now() * 0.0015) * 0.3})`,
            animation: 'pulse-glow 8s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-25 blur-2xl"
          style={{
            background: 'radial-gradient(circle, #7c3aed, #ec4899)',
            left: `${60 + mousePosition.x * 0.05}%`,
            top: `${70 + mousePosition.y * 0.03}%`,
            transform: 'translate(-50%, -50%)',
            animation: 'float 10s ease-in-out infinite'
          }}
        />
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Main heading with staggered animation */}
          <div className="mb-8">
         <h1 className={`text-5xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ 
        background: 'linear-gradient(135deg, #ffffff, #e2e8f0, #cbd5e1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))'
      }}>
        Experiencias digitales que convierten visitantes en clientes
      </h1>
            
            <div 
              className={`mt-4 text-2xl md:text-4xl font-bold transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                background: 'linear-gradient(135deg, #f472b6, #f59e0b, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-text 5s ease infinite'
              }}
            >
              Soluciones digitales que venden
            </div>
          </div>

          {/* Subtitle */}
          <p 
            className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            Diseño <span className="text-pink-400 font-semibold">brutal</span>, 
            velocidad <span className="text-cyan-400 font-semibold">extrema</span> y 
            copy enfocado a <span className="text-yellow-400 font-semibold">resultados</span>. 
            Lista en <span className="text-purple-400 font-semibold">72 horas</span>.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <button 
              className="group relative px-10 py-4 font-bold text-lg text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = 'linear-gradient(135deg, #ffffff, #f1f5f9)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = '#ffffff';
              }}
            >
              <span className="relative z-10">Ver Precios</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-10 py-4 font-bold text-lg text-white border-2 border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 hover:shadow-xl">
              <span className="relative z-10">Ver Beneficios</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
            </button>
          </div>

          {/* Footer note with icon */}
          <div 
            className={`text-gray-400 text-sm flex items-center justify-center gap-2 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Incluye hosting, dominio y analítica básica
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          

        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}