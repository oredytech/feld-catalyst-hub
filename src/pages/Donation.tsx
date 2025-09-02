import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, CreditCard, Banknote, Users, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: ""
  });

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && donorInfo.name && donorInfo.email) {
      toast.success(`Merci ${donorInfo.name} pour votre don de $${amount} USD!`);
      setAmount("");
      setDonorInfo({ name: "", email: "", message: "" });
    } else {
      toast.error("Veuillez remplir tous les champs obligatoires.");
    }
  };

  const impactAreas = [
    {
      title: "Formation Leadership",
      description: "Former 10 femmes leaders pendant 6 mois",
      amount: "$500",
      icon: Users
    },
    {
      title: "Programme Entrepreneurial", 
      description: "Équiper une coopérative féminine complète",
      amount: "$250",
      icon: Heart
    },
    {
      title: "Médiation Communautaire",
      description: "Résoudre 5 conflits dans une communauté",
      amount: "$100",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-feld-green/10 text-feld-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4" />
              Faire un don
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Soutenez l'autonomisation des femmes congolaises
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Votre générosité permet à FELD ASBL de poursuivre sa mission de développement 
              du leadership féminin en République Démocratique du Congo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Donation Form */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Faire un don</CardTitle>
                <CardDescription>
                  Choisissez le montant de votre contribution pour soutenir nos programmes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDonation} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <Label htmlFor="amount" className="text-base font-semibold mb-4 block">
                      Montant du don (USD)
                    </Label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {predefinedAmounts.map((preset) => (
                        <Button
                          key={preset}
                          type="button"
                          variant={amount === preset.toString() ? "default" : "outline"}
                          onClick={() => setAmount(preset.toString())}
                          className="h-12"
                        >
                          ${preset}
                        </Button>
                      ))}
                    </div>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Autre montant"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="text-lg h-12"
                    />
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Adresse email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea
                        id="message"
                        placeholder="Partagez votre motivation ou message..."
                        value={donorInfo.message}
                        onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Méthode de paiement
                    </Label>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" className="flex-1">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Carte bancaire
                      </Button>
                      <Button type="button" variant="outline" className="flex-1">
                        <Banknote className="w-4 h-4 mr-2" />
                        Virement
                      </Button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full button-gradient text-white font-semibold h-12"
                    disabled={!amount || !donorInfo.name || !donorInfo.email}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Faire un don de ${amount || '0'} USD
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Impact Information */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-feld-green/5 to-feld-purple/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Votre impact</CardTitle>
                  <CardDescription>
                    Découvrez comment votre don transforme des vies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {impactAreas.map((area, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-white rounded-lg">
                        <div className="w-12 h-12 bg-feld-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <area.icon className="w-6 h-6 text-feld-green" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-primary">{area.title}</h4>
                            <span className="text-lg font-bold text-feld-green">{area.amount}</span>
                          </div>
                          <p className="text-muted-foreground text-sm">{area.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact for Large Donations */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Don important ?</CardTitle>
                  <CardDescription>
                    Pour les dons de plus de $1000 USD ou les partenariats,contactez-nous directement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-feld-green rounded-full"></div>
                      <span>Email: feldrdc1@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-feld-green rounded-full"></div>
                      <span>Téléphone: +243 995 021 267</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-feld-green text-feld-green hover:bg-feld-green hover:text-white"
                  >
                    Nous contacter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donation;