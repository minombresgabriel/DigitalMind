"use client"
import { useState, useEffect, useRef } from "react";

export default function Features() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const items = [
    { 
      title: "Velocidad de carga", 
      desc: "Arquitectura Next.js + optimización de imágenes.", 
      icon: "⚡",
      gradient: "from-yellow-400 to-orange-500",
      glowColor: "yellow",
      metrics: "< 2s"
    },
    { 
      title: "SEO listo", 
      desc: "Metadatos, OG tags y estructura pensada para rankear.", 
      icon: "🚀",
      gradient: "from-green-400 to-emerald-500",
      glowColor: "green",
      metrics: "100/100"
    },
    { 
      title: "Diseño premium", 
      desc: "UI moderna, animaciones sutiles y CTA claros.", 
      icon: "🎨",
      gradient: "from-purple-400 to-pink-500",
      glowColor: "purple",
      metrics: "Premium"
    },
    { 
      title: "Escalable", 
      desc: "Secciones modulares: activa lo que el cliente necesita.", 
      icon: "📈",
      gradient: "from-cyan-400 to-blue-500",
      glowColor: "cyan",
      metrics: "∞"
    },
    { 
      title: "Analítica", 
      desc: "Métricas de conversión y eventos clave.", 
      icon: "📊",
      gradient: "from-indigo-400 to-purple-500",
      glowColor: "indigo",
      metrics: "Real-time"
    },
    { 
      title: "Soporte", 
      desc: "Actualizaciones y mejoras evolutivas.", 
      icon: "🛠️",
      gradient: "from-pink-400 to-red-500",
      glowColor: "pink",
      metrics: "24/7"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index!);
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]));
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Características Premium
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Beneficios
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              clave
            </span>
          </h2>
          
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cada landing page viene equipada con estas características 
            <span className="text-white font-semibold"> premium </span> 
            que garantizan resultados excepcionales
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              data-index={index}
              className={`group relative transition-all duration-700 ease-out ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Card Background with Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white/30 group-hover:from-white/[0.12] group-hover:to-white/[0.06]" />
              
              {/* Hover Glow Effect */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 group-hover:blur-xl`} 
              />
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon and Metric */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-4xl group-hover:scale-110 transition-transform duration-300 ${hoveredItem === index ? 'animate-bounce' : ''}`}>
                    {item.icon}
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${item.gradient} rounded-full text-black text-xs font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                    {item.metrics}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Interactive Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-green-400 font-medium">Activo</span>
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300 text-white/60 group-hover:text-white/80">
                      →
                    </div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredItem === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 border border-white/20 rounded-full backdrop-blur-sm">
            <div className="flex -space-x-2">
              {['🎯', '⚡', '🚀'].map((emoji, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span className="text-white/90 font-medium">
              Todas estas características incluidas desde el primer día
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}