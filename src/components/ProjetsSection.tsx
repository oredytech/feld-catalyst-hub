import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import feldWomenProducts from "@/assets/feld-women-products.jpg";
import feldHumanitarianAid from "@/assets/feld-humanitarian-aid.jpg";
import feldCocoaFarming from "@/assets/feld-cocoa-farming.jpg";

const ProjetsSection = () => {
  const navigate = useNavigate();
  const projets = [
    {
      title: "Autonomisation Agricole des Femmes Rurales",
      description: "Formation de 200 femmes aux techniques d'agriculture durable dans 3 provinces de la RDC. Un projet qui transforme les communautés rurales.",
      image: feldWomenProducts,
      date: "2023-2024",
      location: "Kongo Central, Kwilu, Kasaï",
      participants: "200+ femmes",
      category: "Développement Durable",
      status: "En cours"
    },
    {
      title: "Leadership Féminin en Action",
      description: "Programme intensif de formation au leadership pour 150 femmes entrepreneurs et dirigeantes communautaires de Kinshasa.",
      image: feldHumanitarianAid,
      date: "2024",
      location: "Kinshasa",
      participants: "150 femmes",
      category: "Leadership",
      status: "Complété"
    },
    {
      title: "Médiation pour la Paix Communautaire",
      description: "Initiative de médiation et de résolution pacifique des conflits communautaires impliquant 500 personnes dans 5 communautés.",
      image: feldCocoaFarming,
      date: "2023",
      location: "Haut-Katanga, Lualaba",
      participants: "500+ personnes",
      category: "Paix & Cohésion",
      status: "Complété"
    }
  ];

  const temoignages = [
    {
      nom: "Marie Kalala",
      role: "Entrepreneure Agricole",
      temoignage: "Grâce à FELD ASBL, j'ai développé une coopérative agricole qui emploie aujourd'hui 25 femmes. Nous avons triplé nos revenus en 2 ans.",
      projet: "Autonomisation Agricole"
    },
    {
      nom: "Esperance Mbuyi", 
      role: "Leader Communautaire",
      temoignage: "Le programme de leadership m'a donné la confiance nécessaire pour devenir présidente de notre association communautaire.",
      projet: "Leadership Féminin"
    },
    {
      nom: "Grace Tshimanga",
      role: "Médiatrice Sociale",
      temoignage: "J'ai appris les techniques de médiation qui m'ont permis de résoudre plusieurs conflits dans notre quartier.",
      projet: "Médiation pour la Paix"
    }
  ];

  return (
    <section id="projets" className="py-20 bg-feld-neutral/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nos Projets & Réalisations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment FELD ASBL transforme concrètement la vie des femmes 
            et des communautés à travers des projets innovants et durables.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {projets.map((projet, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl card-shadow hover:shadow-lg transition-all duration-500 overflow-hidden group animate-scale-in"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={projet.image}
                  alt={projet.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    projet.status === 'En cours' 
                      ? 'bg-feld-green/10 text-feld-green border border-feld-green/20' 
                      : 'bg-feld-purple/10 text-feld-purple border border-feld-purple/20'
                  }`}>
                    {projet.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-primary rounded-full text-sm font-semibold">
                    {projet.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-feld-green transition-smooth">
                  {projet.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {projet.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{projet.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{projet.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{projet.participants}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-feld-green text-feld-green hover:bg-feld-green hover:text-white transition-smooth"
                  onClick={() => navigate("/projets")}
                >
                  Voir le projet complet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Témoignages de nos Bénéficiaires
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {temoignages.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl card-shadow hover:shadow-lg transition-smooth animate-scale-in"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-feld-green to-feld-purple rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {testimonial.nom.charAt(0)}
                  </div>
                  <h4 className="font-bold text-primary">{testimonial.nom}</h4>
                  <p className="text-sm text-feld-green font-semibold">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.projet}</p>
                </div>
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.temoignage}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="button-gradient text-white font-semibold px-8 py-4"
            onClick={() => navigate("/projets")}
          >
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjetsSection;