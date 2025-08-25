import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, HeadphonesIcon, Globe } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous ajouteriez la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const coordonnees = [
    {
      titre: "Adresse du Siège",
      valeur: "12, Avenue de l'Avenir, Quartier Basoko, Commune Ngaliema, Kinshasa, RDC",
      icon: MapPin,
      color: "text-feld-green"
    },
    {
      titre: "Téléphones",
      valeur: "+243 995 021 267 | +243 997 713 286 | +243 999 147 627",
      icon: Phone,
      color: "text-feld-purple"
    },
    {
      titre: "Email",
      valeur: "feldrdc1@gmail.com",
      icon: Mail,
      color: "text-feld-green"
    },
    {
      titre: "Horaires",
      valeur: "Lundi - Vendredi: 8h00 - 17h00 | Samedi: 8h00 - 12h00",
      icon: Clock,
      color: "text-feld-purple"
    }
  ];

  const bureaux = [
    {
      ville: "Kinshasa",
      adresse: "12, Avenue de l'Avenir, Quartier Basoko, Commune Ngaliema",
      telephone: "+243 995 021 267",
      email: "kinshasa@feldrdc.org",
      type: "Siège Social"
    },
    {
      ville: "Lubumbashi",
      adresse: "Avenue Mobutu, Quartier Kenya, Commune Lubumbashi",
      telephone: "+243 997 713 286",
      email: "lubumbashi@feldrdc.org",
      type: "Bureau Régional"
    },
    {
      ville: "Goma",
      adresse: "Boulevard Kanyamuhanga, Quartier Himbi, Ville de Goma",
      telephone: "+243 999 147 627",
      email: "goma@feldrdc.org",
      type: "Bureau Régional"
    }
  ];

  const motifs = [
    {
      titre: "Partenariat & Collaboration",
      description: "Vous souhaitez collaborer avec FELD ASBL ou devenir partenaire",
      icon: Globe
    },
    {
      titre: "Demande d'Information",
      description: "Questions sur nos programmes, formations ou modalités d'inscription",
      icon: MessageCircle
    },
    {
      titre: "Support Technique",
      description: "Assistance technique ou questions sur nos plateformes numériques",
      icon: HeadphonesIcon
    },
    {
      titre: "Média & Presse",
      description: "Demandes d'interviews, communiqués de presse ou couverture média",
      icon: Send
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
              Contactez-Nous
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up">
              Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter 
              pour en savoir plus sur nos programmes, nos partenariats ou pour toute autre demande.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-green">3</div>
                <div className="text-muted-foreground">Bureaux</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-purple">24h</div>
                <div className="text-muted-foreground">Délai de réponse</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-green">5</div>
                <div className="text-muted-foreground">Provinces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-feld-purple">100%</div>
                <div className="text-muted-foreground">Réponse garantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div>
            <Card className="p-8 card-shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">Envoyez-nous un Message</h2>
              <p className="text-muted-foreground mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Nom complet *
                    </label>
                    <Input
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      required
                      className="focus:ring-feld-green focus:border-feld-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="focus:ring-feld-green focus:border-feld-green"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Téléphone
                    </label>
                    <Input
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="+243 XXX XXX XXX"
                      className="focus:ring-feld-green focus:border-feld-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Sujet *
                    </label>
                    <Input
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                      className="focus:ring-feld-green focus:border-feld-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande en détail..."
                    required
                    rows={6}
                    className="focus:ring-feld-green focus:border-feld-green"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-feld-green hover:bg-feld-green/90 text-white font-semibold py-3"
                >
                  Envoyer le Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Coordonnées principales */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Nos Coordonnées</h2>
              <div className="space-y-6">
                {coordonnees.map((coord, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-feld-neutral/10 rounded-lg">
                    <div className={`w-12 h-12 ${coord.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <coord.icon className={`w-6 h-6 ${coord.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{coord.titre}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{coord.valeur}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Motifs de contact */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Pourquoi nous Contacter ?</h3>
              <div className="space-y-4">
                {motifs.map((motif, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 hover:bg-feld-neutral/5 rounded-lg transition-colors">
                    <motif.icon className={`w-5 h-5 mt-1 ${
                      index % 2 === 0 ? 'text-feld-green' : 'text-feld-purple'
                    }`} />
                    <div>
                      <h4 className="font-semibold text-primary text-sm">{motif.titre}</h4>
                      <p className="text-muted-foreground text-xs">{motif.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact rapide */}
            <Card className="p-6 bg-gradient-to-br from-feld-green/5 to-feld-purple/5">
              <h3 className="text-xl font-bold text-primary mb-4">Contact Rapide</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Pour une réponse immédiate, contactez-nous directement par téléphone ou WhatsApp.
              </p>
              <div className="flex flex-col gap-3">
                <Button 
                  className="bg-feld-green hover:bg-feld-green/90 text-white justify-start"
                  onClick={() => window.open('tel:+243995021267')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler maintenant
                </Button>
                <Button 
                  variant="outline" 
                  className="border-feld-purple text-feld-purple hover:bg-feld-purple hover:text-white justify-start"
                  onClick={() => window.open('mailto:feldrdc1@gmail.com')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Envoyer un email
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Nos bureaux */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Nos Bureaux en RDC</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              FELD ASBL dispose de trois bureaux stratégiquement situés pour mieux servir 
              les communautés à travers la République Démocratique du Congo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bureaux.map((bureau, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-smooth animate-scale-in">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-feld-green/10' : 'bg-feld-purple/10'
                    }`}>
                      <MapPin className={`w-6 h-6 ${
                        index === 0 ? 'text-feld-green' : 'text-feld-purple'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{bureau.ville}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        bureau.type === 'Siège Social' 
                          ? 'bg-feld-green/10 text-feld-green' 
                          : 'bg-feld-purple/10 text-feld-purple'
                      }`}>
                        {bureau.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{bureau.adresse}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">{bureau.telephone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">{bureau.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Carte */}
        <section className="py-16">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-feld-green/10 to-feld-purple/10 p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Nous Localiser</h3>
              <p className="text-muted-foreground mb-6">
                Visitez notre siège social à Kinshasa ou l'un de nos bureaux régionaux
              </p>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-feld-green mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Carte interactive bientôt disponible
                  </p>
                  <p className="text-sm text-muted-foreground">
                    12, Avenue de l'Avenir, Quartier Basoko<br />
                    Commune Ngaliema, Kinshasa, RDC
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;