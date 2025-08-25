import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Heart, Calendar, MapPin, Award, TrendingUp } from "lucide-react";
import feldTeamBuilding from "@/assets/feld-team-building.jpg";
import feldTrainingSession from "@/assets/feld-training-session.jpg";

const APropos = () => {
  const timeline = [
    {
      year: "2017",
      title: "Fondation officielle",
      description: "Création de FELD ASBL le 7 août 2017 à Kinshasa, RDC",
      icon: Target
    },
    {
      year: "2018-2019",
      title: "Premiers programmes",
      description: "Lancement des programmes de leadership et entrepreneuriat féminin",
      icon: Users
    },
    {
      year: "2020-2021",
      title: "Expansion nationale",
      description: "Extension vers plusieurs provinces et partenariats stratégiques",
      icon: TrendingUp
    },
    {
      year: "2022-2023",
      title: "Reconnaissance internationale",
      description: "Partenariats internationaux et financements de projets",
      icon: Award
    },
    {
      year: "2024-2025",
      title: "Vision 2030",
      description: "Plan stratégique avec objectif de 10,000 femmes impactées",
      icon: Eye
    }
  ];

  const values = [
    {
      title: "Solidarité",
      description: "Force du collectif et de l'entraide entre femmes pour un développement commun",
      icon: Users,
      color: "text-feld-green"
    },
    {
      title: "Leadership",
      description: "Développer l'influence positive et les capacités de direction des femmes",
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
      description: "Respect de l'environnement et engagement pour les générations futures",
      icon: Eye,
      color: "text-feld-purple"
    }
  ];

  const stats = [
    { number: "7 ans", label: "d'expérience", icon: Calendar },
    { number: "1000+", label: "femmes formées", icon: Users },
    { number: "5+", label: "provinces touchées", icon: MapPin },
    { number: "50+", label: "projets réalisés", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-feld-green/10 via-white to-feld-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              À Propos de FELD ASBL
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up">
              Femmes Engagées pour le Leadership et le Développement - Une organisation apolitique 
              à but non lucratif dédiée à l'autonomisation des femmes en République Démocratique du Congo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-gradient text-white font-semibold px-8 py-4">
                Notre Histoire
              </Button>
              <Button variant="outline" size="lg" className="border-feld-green text-feld-green hover:bg-feld-green hover:text-white px-8 py-4">
                Nos Valeurs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-gradient-to-br from-feld-green to-feld-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-feld-neutral/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-feld-green/10 text-feld-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Notre Mission
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Promouvoir le leadership féminin et le développement durable
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Renforcer les capacités des femmes et contribuer au développement durable de la RDC 
                à travers des programmes innovants d'éducation, de formation et d'accompagnement personnalisé.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre approche intégrée vise à créer des changements durables en autonomisant 
                les femmes pour qu'elles deviennent des agents de transformation dans leurs communautés.
              </p>
            </div>
            <div className="relative">
              <img 
                src={feldTrainingSession} 
                alt="Formation FELD - Mission" 
                className="w-full h-96 object-cover rounded-2xl card-shadow"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative md:order-1">
              <img 
                src={feldTeamBuilding} 
                alt="Équipe FELD - Vision" 
                className="w-full h-96 object-cover rounded-2xl card-shadow"
              />
            </div>
            <div className="animate-slide-up md:order-2">
              <div className="inline-flex items-center gap-2 bg-feld-purple/10 text-feld-purple px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Eye className="w-4 h-4" />
                Notre Vision
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Organisation de référence en Afrique centrale
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Être une organisation de référence dans la promotion du leadership féminin en Afrique centrale, 
                contribuant à une société équitable, pacifique et prospère.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous aspirons à un avenir où chaque femme peut réaliser son plein potentiel 
                et contribuer activement au développement de son pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Notre Histoire</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Depuis 2017, FELD ASBL évolue et grandit pour mieux servir les femmes congolaises
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-12 animate-slide-up">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    index % 2 === 0 ? 'bg-feld-green/10' : 'bg-feld-purple/10'
                  }`}>
                    <item.icon className={`w-8 h-8 ${
                      index % 2 === 0 ? 'text-feld-green' : 'text-feld-purple'
                    }`} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className={`text-2xl font-bold mb-2 ${
                    index % 2 === 0 ? 'text-feld-green' : 'text-feld-purple'
                  }`}>
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-feld-neutral/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Nos Valeurs Fondamentales</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident notre action et définissent notre approche du développement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-smooth animate-scale-in">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${value.color.replace('text-', 'bg-')}/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Ce qui nous distingue</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 animate-fade-in">
                <div className="w-16 h-16 bg-feld-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-feld-green" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Approche Apolitique</h3>
                <p className="text-muted-foreground">
                  Neutralité totale qui permet de rassembler toutes les femmes autour d'objectifs communs
                </p>
              </div>
              <div className="p-6 animate-fade-in">
                <div className="w-16 h-16 bg-feld-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-feld-purple" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Focus Leadership</h3>
                <p className="text-muted-foreground">
                  Spécialisation dans l'autonomisation et le développement des capacités de direction
                </p>
              </div>
              <div className="p-6 animate-fade-in">
                <div className="w-16 h-16 bg-feld-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-feld-green" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Impact Durable</h3>
                <p className="text-muted-foreground">
                  Changements profonds et intergénérationnels dans les communautés
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APropos;