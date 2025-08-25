import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "À propos", href: "#a-propos" },
    { name: "Nos domaines", href: "#domaines" },
    { name: "Projets", href: "#projets" },
    { name: "Actualités", href: "#actualites" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" }
  ];

  const programmes = [
    "Leadership Féminin",
    "Formation Entrepreneuriale", 
    "Médiation Communautaire",
    "Développement Durable",
    "Autonomisation Économique",
    "Éducation Civique"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-feld-green to-feld-purple py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Restez connectés à notre mission
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités, 
            rapports d'impact et opportunités de formation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button 
              className="bg-white text-primary hover:bg-gray-100 font-semibold whitespace-nowrap px-6"
            >
              S'abonner
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Organization Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-feld-green to-feld-purple rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  F
                </div>
                <div>
                  <h3 className="text-xl font-bold">FELD ASBL</h3>
                  <p className="text-sm text-primary-foreground/80">Leadership · Développement</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Femmes Engagées pour le Leadership et le Développement. 
                Promouvoir l'autonomisation des femmes en République Démocratique du Congo.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-feld-green transition-smooth"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-feld-green transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programmes */}
            <div>
              <h4 className="text-lg font-bold mb-6">Nos Programmes</h4>
              <ul className="space-y-3">
                {programmes.map((programme, index) => (
                  <li key={index}>
                    <span className="text-primary-foreground/80">
                      {programme}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div id="contact">
              <h4 className="text-lg font-bold mb-6">Nous Contacter</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-feld-green mt-1 flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <p>12, Avenue de l'Avenir</p>
                    <p>Quartier Basoko, Ngaliema</p>
                    <p>Kinshasa, RDC</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-feld-green flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <p>+243 995 021 267</p>
                    <p>+243 997 713 286</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-feld-green flex-shrink-0" />
                  <a 
                    href="mailto:feldrdc1@gmail.com"
                    className="text-primary-foreground/80 hover:text-feld-green transition-smooth"
                  >
                    feldrdc1@gmail.com
                  </a>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-feld-green hover:bg-feld-green-dark text-white font-semibold"
              >
                Nous écrire
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} FELD ASBL. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-feld-green transition-smooth">
                Politique de Confidentialité
              </a>
              <a href="#" className="hover:text-feld-green transition-smooth">
                Mentions Légales
              </a>
              <a href="#" className="hover:text-feld-green transition-smooth">
                Plan du Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;