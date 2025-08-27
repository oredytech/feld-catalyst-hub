import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User, ArrowRight, Eye, MessageCircle, Share2, Clock, Tag, AlertCircle } from "lucide-react";
import { useWordPressPosts, useWordPressCategories } from "@/hooks/useWordPress";
import feldPresentationReal from "@/assets/feld-presentation-real.jpg";
import feldTrainingReal from "@/assets/feld-training-real.jpg";
import feldCocoaReal from "@/assets/feld-cocoa-real.jpg";
import feldCraftsReal from "@/assets/feld-crafts-real.jpg";

const Actualites = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data: posts, isLoading, error } = useWordPressPosts(currentPage, 10);
  const { data: categories } = useWordPressCategories();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAuthorName = (post: any) => {
    return post._embedded?.author?.[0]?.name || 'FELD ASBL';
  };

  const getFeaturedImage = (post: any) => {
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    
    if (!featuredImage) {
      // Images par défaut basées sur les catégories
      const categoryNames = getCategoryNames(post);
      if (categoryNames.includes('Formation')) return feldTrainingReal;
      if (categoryNames.includes('Agriculture')) return feldCocoaReal;
      if (categoryNames.includes('Paix')) return feldPresentationReal;
      return feldCraftsReal;
    }
    
    return featuredImage;
  };

  const getCategoryNames = (post: any) => {
    const postCategories = post._embedded?.['wp:term']?.[0] || [];
    return postCategories.filter((term: any) => term.taxonomy === 'category').map((cat: any) => cat.name);
  };

  const getExcerpt = (post: any) => {
    return post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
  };

  const handleArticleClick = (slug: string) => {
    navigate(`/actualites/${slug}`);
  };

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

  // Fallback si l'API WordPress n'est pas disponible
  const fallbackCategories = [
    { nom: "Formation", count: 12 },
    { nom: "Partenariat", count: 8 },
    { nom: "Paix", count: 15 },
    { nom: "Agriculture", count: 6 },
    { nom: "Événement", count: 10 }
  ];

  const displayCategories = categories?.map(cat => ({ nom: cat.name, count: 0 })) || fallbackCategories;

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
            {isLoading ? (
              <div className="space-y-8">
                <Card className="mb-12">
                  <Skeleton className="h-80 w-full rounded-t-lg" />
                  <CardContent className="p-6">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i}>
                      <Skeleton className="h-48 w-full rounded-t-lg" />
                      <CardContent className="p-6">
                        <Skeleton className="h-6 w-full mb-3" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-600 mb-2">Erreur de chargement</h3>
                <p className="text-muted-foreground mb-4">
                  Impossible de charger les articles depuis le site WordPress.
                </p>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="bg-feld-green hover:bg-feld-green/90 text-white"
                >
                  Réessayer
                </Button>
              </div>
            ) : posts && posts.length > 0 ? (
              <>
                {/* Article à la une */}
                {posts.slice(0, 1).map((post) => (
                  <Card key={post.id} className="mb-12 overflow-hidden hover:shadow-lg transition-smooth animate-fade-in cursor-pointer"
                    onClick={() => handleArticleClick(post.slug)}>
                    <div className="relative h-80">
                      <img 
                        src={getFeaturedImage(post)}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = feldTrainingReal;
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-feld-green text-white">
                          <Star className="w-3 h-3 mr-1" />
                          À la une
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <div className="text-white">
                          {getCategoryNames(post).length > 0 && (
                            <Badge variant="secondary" className="mb-3">
                              {getCategoryNames(post)[0]}
                            </Badge>
                          )}
                          <h2 className="text-3xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                          <p className="text-white/90 mb-4">{getExcerpt(post)}</p>
                          <div className="flex items-center gap-4 text-sm text-white/80">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {getAuthorName(post)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div 
                        className="text-muted-foreground leading-relaxed mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                  {posts.slice(1).map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-smooth animate-scale-in cursor-pointer"
                      onClick={() => handleArticleClick(post.slug)}>
                      <div className="relative h-48">
                        <img 
                          src={getFeaturedImage(post)}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = feldTrainingReal;
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          {getCategoryNames(post).length > 0 && (
                            <Badge variant="secondary">{getCategoryNames(post)[0]}</Badge>
                          )}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2" 
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                          {getExcerpt(post)}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {getAuthorName(post)}
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
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-bold text-muted-foreground mb-2">Aucun article trouvé</h3>
                <p className="text-muted-foreground">Revenez bientôt pour découvrir nos dernières actualités.</p>
              </div>
            )}

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
                {displayCategories.map((categorie, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-muted-foreground hover:text-feld-green cursor-pointer transition-colors">
                      {categorie.nom}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {categorie.count || '—'}
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

// Composant Star pour l'icône vedette
const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Actualites;