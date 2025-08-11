"use client";
import { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const filters = [
    { id: "all", label: "Todos los proyectos", icon: "🎯" },
    { id: "ecommerce", label: "E-commerce", icon: "🛍️" },
    { id: "saas", label: "SaaS", icon: "💻" },
    { id: "landing", label: "Landing Pages", icon: "🚀" },
    { id: "corporate", label: "Corporativo", icon: "🏢" }
  ];

  const projects = [
    {
      id: 1,
      title: "TechFlow SaaS",
      category: "saas",
      description: "Plataforma de automatización para equipos remotos",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      metrics: { conversion: "+340%", speed: "1.2s", revenue: "$2.5M" },
      tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
      link: "#",
      featured: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Fashion Forward",
      category: "ecommerce",
      description: "E-commerce premium para marca de moda sostenible",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      metrics: { conversion: "+280%", speed: "1.4s", revenue: "$1.8M" },
      tech: ["Shopify", "React", "GSAP", "CSS3"],
      link: "#",
      featured: false,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      id: 3,
      title: "StartupHub",
      category: "landing",
      description: "Landing page para aceleradora de startups",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      metrics: { conversion: "+450%", speed: "0.9s", revenue: "$850K" },
      tech: ["Next.js", "Tailwind", "Three.js", "Lottie"],
      link: "#",
      featured: true,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "FinanceFlow",
      category: "saas",
      description: "Dashboard para gestión financiera empresarial",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      metrics: { conversion: "+320%", speed: "1.1s", revenue: "$3.2M" },
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "#",
      featured: false,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      title: "Global Corp",
      category: "corporate",
      description: "Sitio corporativo para multinacional tecnológica",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      metrics: { conversion: "+180%", speed: "1.3s", revenue: "$5.1M" },
      tech: ["Next.js", "Sanity", "Tailwind", "Vercel"],
      link: "#",
      featured: false,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "CryptoTrade Pro",
      category: "landing",
      description: "Landing page para plataforma de trading",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      metrics: { conversion: "+520%", speed: "1.0s", revenue: "$4.3M" },
      tech: ["React", "Chart.js", "WebSocket", "Redis"],
      link: "#",
      featured: true,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Floating elements */}
        <div className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-white/90 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <span className="text-lg">🎨</span>
            Trabajos que generan resultados reales
          </div>
          
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Nuestro
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          
          <p className={`mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}>
            Cada proyecto es una historia de éxito. Descubre cómo hemos ayudado a 
            <span className="text-white font-semibold"> empresas de todos los tamaños </span> 
            a alcanzar sus objetivos digitales.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '600ms' }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className={`transition-transform duration-300 ${activeFilter === filter.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {filter.icon}
                </span>
                {filter.label}
              </span>
              
              {activeFilter !== filter.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:border-white/30 group-hover:scale-[1.02]">
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Destacado
                    </div>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                  
                  {/* View Project Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={project.link}
                      className="bg-white text-black font-bold px-6 py-3 rounded-full transform scale-90 group-hover:scale-100 transition-all duration-300 hover:shadow-2xl"
                    >
                      Ver Proyecto 🔗
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.metrics.conversion}
                      </div>
                      <div className="text-xs text-gray-500">Conversión</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.metrics.speed}
                      </div>
                      <div className="text-xs text-gray-500">Velocidad</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.metrics.revenue}
                      </div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 border border-white/20 text-xs text-gray-300 rounded-full hover:bg-white/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/60 rounded-full animate-float"
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          top: `${10 + Math.random() * 80}%`,
                          animationDelay: `${i * 0.15}s`,
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

        {/* Bottom CTA */}
        <div className={`mt-20 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1400ms' }}>
          <div className="inline-flex flex-col items-center gap-6 px-8 py-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-white/20 rounded-3xl backdrop-blur-sm">
            <div className="text-center max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                ¿Listo para ser nuestro próximo caso de éxito?
              </h3>
              <p className="text-gray-400 mb-6">
                Únete a más de 500 empresas que han transformado sus resultados digitales
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="flex items-center gap-2">
                  <span className="group-hover:rotate-12 transition-transform duration-300">🚀</span>
                  Iniciar mi proyecto
                </span>
              </button>
              
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                Ver más proyectos 📋
              </button>
            </div>
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