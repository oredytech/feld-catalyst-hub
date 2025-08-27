import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Eye, Share2, Tag, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useWordPressPost, useWordPressCategories } from "@/hooks/useWordPress";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const { data: article, isLoading, error } = useWordPressPost(slug!);
  const { data: categories } = useWordPressCategories();

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <Skeleton className="h-8 w-32 mb-6" />
              <Skeleton className="h-12 w-full mb-4" />
              <Skeleton className="h-64 w-full mb-6" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <Skeleton className="h-48 w-full" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Article non trouvé</h1>
            <p className="text-muted-foreground mb-6">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
            <Button onClick={() => navigate('/actualites')} className="bg-feld-green hover:bg-feld-green/90 text-white">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Retour aux actualités
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAuthorName = () => {
    return article._embedded?.author?.[0]?.name || 'FELD ASBL';
  };

  const getFeaturedImage = () => {
    return article._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg';
  };

  const getCategoryNames = () => {
    const articleCategories = article._embedded?.['wp:term']?.[0] || [];
    return articleCategories.filter(term => term.taxonomy === 'category').map(cat => cat.name);
  };

  const getTagNames = () => {
    const articleTags = article._embedded?.['wp:term']?.[1] || [];
    return articleTags.filter(term => term.taxonomy === 'post_tag').map(tag => tag.name);
  };

  const formatContent = (content: string) => {
    // Nettoyer et formater le contenu HTML
    const cleanContent = content
      .replace(/\[.*?\]/g, '') // Supprimer les shortcodes WordPress
      .replace(/<script[^>]*>.*?<\/script>/gi, '') // Supprimer les scripts
      .replace(/<style[^>]*>.*?<\/style>/gi, ''); // Supprimer les styles inline
    
    return { __html: cleanContent };
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Contenu principal */}
          <article className="lg:col-span-3">
            {/* Navigation retour */}
            <Button 
              variant="outline" 
              onClick={() => navigate('/actualites')}
              className="mb-6 border-feld-green text-feld-green hover:bg-feld-green hover:text-white"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Retour aux actualités
            </Button>

            {/* En-tête de l'article */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {getCategoryNames().map((category, index) => (
                  <Badge key={index} className="bg-feld-green text-white">
                    {category}
                  </Badge>
                ))}
              </div>

              <h1 
                className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: article.title.rendered }}
              />

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{getAuthorName()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Lecture: 5 min</span>
                </div>
              </div>

              {/* Actions de partage */}
              <div className="flex items-center gap-4 pb-6 border-b">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Partager
                </Button>
              </div>
            </div>

            {/* Image mise en avant */}
            <div className="mb-8">
              <img 
                src={getFeaturedImage()}
                alt={article._embedded?.['wp:featuredmedia']?.[0]?.alt_text || article.title.rendered}
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </div>

            {/* Résumé */}
            <div className="mb-8 p-6 bg-gradient-to-br from-feld-green/5 to-feld-purple/5 rounded-lg border-l-4 border-feld-green">
              <h2 className="text-xl font-semibold text-primary mb-3">Résumé</h2>
              <div 
                className="text-muted-foreground leading-relaxed prose prose-lg"
                dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}
              />
            </div>

            {/* Contenu de l'article */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={formatContent(article.content.rendered)}
                style={{
                  lineHeight: '1.7',
                }}
              />
            </div>

            {/* Tags */}
            {getTagNames().length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold text-primary mb-4">Mots-clés</h3>
                <div className="flex flex-wrap gap-2">
                  {getTagNames().map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-feld-green border-feld-green">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation vers d'autres articles */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex justify-between">
                <Button variant="outline" className="border-feld-purple text-feld-purple hover:bg-feld-purple hover:text-white">
                  ← Article précédent
                </Button>
                <Button variant="outline" className="border-feld-purple text-feld-purple hover:bg-feld-purple hover:text-white">
                  Article suivant →
                </Button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Newsletter */}
            <Card className="p-6 bg-gradient-to-br from-feld-green/5 to-feld-purple/5">
              <h3 className="text-lg font-bold text-primary mb-4">Newsletter FELD</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Restez informé de nos dernières actualités.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-feld-green focus:border-transparent text-sm"
                />
                <Button size="sm" className="w-full bg-feld-green hover:bg-feld-green/90 text-white">
                  S'abonner
                </Button>
              </div>
            </Card>

            {/* Articles liés */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-primary mb-4">Articles similaires</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4 last:border-0">
                  <h4 className="font-medium text-sm text-primary mb-2 hover:text-feld-green cursor-pointer transition-colors">
                    Programme de leadership 2024
                  </h4>
                  <p className="text-xs text-muted-foreground">15 Jan 2024</p>
                </div>
                <div className="border-b border-gray-100 pb-4 last:border-0">
                  <h4 className="font-medium text-sm text-primary mb-2 hover:text-feld-green cursor-pointer transition-colors">
                    Projet réconciliation Nord-Kivu
                  </h4>
                  <p className="text-xs text-muted-foreground">8 Jan 2024</p>
                </div>
                <div className="border-b border-gray-100 pb-4 last:border-0">
                  <h4 className="font-medium text-sm text-primary mb-2 hover:text-feld-green cursor-pointer transition-colors">
                    Partenariat ONU Femmes
                  </h4>
                  <p className="text-xs text-muted-foreground">22 Déc 2023</p>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-primary mb-4">Contactez-nous</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-feld-green">📧</span>
                  <span className="text-muted-foreground">info@feld-rdc.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-feld-green">📞</span>
                  <span className="text-muted-foreground">+243 123 456 789</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-feld-green">📍</span>
                  <span className="text-muted-foreground">Kinshasa, RDC</span>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetail;