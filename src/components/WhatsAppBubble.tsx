"use client";
import { useState, useEffect } from "react";

export default function WhatsAppBubble() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  // Tu número de WhatsApp (reemplaza con el tuyo)
  const phoneNumber = "1234567890"; // Sin espacios ni símbolos, solo números
  const message = "Hola! Me interesa conocer más sobre sus landing pages premium 🚀";

  useEffect(() => {
    // Mostrar la burbuja después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Mostrar tooltip automáticamente después de 5 segundos
    const tooltipTimer = setTimeout(() => {
      if (!showTooltip) {
        setShowTooltip(false);
        // Ocultar tooltip después de 5 segundos
        setTimeout(() => setShowTooltip(false), 5000);
      }
    }, 5000);

    // Simular estado online/offline (opcional)
    const statusInterval = setInterval(() => {
      setIsOnline(prev => Math.random() > 0.1 ? true : prev); // 90% online
    }, 30000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearInterval(statusInterval);
    };
  }, [showTooltip]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Tooltip Message */}
      <div 
        className={`absolute bottom-20 left-0 mb-2 transition-all duration-500 ${
          showTooltip 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        <div className="relative bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-2xl max-w-xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">💬</span>
            </div>
            <div>
              <div className="font-semibold text-sm text-gray-800 mb-1">
                ¡Hola! 👋
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                ¿Necesitas ayuda con tu landing page? Te respondemos en minutos
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'} animate-pulse`} />
                <span className="text-xs text-gray-500">
                  {isOnline ? 'En línea ahora' : 'Te respondemos pronto'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Close button */}
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            ×
          </button>
          
          {/* Arrow pointing to bubble */}
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-200" />
        </div>
      </div>

      {/* Main WhatsApp Bubble */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`group relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 ${
          isVisible ? 'animate-bounce-in' : ''
        }`}
      >
        {/* Ripple Effect */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />
        
        {/* WhatsApp Icon */}
        <div className="relative w-full h-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>



        {/* Floating Message Icon */}
        <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-6 h-6 bg-white text-green-500 rounded-full flex items-center justify-center text-xs animate-bounce">
            💬
          </div>
        </div>
      </button>

      {/* Notification Badge */}
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
        1
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% { 
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translateY(-10px);
          }
          70% {
            transform: scale(0.9) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}