"use client";
import { useState, useEffect, useRef } from "react";

export default function Pricing() {
  const [activeCard, setActiveCard] = useState(1); // Premium by default
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const tiers = [
    {
      name: "Starter",
      price: "$250",
      originalPrice: "$300",
      features: [
        "1 sección hero + 3 bloques",
        "SEO básico optimizado",
        "Entrega en 5 días",
        "1 revisión incluida",
        "Hosting básico 1 año"
      ],
      highlighted: false,
      icon: "🚀",
      badge: "Ideal para empezar",
      color: "blue",
      gradient: "from-blue-400 to-cyan-500",
      popular: false
    },
    {
      name: "Premium",
      price: "$400",
      originalPrice: "$500",
      features: [
        "Todo del plan Starter",
        "Hasta 8 secciones modulares",
        "Integración analítica avanzada",
        "WhatsApp Business API",
        "3 revisiones incluidas",
        "Soporte prioritario 30 días"
      ],
      highlighted: true,
      icon: "💎",
      badge: "Más popular",
      color: "purple",
      gradient: "from-purple-400 to-pink-500",
      popular: true
    },
    {
      name: "Pro",
      price: "$700",
      originalPrice: "$900",
      features: [
        "Todo del plan Premium",
        "Blog con CMS integrado",
        "2 integraciones personalizadas",
        "Entrega PRIORITY en 72h",
        "Revisiones ilimitadas (30 días)",
        "Soporte 24/7 por 90 días",
        "Optimización de conversión"
      ],
      highlighted: false,
      icon: "⚡",
      badge: "Máximo rendimiento",
      color: "yellow",
      gradient: "from-yellow-400 to-orange-500",
      popular: false
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-white/90 mb-6">
            <span className="text-lg">💰</span>
            Precios transparentes, sin sorpresas
          </div>
          
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Precios
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              simples
            </span>
          </h2>
          
          <p className={`mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}>
            Elige el plan perfecto para tu proyecto. 
            <span className="text-white font-semibold"> Sin pagos mensuales, </span>
            solo una inversión única para tu éxito digital.
          </p>

          {/* Savings Banner */}
          <div className={`mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '400ms' }}>
            <span className="text-xl">🎯</span>
            Ahorra hasta $300 comparado con agencias tradicionales
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    <span className="mr-1">⭐</span>
                    {tier.badge}
                  </div>
                </div>
              )}

              {/* Card Container */}
              <div className={`relative h-full rounded-3xl border-2 transition-all duration-500 ${
                tier.highlighted
                  ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent'
                  : 'border-white/10 bg-gradient-to-br from-white/5 to-transparent'
              } ${
                hoveredCard === index ? 'scale-105 border-white/30' : ''
              }`}>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${tier.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                
                {/* Card Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 ${hoveredCard === index ? 'animate-bounce' : ''}`}>
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${tier.gradient} rounded-full text-black text-xs font-bold`}>
                      {tier.badge}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-gray-500 line-through text-lg">{tier.originalPrice}</span>
                      <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        AHORRA
                      </div>
                    </div>
                    <div className="text-5xl font-black text-white mb-2">
                      {tier.price}
                    </div>
                    <div className="text-gray-400 text-sm">
                      Pago único • Sin mensualidades
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li 
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                        style={{
                          opacity: hoveredCard === index ? 1 : 0.8,
                          transform: hoveredCard === index ? 'translateX(4px)' : 'translateX(0)',
                          transition: `all 0.3s ease ${featureIndex * 0.05}s`
                        }}
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${tier.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    className={`w-full relative overflow-hidden font-bold text-lg py-4 rounded-2xl transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/25'
                        : 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-xl'
                    } hover:scale-105 group-hover:shadow-2xl`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="group-hover:rotate-12 transition-transform duration-300">
                        {tier.highlighted ? '🚀' : '👆'}
                      </span>
                      Elegir {tier.name}
                    </span>
                    
                    {/* Button Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>

                  {/* Guarantee Badge */}
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-2 text-green-400 text-xs font-medium">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Garantía 30 días o devolvemos tu dinero
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements on Hover */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full animate-float"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className={`inline-flex items-center gap-6 px-8 py-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1400ms' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">¿Necesitas algo personalizado?</div>
              <div className="text-gray-400 text-sm">Contáctanos para cotización enterprise</div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 whitespace-nowrap">
              Hablar con experto 💬
            </button>
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
            transform: translateY(-15px) rotate(180deg); 
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}