import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import feldTeamBuilding from "@/assets/feld-team-building.jpg";

const AboutSection = () => {
  const navigate = useNavigate();
  const stats = [
    { number: "2017", label: "Année de fondation", icon: Target },
    { number: "1000+", label: "Femmes formées", icon: Users },
    { number: "15+", label: "Programmes réalisés", icon: Heart },
    { number: "5+", label: "Provinces touchées", icon: Eye },
  ];

  const values = [
    {
      title: "Solidarité",
      description: "Force du collectif et de l'entraide entre femmes",
      icon: Users,
      color: "text-feld-green"
    },
    {
      title: "Leadership",
      description: "Développer l'influence positive et les capacités de direction",
      icon: Target,
      color: "text-feld-purple"
    },
    {
      title: "Paix",
      description: "Promouvoir la cohésion sociale et la résolution pacifique des conflits",
      icon: Heart,
      color: "text-feld-green"
    },
    {
      title: "Développement durable",
      description: "Respect de l'environnement et des générations futures",
      icon: Eye,
      color: "text-feld-purple"
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-feld-neutral/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            À propos de FELD ASBL
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Femmes Engagées pour le Leadership et le Développement - Une organisation 
            apolitique à but non lucratif fondée le 7 août 2017 à Kinshasa, RDC.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in card-gradient p-6 rounded-xl card-shadow transition-bounce hover:scale-105"
            >
              <stat.icon className="w-8 h-8 text-feld-green mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-feld-green/10 text-feld-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              Notre Mission
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Promouvoir le leadership féminin
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Renforcer les capacités des femmes et contribuer au développement durable 
              de la RDC à travers des programmes innovants d'éducation, de formation 
              et d'accompagnement personnalisé.
            </p>
          </div>

          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-feld-purple/10 text-feld-purple px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Eye className="w-4 h-4" />
              Notre Vision
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Organisation de référence en Afrique centrale
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Être une organisation de référence dans la promotion du leadership féminin 
              en Afrique centrale, contribuant à une société équitable, pacifique et 
              prospère où chaque femme peut réaliser son plein potentiel.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Nos Valeurs Fondamentales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl card-shadow hover:shadow-lg transition-smooth animate-scale-in"
              >
                <div className={`w-16 h-16 ${value.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 mb-16">
          <Button 
            size="lg" 
            className="button-gradient text-white font-semibold px-8 py-4"
            onClick={() => navigate("/a-propos")}
          >
            Découvrir notre histoire complète
          </Button>
        </div>

        {/* Team Image */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden card-shadow">
          <img 
            src={feldTeamBuilding} 
            alt="Équipe FELD ASBL - Formation et développement" 
            className="w-full h-96 object-cover"
          />
          <div className="bg-white p-6 text-center">
            <h4 className="text-xl font-bold text-primary mb-2">Notre Équipe en Action</h4>
            <p className="text-muted-foreground">
              Formation et renforcement des capacités des femmes leaders congolaises
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;