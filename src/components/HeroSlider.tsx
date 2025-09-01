import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import feldTeamReal from "/lovable-uploads/f4a18007-b725-45ae-9879-dac803a5013a.png";
import feldCommunityReal from "/lovable-uploads/2cabfee9-7188-48fd-8a47-c367b2135fb5.png";
import feldArtisanatReal from "/lovable-uploads/40c9ca53-8802-4c02-92b7-c84aef4113ac.png";
import feldAideHumanitaireReal from "/lovable-uploads/76b75473-9694-4d6c-968d-d294389690ca.png";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: feldArtisanatReal,
      title: "Autonomisation des Femmes Leaders",
      subtitle: "Développer le leadership féminin en République Démocratique du Congo",
      description: "FELD ASBL accompagne les femmes dans leur développement personnel et professionnel pour créer un impact durable dans leur communauté.",
      cta: "Découvrir notre mission"
    },
    {
      image: feldTeamReal,
      title: "Formation et Renforcement des Capacités",
      subtitle: "Des programmes innovants d'éducation et de formation",
      description: "Nous offrons des formations de qualité pour développer les compétences entrepreneuriales et de leadership des femmes congolaises.",
      cta: "Voir nos programmes"
    },
    {
      image: feldCommunityReal,
      title: "Développement Durable et Paix",
      subtitle: "Construire un avenir équitable et prospère",
      description: "Notre approche intégrée favorise la cohésion sociale et contribue au développement durable de la RDC.",
      cta: "Rejoindre le mouvement"
    },
    {
      image: feldAideHumanitaireReal,
      title: "Sensibilisation et Plaidoyer",
      subtitle: "Créer un impact social durable et mesurable",
      description: "Nos campagnes de sensibilisation et activités de plaidoyer visent à transformer les mentalités et promouvoir l'égalité des genres.",
      cta: "Découvrir nos actions"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="accueil" className="relative h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? "opacity-100 transform translate-x-0" 
              : "opacity-0 transform translate-x-full"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <div className={`animate-slide-up ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
                  <h2 className="text-lg font-semibold text-feld-purple-light mb-4 tracking-wide">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 text-gray-100 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg transition-bounce"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg transition-bounce backdrop-blur-sm"
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-smooth"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-smooth"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;