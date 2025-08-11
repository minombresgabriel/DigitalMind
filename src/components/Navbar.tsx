"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#benefits", label: "Beneficios"},
    { href: "#pricing", label: "Precios" },
    { href: "#portfolio", label: "Portfolio"},
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? "backdrop-blur-xl bg-black/60 border-b border-white/20 shadow-2xl shadow-purple-500/10" 
            : "bg-transparent"
        }`}
        onMouseMove={scrolled ? (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        } : undefined}
      >
        {/* Animated background glow */}
        {scrolled && (
          <div 
            className="absolute inset-0 opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)`
            }}
          />
        )}
        
        <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo with animated glow */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
            <a 
              href="#" 
              className="relative font-black tracking-tight text-2xl bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-300"
            >
              DIGITALMIND
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </span>
                  {item.label}
                </span>
                
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300" />
                
                {/* Underline animation */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <div className="relative w-6 h-4">
                <span className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-2 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Progress bar */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-all duration-300"
            style={{ width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
          />
        )}
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 w-80 h-full bg-gradient-to-br from-gray-900 via-purple-900/50 to-black border-l border-white/10 transform transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 pt-24">
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center gap-4 p-4 text-lg font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                  style={{ 
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                    transitionDelay: `${index * 100 + 100}ms`
                  }}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  </span>
                  {item.label}
                  <div className="ml-auto w-2 h-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full group relative overflow-hidden px-6 py-4 font-bold text-lg text-black bg-white rounded-full transition-all duration-300 hover:scale-105"
                style={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '500ms'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="group-hover:rotate-12 transition-transform duration-300">🚀</span>
                  Empieza ahora
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-4">
              {['📧', '💬', '📱'].map((icon, index) => (
                <button
                  key={index}
                  className="w-12 h-12 flex items-center justify-center text-xl bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ 
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${600 + index * 100}ms`
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}