import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Eye, MessageCircle, Share2, Clock, Tag } from "lucide-react";
import feldTeamBuilding from "@/assets/feld-team-building.jpg";
import feldTrainingSession from "@/assets/feld-training-session.jpg";
import feldCommunityGathering from "@/assets/feld-community-gathering.jpg";
import feldHumanitarianAid from "@/assets/feld-humanitarian-aid.jpg";
import feldCocoaFarming from "@/assets/feld-cocoa-farming.jpg";
import feldWomenProducts from "@/assets/feld-women-products.jpg";

const Actualites = () => {
  const actualitesRecentes = [
    {
      id: 1,
      titre: "FELD ASBL lance son programme de leadership 2024",
      resume: "200 femmes sélectionnées pour participer au programme de formation intensive au leadership transformationnel dans 3 provinces de la RDC.",
      contenu: "Ce nouveau programme d'envergure vise à former une nouvelle génération de femmes leaders capables de transformer leurs communautés. Les participantes bénéficieront de 6 mois de formation intensive couvrant le leadership, l'entrepreneuriat, la communication et la gestion de projets.",
      image: feldTrainingSession,
      date: "15 Janvier 2024",
      auteur: "Marie Tshiala",
      categorie: "Formation",
      tags: ["Leadership", "Formation", "Femmes"],
      vues: 1250,
      commentaires: 24,
      featured: true
    },
    {
      id: 2,
      titre: "Succès du projet de réconciliation communautaire au Nord-Kivu",
      resume: "15 communautés du Nord-Kivu ont signé un accord de paix durable grâce aux efforts de médiation de FELD ASBL et de ses partenaires locaux.",
      contenu: "Après 8 mois d'efforts soutenus, notre équipe de médiatrices a réussi à établir un dialogue constructif entre communautés en conflit. Ce succès démontre l'efficacité de notre approche participative et inclusive.",
      image: feldCommunityGathering,
      date: "8 Janvier 2024",
      auteur: "Grace Mukengeshay",
      categorie: "Paix",
      tags: ["Paix", "Médiation", "Nord-Kivu"],
      vues: 890,
      commentaires: 18
    },
    {
      id: 3,
      titre: "Partenariat stratégique avec l'ONU Femmes",
      resume: "FELD ASBL signe un accord de coopération avec ONU Femmes pour renforcer l'autonomisation économique des femmes rurales en RDC.",
      contenu: "Ce partenariat permettra d'étendre nos programmes d'entrepreneuriat féminin à 5 nouvelles provinces et de toucher 2000 femmes supplémentaires d'ici 2025.",
      image: feldWomenProducts,
      date: "22 Décembre 2023",
      auteur: "Esperance Mbuyi",
      categorie: "Partenariat",
      tags: ["Partenariat", "ONU", "Entrepreneuriat"],
      vues: 2100,
      commentaires: 45
    },
    {
      id: 4,
      titre: "Formation de 100 médiateurs communautaires",
      resume: "FELD ASBL a formé avec succès 100 médiateurs dans le cadre du programme 'Femmes Bâtisseuses de Paix' dans l'est de la RDC.",
      contenu: "Ces médiateurs, issus de 20 communautés différentes, sont maintenant équipés des outils nécessaires pour prévenir et résoudre les conflits locaux de manière pacifique.",
      image: feldHumanitarianAid,
      date: "15 Décembre 2023",
      auteur: "Jeanne Kalombo",
      categorie: "Formation",
      tags: ["Médiation", "Formation", "Paix"],
      vues: 750,
      commentaires: 12
    },
    {
      id: 5,
      titre: "Lancement du programme agriculture durable",
      resume: "300 femmes agricultrices bénéficient du nouveau programme d'agriculture biologique et de formation aux techniques modernes de culture.",
      contenu: "Ce programme innovant combine formation technique, accompagnement personnalisé et accès au financement pour transformer l'agriculture traditionnelle.",
      image: feldCocoaFarming,
      date: "1 Décembre 2023",
      auteur: "Clémentine Mukala",
      categorie: "Agriculture",
      tags: ["Agriculture", "Durabilité", "Formation"],
      vues: 980,
      commentaires: 16
    },
    {
      id: 6,
      titre: "Célébration de la Journée Internationale de la Femme",
      resume: "FELD ASBL organise une grande conférence réunissant 500 femmes leaders pour célébrer la Journée Internationale de la Femme 2024.",
      contenu: "L'événement a mis en lumière les réussites des femmes congolaises et les défis à relever pour une meilleure représentation féminine dans tous les secteurs.",
      image: feldTeamBuilding,
      date: "8 Mars 2024",
      auteur: "Albertine Tshimanga",
      categorie: "Événement",
      tags: ["Événement", "Célébration", "Femmes"],
      vues: 3200,
      commentaires: 67
    }
  ];

  const communiques = [
    {
      titre: "Communiqué - Nouvelle stratégie 2024-2027",
      date: "10 Janvier 2024",
      type: "Communiqué officiel"
    },
    {
      titre: "Position de FELD sur l'égalité des genres",  
      date: "5 Janvier 2024",
      type: "Position officielle"
    },
    {
      titre: "Rapport annuel d'activités 2023",
      date: "28 Décembre 2023", 
      type: "Rapport"
    }
  ];

  const evenementsAVenir = [
    {
      titre: "Conférence Leadership Féminin 2024",
      date: "15 Mars 2024",
      lieu: "Kinshasa",
      type: "Conférence"
    },
    {
      titre: "Formation Médiation Communautaire",
      date: "22 Mars 2024", 
      lieu: "Goma",
      type: "Formation"
    },
    {
      titre: "Salon de l'Entrepreneuriat Féminin",
      date: "5 Avril 2024",
      lieu: "Lubumbashi", 
      type: "Salon"
    }
  ];

  const categoriesPopulaires = [
    { nom: "Formation", count: 12 },
    { nom: "Partenariat", count: 8 },
    { nom: "Paix", count: 15 },
    { nom: "Agriculture", count: 6 },
    { nom: "Événement", count: 10 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-feld-green/10 via-white to-feld-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Actualités & Nouvelles
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up">
              Suivez les dernières nouvelles de FELD ASBL, nos réalisations, nos événements 
              et l'impact de nos actions sur le terrain.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-green">50+</div>
                <div className="text-muted-foreground">Articles publiés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-purple">15K+</div>
                <div className="text-muted-foreground">Lecteurs mensuels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-green">25+</div>
                <div className="text-muted-foreground">Événements annuels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-purple">100%</div>
                <div className="text-muted-foreground">Transparence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {/* Article à la une */}
            {actualitesRecentes.filter(article => article.featured).map((article) => (
              <Card key={article.id} className="mb-12 overflow-hidden hover:shadow-lg transition-smooth animate-fade-in">
                <div className="relative h-80">
                  <img 
                    src={article.image}
                    alt={article.titre}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-feld-green text-white">
                      <Star className="w-3 h-3 mr-1" />
                      À la une
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white">
                      <Badge variant="secondary" className="mb-3">{article.categorie}</Badge>
                      <h2 className="text-3xl font-bold mb-2">{article.titre}</h2>
                      <p className="text-white/90 mb-4">{article.resume}</p>
                      <div className="flex items-center gap-4 text-sm text-white/80">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.auteur}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.vues}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">{article.contenu}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-feld-green border-feld-green">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {article.commentaires} commentaires
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        Partager
                      </div>
                    </div>
                    <Button className="bg-feld-green hover:bg-feld-green/90 text-white">
                      Lire la suite
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Autres actualités */}
            <div className="grid md:grid-cols-2 gap-6">
              {actualitesRecentes.filter(article => !article.featured).map((article, index) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-smooth animate-scale-in">
                  <div className="relative h-48">
                    <img 
                      src={article.image}
                      alt={article.titre}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{article.categorie}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">{article.titre}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {article.resume}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {article.vues}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-feld-green text-feld-green hover:bg-feld-green hover:text-white">
                      Lire l'article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" className="px-4">Précédent</Button>
                <Button className="bg-feld-green text-white px-4">1</Button>
                <Button variant="outline" className="px-4">2</Button>
                <Button variant="outline" className="px-4">3</Button>
                <Button variant="outline" className="px-4">Suivant</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Newsletter */}
            <Card className="p-6 bg-gradient-to-br from-feld-green/5 to-feld-purple/5">
              <h3 className="text-xl font-bold text-primary mb-4">Newsletter FELD</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Recevez nos dernières actualités et nos rapports d'impact directement dans votre boîte mail.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-feld-green focus:border-transparent"
                />
                <Button className="w-full bg-feld-green hover:bg-feld-green/90 text-white">
                  S'abonner
                </Button>
              </div>
            </Card>

            {/* Catégories populaires */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Catégories</h3>
              <div className="space-y-3">
                {categoriesPopulaires.map((categorie, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-muted-foreground hover:text-feld-green cursor-pointer transition-colors">
                      {categorie.nom}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {categorie.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Événements à venir */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Événements à Venir</h3>
              <div className="space-y-4">
                {evenementsAVenir.map((evenement, index) => (
                  <div key={index} className="border-l-4 border-feld-purple pl-4">
                    <h4 className="font-semibold text-primary text-sm">{evenement.titre}</h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Calendar className="w-3 h-3" />
                      {evenement.date}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      📍 {evenement.lieu}
                    </div>
                    <Badge variant="outline" className="text-xs mt-2">
                      {evenement.type}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-feld-purple text-feld-purple hover:bg-feld-purple hover:text-white">
                Voir tous les événements
              </Button>
            </Card>

            {/* Communiqués officiels */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Communiqués Officiels</h3>
              <div className="space-y-4">
                {communiques.map((communique, index) => (
                  <div key={index} className="p-3 bg-feld-neutral/10 rounded-lg">
                    <h4 className="font-semibold text-primary text-sm mb-2">{communique.titre}</h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {communique.date}
                    </div>
                    <Badge variant="outline" className="text-xs mt-2">
                      {communique.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Composant manquant pour l'étoile
const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Actualites;