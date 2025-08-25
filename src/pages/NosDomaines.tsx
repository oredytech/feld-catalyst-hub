import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Handshake, Leaf, GraduationCap, ArrowRight, Users, Target, BookOpen, Globe } from "lucide-react";
import feldTrainingSession from "@/assets/feld-training-session.jpg";
import feldCommunityGathering from "@/assets/feld-community-gathering.jpg";
import feldCocoaFarming from "@/assets/feld-cocoa-farming.jpg";
import feldWomenProducts from "@/assets/feld-women-products.jpg";

const NosDomaines = () => {
  const domaines = [
    {
      title: "Leadership Féminin",
      description: "Développement des compétences de leadership, formation à la prise de décision et accompagnement personnalisé des femmes leaders émergentes.",
      icon: Crown,
      color: "feld-green",
      image: feldTrainingSession,
      features: [
        "Formation en leadership transformationnel",
        "Mentorat personnalisé par des expertes", 
        "Réseautage professionnel et networking",
        "Accompagnement entrepreneurial complet",
        "Développement de la confiance en soi",
        "Techniques de communication et négociation"
      ],
      impact: "Plus de 500 femmes formées au leadership depuis 2017"
    },
    {
      title: "Paix & Cohésion Sociale", 
      description: "Promotion de la paix, médiation communautaire, dialogue interculturel et résolution pacifique des conflits au niveau local et régional.",
      icon: Handshake,
      color: "feld-purple",
      image: feldCommunityGathering,
      features: [
        "Médiation de conflits communautaires",
        "Dialogue interculturel et interreligieux",
        "Formation à la communication non-violente", 
        "Réconciliation et cohésion sociale",
        "Prévention des conflits liés au genre",
        "Construction de la paix durable"
      ],
      impact: "15 communautés réconciliées et 300+ conflits résolus"
    },
    {
      title: "Développement Durable",
      description: "Projets environnementaux, agriculture durable, énergies renouvelables et sensibilisation aux enjeux climatiques et écologiques.",
      icon: Leaf,
      color: "feld-green",
      image: feldCocoaFarming,
      features: [
        "Projets d'agriculture biologique",
        "Formation aux énergies renouvelables",
        "Gestion durable des ressources naturelles",
        "Sensibilisation au changement climatique",
        "Programmes de reforestation",
        "Économie verte et circulaire"
      ],
      impact: "200+ hectares cultivés durablement, 50+ jardins familiaux"
    },
    {
      title: "Formation & Éducation",
      description: "Programmes éducatifs innovants, formation professionnelle, alphabétisation et développement des compétences techniques et numériques.",
      icon: GraduationCap,
      color: "feld-purple", 
      image: feldWomenProducts,
      features: [
        "Formation professionnelle certifiante",
        "Programmes d'alphabétisation pour adultes",
        "Compétences numériques et digitales",
        "Éducation financière et gestion",
        "Artisanat et métiers traditionnels",
        "Formation en entrepreneuriat social"
      ],
      impact: "800+ femmes formées, 90% d'insertion professionnelle"
    }
  ];

  const approches = [
    {
      title: "Approche Participative",
      description: "Implication directe des bénéficiaires dans la conception et la mise en œuvre des programmes",
      icon: Users
    },
    {
      title: "Méthodologie Intégrée",
      description: "Combinaison de formation théorique, pratique terrain et accompagnement personnalisé",
      icon: Target
    },
    {
      title: "Apprentissage Continu",
      description: "Suivi post-formation et évaluation continue des impacts pour améliorer nos programmes",
      icon: BookOpen
    },
    {
      title: "Partenariats Stratégiques",
      description: "Collaboration avec des institutions locales et internationales pour maximiser l'impact",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-feld-green/10 via-white to-feld-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Nos Domaines d'Action
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up">
              FELD ASBL intervient dans quatre domaines stratégiques complémentaires pour 
              maximiser l'impact du leadership féminin en République Démocratique du Congo.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-green">4</div>
                <div className="text-muted-foreground">Domaines clés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-purple">1000+</div>
                <div className="text-muted-foreground">Bénéficiaires</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-green">5</div>
                <div className="text-muted-foreground">Provinces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-purple">50+</div>
                <div className="text-muted-foreground">Projets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines détaillés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {domaines.map((domaine, index) => (
            <div key={index} className={`mb-20 ${index === domaines.length - 1 ? 'mb-0' : ''}`}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}>
                <div className={`animate-slide-up ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                    domaine.color === 'feld-green' 
                      ? 'bg-feld-green/10 text-feld-green' 
                      : 'bg-feld-purple/10 text-feld-purple'
                  }`}>
                    <domaine.icon className="w-4 h-4" />
                    Domaine d'expertise
                  </div>
                  <h2 className="text-4xl font-bold text-primary mb-6">{domaine.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {domaine.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold text-primary">Nos activités :</h3>
                    <div className="grid gap-3">
                      {domaine.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            domaine.color === 'feld-green' ? 'bg-feld-green' : 'bg-feld-purple'
                          }`}></div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`p-4 rounded-lg mb-6 ${
                    domaine.color === 'feld-green' 
                      ? 'bg-feld-green/5 border-l-4 border-feld-green' 
                      : 'bg-feld-purple/5 border-l-4 border-feld-purple'
                  }`}>
                    <div className="font-semibold text-primary mb-1">Impact réalisé :</div>
                    <div className="text-muted-foreground">{domaine.impact}</div>
                  </div>

                  <Button 
                    className={`${
                      domaine.color === 'feld-green' 
                        ? 'bg-feld-green hover:bg-feld-green/90' 
                        : 'bg-feld-purple hover:bg-feld-purple/90'
                    } text-white font-semibold px-6 py-3`}
                  >
                    Découvrir nos projets
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="w-full h-96 rounded-2xl overflow-hidden card-shadow">
                    <img 
                      src={domaine.image} 
                      alt={`${domaine.title} - FELD ASBL`} 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{domaine.title}</h4>
                      <p className="text-white/90">En action sur le terrain</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-20 bg-feld-neutral/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Notre Approche Méthodologique</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une méthodologie éprouvée qui garantit l'efficacité et la durabilité de nos interventions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approches.map((approche, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-smooth animate-scale-in">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    index % 2 === 0 ? 'bg-feld-green/10' : 'bg-feld-purple/10'
                  }`}>
                    <approche.icon className={`w-8 h-8 ${
                      index % 2 === 0 ? 'text-feld-green' : 'text-feld-purple'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{approche.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{approche.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Global */}
      <section className="py-20 bg-gradient-to-r from-feld-green to-feld-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Notre Impact Global</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Ensemble, nos quatre domaines d'action créent un écosystème complet 
            d'autonomisation et de développement durable
          </p>
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
          <div className="mt-12">
            <Button size="lg" className="bg-white text-feld-green hover:bg-gray-100 font-semibold px-8 py-4">
              Rejoignez notre mission
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NosDomaines;