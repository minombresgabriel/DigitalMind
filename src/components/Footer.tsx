"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: "📧", label: "Email", href: "mailto:hello@digitalmind.com", color: "from-blue-400 to-cyan-500" },
    { icon: "💬", label: "WhatsApp", href: "#", color: "from-green-400 to-emerald-500" },
    { icon: "📱", label: "Instagram", href: "#", color: "from-pink-400 to-purple-500" },
    { icon: "🐦", label: "Twitter", href: "#", color: "from-cyan-400 to-blue-500" }
  ];

  const quickLinks = [
    { label: "Beneficios", href: "#benefits" },
    { label: "Precios", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Portfolio", href: "#portfolio" }
  ];

  const legalLinks = [
    { label: "Política de privacidad", href: "#privacy" },
    { label: "Términos de servicio", href: "#terms" },
    { label: "Cookies", href: "#cookies" }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-950 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
        
        {/* Floating orbs */}
        <div className="absolute -top-20 left-20 w-60 h-60 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Top Border with Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="mb-6">
                <div className="relative group inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
                  <h3 className="relative text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    DIGITALMIND
                  </h3>
                </div>
                <div className="mt-2 text-sm text-purple-400 font-medium">
                  Premium Landing Pages
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Creamos landing pages que <span className="text-white font-semibold">convierten visitantes en clientes</span>. 
                Diseño premium, velocidad extrema y resultados garantizados.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { number: "500+", label: "Proyectos" },
                  { number: "99%", label: "Satisfacción" },
                  { number: "72h", label: "Entrega" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Real-time Status */}
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="text-sm">
                  <div className="text-green-400 font-medium">🟢 Disponible ahora</div>
                  <div className="text-gray-400 text-xs">
                    {currentTime.toLocaleTimeString('es-ES')} - Tiempo de respuesta: &lt; 2h
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                 style={{ transitionDelay: '200ms' }}>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-xl">🔗</span>
                Enlaces rápidos
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 text-sm"
                    >
                      <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: '400ms' }}>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-xl">💬</span>
                Conecta con nosotros
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-lg">📧</span>
                  <a href="mailto:hello@digitalmind.com" className="hover:text-white transition-colors duration-300">
                    hello@digitalmind.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-lg">📍</span>
                  <span>Remoto • Worldwide</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group relative flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Copyright */}
              <div className={`flex items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                   style={{ transitionDelay: '600ms' }}>
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} 
                  <span className="text-white font-semibold mx-1">digitalmind</span>
                  All rights reserved.
                </p>
                <div className="hidden md:flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1 h-1 bg-gray-600 rounded-full" />
                  <span>Hecho con</span>
                  <span className="text-red-400 animate-pulse">❤️</span>
                  <span>y mucho</span>
                  <span className="text-yellow-400">☕</span>
                </div>
              </div>

              {/* Legal Links */}
              <div className={`flex flex-wrap items-center gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                   style={{ transitionDelay: '800ms' }}>
                {legalLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-300 hover:underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                ))}
                
                {/* Language Selector */}
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer">
                  <span className="text-sm">🌐</span>
                  <span>ES</span>
                  <span className="text-gray-600">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '1000ms' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}