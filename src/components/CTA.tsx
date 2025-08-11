"use client";
export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold">¿Listo para aumentar tus ventas?</h3>
        <p className="mt-4 text-white/80">Agenda una demo gratuita y te muestro cómo tu landing puede convertir mejor desde esta semana.</p>
        <a href="https://wa.me/0000000000" target="_blank" className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-400 text-gray-900 px-8 py-3 font-semibold hover:opacity-90">Hablar por WhatsApp</a>
      </div>
    </section>
  );
}