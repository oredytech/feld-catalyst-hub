import { Button } from "@/components/ui/button";
import { Crown, Handshake, Leaf, GraduationCap, ArrowRight } from "lucide-react";
import feldCommunityGathering from "@/assets/feld-community-gathering.jpg";
import feldTrainingSession from "@/assets/feld-training-session.jpg";

const DomainesSection = () => {
  const domaines = [
    {
      title: "Leadership Féminin",
      description: "Développement des compétences de leadership, autonomisation économique et accompagnement personnalisé des femmes leaders.",
      icon: Crown,
      color: "feld-green",
      features: [
        "Formation en leadership",
        "Mentorat personnalisé", 
        "Réseautage professionnel",
        "Accompagnement entrepreneurial"
      ]
    },
    {
      title: "Paix & Cohésion Sociale", 
      description: "Promotion de la paix, médiation communautaire et résolution pacifique des conflits au niveau local.",
      icon: Handshake,
      color: "feld-purple",
      features: [
        "Médiation de conflits",
        "Dialogue intercommunautaire",
        "Formation à la non-violence", 
        "Réconciliation sociale"
      ]
    },
    {
      title: "Développement Durable",
      description: "Projets environnementaux, agriculture durable et sensibilisation aux enjeux climatiques et écologiques.",
      icon: Leaf,
      color: "feld-green",
      features: [
        "Projets environnementaux",
        "Agriculture durable",
        "Énergie renouvelable",
        "Sensibilisation écologique"
      ]
    },
    {
      title: "Formation & Éducation",
      description: "Programmes éducatifs innovants, formation professionnelle et développement des compétences techniques.",
      icon: GraduationCap,
      color: "feld-purple", 
      features: [
        "Formation professionnelle",
        "Alphabétisation",
        "Compétences numériques",
        "Éducation financière"
      ]
    }
  ];

  return (
    <section id="domaines" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nos Domaines d'Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FELD ASBL intervient dans quatre domaines stratégiques pour maximiser 
            l'impact du leadership féminin en République Démocratique du Congo.
          </p>
        </div>

        {/* Domaines Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {domaines.map((domaine, index) => (
            <div 
              key={index}
              className={`group p-8 bg-gradient-to-br from-${domaine.color}/5 to-${domaine.color}/10 rounded-2xl card-shadow hover:shadow-lg transition-all duration-500 hover:scale-105 animate-scale-in border border-${domaine.color}/20`}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-${domaine.color}/10 rounded-xl flex items-center justify-center group-hover:bg-${domaine.color}/20 transition-smooth`}>
                  <domaine.icon className={`w-8 h-8 text-${domaine.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-feld-green transition-smooth">
                    {domaine.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {domaine.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {domaine.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-2 h-2 bg-${domaine.color} rounded-full`}></div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="outline"
                className={`w-full border-${domaine.color} text-${domaine.color} hover:bg-${domaine.color} hover:text-white transition-smooth group-hover:shadow-md`}
              >
                En savoir plus
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-feld-green to-feld-purple rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h3 className="text-3xl font-bold mb-6">Notre Impact en Chiffres</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/90">Femmes formées</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/90">Projets réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-white/90">Communautés touchées</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-white/90">Provinces d'intervention</div>
            </div>
          </div>
        </div>

        {/* Illustration Images */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden card-shadow">
            <img 
              src={feldTrainingSession} 
              alt="Session de formation FELD - Leadership féminin" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Formation Leadership</h4>
                <p className="text-white/90">Développement des compétences de direction</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden card-shadow">
            <img 
              src={feldCommunityGathering} 
              alt="Rassemblement communautaire FELD - Cohésion sociale" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Cohésion Sociale</h4>
                <p className="text-white/90">Rassemblement et dialogue communautaire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainesSection;