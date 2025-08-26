import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight, Target, TrendingUp, Award, Clock } from "lucide-react";
import feldCraftsReal from "@/assets/feld-crafts-real.jpg";
import feldPresentationReal from "@/assets/feld-presentation-real.jpg";
import feldCocoaReal from "@/assets/feld-cocoa-real.jpg";
import feldTrainingReal from "@/assets/feld-training-real.jpg";

const Projets = () => {
  const projetsEnCours = [
    {
      title: "Programme Leadership Transformation 2024",
      description: "Formation intensive de 200 femmes leaders dans 3 provinces de la RDC avec un focus sur le leadership transformationnel et l'entrepreneuriat social.",
      image: feldTrainingReal,
      date: "Jan 2024 - Déc 2024",
      location: "Kinshasa, Lubumbashi, Goma",
      participants: "200 femmes",
      budget: "150,000 USD",
      category: "Leadership",
      status: "En cours",
      progression: 65,
      objectifs: [
        "Former 200 femmes au leadership transformationnel",
        "Créer 50 entreprises sociales dirigées par des femmes",
        "Établir 3 centres régionaux de formation",
        "Développer un réseau national de femmes leaders"
      ]
    },
    {
      title: "Initiative Paix et Réconciliation Communautaire",
      description: "Projet de médiation et de dialogue intercommunautaire impliquant 15 communautés dans les provinces du Nord et Sud-Kivu pour la cohésion sociale.",
      image: feldPresentationReal,
      date: "Mars 2024 - Mars 2025",
      location: "Nord-Kivu, Sud-Kivu",
      participants: "500+ personnes",
      budget: "200,000 USD",
      category: "Paix & Cohésion",
      status: "En cours",
      progression: 40,
      objectifs: [
        "Médier 50 conflits communautaires",
        "Former 100 médiateurs locaux",
        "Organiser 20 dialogues intercommunautaires",
        "Créer 5 comités de paix permanents"
      ]
    },
    {
      title: "Agriculture Durable pour Femmes Rurales",
      description: "Accompagnement de 300 femmes rurales dans l'adoption de techniques d'agriculture durable et la création de coopératives agricoles.",
      image: feldCocoaReal,
      date: "Juin 2024 - Juin 2025",
      location: "Kongo Central, Kwilu, Kasaï",
      participants: "300 femmes",
      budget: "180,000 USD",
      category: "Développement Durable",
      status: "En cours",
      progression: 30,
      objectifs: [
        "Former 300 femmes à l'agriculture biologique",
        "Créer 20 coopératives agricoles",
        "Augmenter les rendements de 40%",
        "Certifier 100 hectares en agriculture durable"
      ]
    }
  ];

  const projetsCompletes = [
    {
      title: "Autonomisation Économique des Femmes Artisanes",
      description: "Programme d'accompagnement de 150 femmes artisanes dans la valorisation de leurs produits et l'accès aux marchés locaux et internationaux.",
      image: feldCraftsReal,
      date: "2023",
      location: "Kinshasa, Lubumbashi",
      participants: "150 femmes",
      impact: "120 nouvelles entreprises créées, revenus augmentés de 60%",
      category: "Entrepreneuriat",
      status: "Complété"
    },
    {
      title: "Formation Digitale pour Femmes Leaders",
      description: "Initiative de formation aux outils numériques et à la communication digitale pour 100 femmes leaders et dirigeantes d'organisations.",
      image: feldTrainingReal,
      date: "2023",
      location: "Kinshasa",
      participants: "100 femmes",
      impact: "95% des participantes maîtrisent les outils digitaux",
      category: "Formation",
      status: "Complété"
    },
    {
      title: "Projet Humanitaire d'Urgence - Aide aux Déplacés",
      description: "Assistance humanitaire et psychosociale aux femmes et enfants déplacés dans l'est de la RDC avec distribution de kits de première nécessité.",
      image: feldPresentationReal,
      date: "2022-2023",
      location: "Nord-Kivu, Ituri",
      participants: "1000+ personnes",
      impact: "1000 familles assistées, 500 femmes formées en soutien psychosocial",
      category: "Humanitaire",
      status: "Complété"
    }
  ];

  const temoignages = [
    {
      nom: "Marie Kalala Mbuyi",
      role: "Entrepreneure Agricole",
      projet: "Agriculture Durable",
      temoignage: "Grâce au programme FELD, j'ai transformé mon petit jardin en une exploitation moderne. Aujourd'hui, ma coopérative emploie 25 femmes et nous exportons nos produits bio vers 3 pays voisins.",
      impact: "Revenus multipliés par 5"
    },
    {
      nom: "Esperance Tshimbombo",
      role: "Médiatrice Communautaire",
      projet: "Paix et Réconciliation",
      temoignage: "Les techniques de médiation apprises m'ont permis de résoudre plus de 30 conflits dans notre territoire. Notre communauté vit maintenant en harmonie grâce à ces outils.",
      impact: "30+ conflits résolus"
    },
    {
      nom: "Grace Mukengeshay",
      role: "Leader Numérique",
      projet: "Formation Digitale",
      temoignage: "La formation digitale a révolutionné ma façon de diriger mon organisation. Nous touchons maintenant 10 fois plus de bénéficiaires grâce aux outils numériques.",
      impact: "10x plus d'impact"
    }
  ];

  const prochainsProjets = [
    {
      title: "Centres d'Excellence Féminine",
      description: "Création de 5 centres régionaux dédiés à la formation et l'accompagnement des femmes leaders",
      debut: "2025",
      investissement: "500,000 USD"
    },
    {
      title: "Programme Mentorat Intergénérationnel",
      description: "Mise en relation de femmes leaders expérimentées avec de jeunes femmes prometteuses",
      debut: "2025",
      investissement: "100,000 USD"
    },
    {
      title: "Initiative Femmes et Nouvelles Technologies",
      description: "Formation de 1000 femmes aux métiers du numérique et de l'innovation technologique",
      debut: "2025",
      investissement: "300,000 USD"
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
              Nos Projets & Réalisations
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up">
              Découvrez comment FELD ASBL transforme concrètement la vie des femmes et des communautés 
              à travers des projets innovants, mesurables et durables.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-green">50+</div>
                <div className="text-muted-foreground">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-purple">3</div>
                <div className="text-muted-foreground">En cours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-green">1000+</div>
                <div className="text-muted-foreground">Bénéficiaires</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-purple">1M+</div>
                <div className="text-muted-foreground">USD investis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets en cours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Projets en Cours</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nos initiatives actuelles qui transforment activement les communautés
            </p>
          </div>

          <div className="space-y-12">
            {projetsEnCours.map((projet, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-smooth animate-scale-in">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto">
                    <img 
                      src={projet.image}
                      alt={projet.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-feld-green text-white">
                        <Clock className="w-3 h-3 mr-1" />
                        {projet.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">
                        {projet.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-primary">Progression</span>
                          <span className="text-sm font-bold text-feld-green">{projet.progression}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-feld-green h-2 rounded-full transition-all duration-500"
                            style={{ width: `${projet.progression}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">{projet.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{projet.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
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
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Target className="w-4 h-4" />
                        <span>{projet.budget}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Objectifs clés :</h4>
                      <div className="space-y-2">
                        {projet.objectifs.map((objectif, objIndex) => (
                          <div key={objIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-feld-green rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{objectif}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-feld-green hover:bg-feld-green/90 text-white">
                      Suivre le projet
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-feld-neutral/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Témoignages de Nos Bénéficiaires</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les voix de celles qui témoignent de l'impact concret de nos projets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {temoignages.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-smooth animate-scale-in">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-feld-green to-feld-purple rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.nom.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{testimonial.nom}</h4>
                      <p className="text-sm text-feld-green font-semibold">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.projet}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{testimonial.temoignage}"
                  </blockquote>
                  <div className="bg-feld-green/5 p-3 rounded-lg border-l-4 border-feld-green">
                    <div className="text-sm font-semibold text-feld-green">{testimonial.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projets complétés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Projets Réalisés avec Succès</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nos réalisations qui ont déjà transformé des vies et des communautés
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projetsCompletes.map((projet, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-smooth animate-scale-in">
                <div className="relative h-64">
                  <img 
                    src={projet.image}
                    alt={projet.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-feld-purple text-white">
                      <Award className="w-3 h-3 mr-1" />
                      {projet.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
                      {projet.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{projet.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{projet.description}</p>
                  
                  <div className="space-y-2 mb-4">
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

                  <div className="bg-feld-purple/5 p-4 rounded-lg border-l-4 border-feld-purple mb-4">
                    <div className="text-sm font-semibold text-primary mb-1">Impact réalisé :</div>
                    <div className="text-sm text-muted-foreground">{projet.impact}</div>
                  </div>

                  <Button variant="outline" className="w-full border-feld-purple text-feld-purple hover:bg-feld-purple hover:text-white">
                    Voir le rapport complet
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prochains projets */}
      <section className="py-20 bg-gradient-to-r from-feld-green to-feld-purple text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Prochains Projets - Vision 2025</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nos ambitions pour amplifier notre impact et toucher encore plus de femmes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {prochainsProjets.map((projet, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 hover:bg-white/20 transition-smooth">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">{projet.title}</h3>
                  <p className="text-white/90 mb-4 leading-relaxed">{projet.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-white/70">Début prévu</div>
                      <div className="font-semibold">{projet.debut}</div>
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Investissement</div>
                      <div className="font-semibold">{projet.investissement}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-white text-feld-green hover:bg-gray-100 font-semibold px-8 py-4">
              Soutenir nos projets futurs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projets;