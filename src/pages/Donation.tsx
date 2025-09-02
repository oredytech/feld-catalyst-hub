import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, CreditCard, Banknote, Users, CheckCircle, Smartphone, Copy, Building2 } from "lucide-react";
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copié dans le presse-papiers!");
  };

  const bankingInfo = {
    usd: {
      accountName: "FEMMES ENGAGEES POUR LE LEADERSHIP ET LE DEVELOPPEMENT",
      accountNumber: "30014614301",
      normalizedAccount: "00021003003001461430110",
      accountType: "CURRENT ACCOUNT CORPORATES UAT4",
      currency: "Dollar AMÉRICAIN (USD)",
      swiftCode: "ABNGCDKI",
      bankCode: "00021",
      correspondent: {
        name: "CITI NEW YORK",
        swift: "CITIUS33",
        accountNumber: "36253309"
      }
    },
    eur: {
      accountName: "FEMMES ENGAGEES POUR LE LEADERSHIP ET LE DEVELOPPEMENT",
      currency: "EURO",
      correspondent: {
        name: "CITI BANK LONDRES", 
        swift: "CITIGB2L",
        accountNumber: "11296337",
        iban: "GB33CITI18500811296337"
      }
    },
    cdf: {
      accountName: "Access Bank (RD Congo) SA",
      currency: "Franc Congolais (CDF)",
      correspondent: {
        name: "Banque Centrale du Congo (BCC)",
        swift: "BCCGSKS", 
        accountNumber: "00010100000000000001303"
      }
    }
  };

  const mobileMoneyNumbers = [
    { operator: "Airtel Money", number: "+243 995 021 267" },
    { operator: "Orange Money", number: "+243 997 713 286" },
    { operator: "M-Pesa", number: "+243 995 021 267" }
  ];

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

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Donation Form */}
            <Card className="p-6 lg:col-span-2">
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

                  <Button 
                    type="submit" 
                    className="w-full button-gradient text-white font-semibold h-12"
                    disabled={!amount || !donorInfo.name || !donorInfo.email}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Confirmer le don de ${amount || '0'} USD
                  </Button>
                </form>

                {/* Payment Methods */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-primary mb-6">Méthodes de Paiement</h3>
                  
                  <Tabs defaultValue="bank" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="bank">
                        <Building2 className="w-4 h-4 mr-2" />
                        Virement Bancaire
                      </TabsTrigger>
                      <TabsTrigger value="mobile">
                        <Smartphone className="w-4 h-4 mr-2" />
                        Mobile Money
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="bank" className="space-y-6 mt-6">
                      <Tabs defaultValue="usd" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="usd">USD</TabsTrigger>
                          <TabsTrigger value="eur">EUR</TabsTrigger>
                          <TabsTrigger value="cdf">CDF</TabsTrigger>
                        </TabsList>

                        <TabsContent value="usd" className="mt-4">
                          <Card className="p-4 bg-feld-green/5 border-feld-green/20">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg text-feld-green">Compte USD - Access Bank</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <div className="grid grid-cols-1 gap-3">
                                <div className="flex justify-between items-center p-2 bg-white rounded">
                                  <span className="font-medium">Titulaire:</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm">{bankingInfo.usd.accountName}</span>
                                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard(bankingInfo.usd.accountName)}>
                                      <Copy className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white rounded">
                                  <span className="font-medium">N° Compte:</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm">{bankingInfo.usd.accountNumber}</span>
                                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard(bankingInfo.usd.accountNumber)}>
                                      <Copy className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white rounded">
                                  <span className="font-medium">SWIFT:</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm">{bankingInfo.usd.swiftCode}</span>
                                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard(bankingInfo.usd.swiftCode)}>
                                      <Copy className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-3 border-t border-feld-green/20">
                                <p className="text-sm text-muted-foreground mb-2"><strong>Correspondant International:</strong></p>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span>Banque:</span>
                                    <span>{bankingInfo.usd.correspondent.name}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>SWIFT:</span>
                                    <span>{bankingInfo.usd.correspondent.swift}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>N° Compte:</span>
                                    <span>{bankingInfo.usd.correspondent.accountNumber}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="eur" className="mt-4">
                          <Card className="p-4 bg-feld-purple/5 border-feld-purple/20">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg text-feld-purple">Compte EUR - Access Bank</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <div className="pt-3">
                                <p className="text-sm text-muted-foreground mb-2"><strong>Correspondant International:</strong></p>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm p-2 bg-white rounded">
                                    <span>Banque:</span>
                                    <span>{bankingInfo.eur.correspondent.name}</span>
                                  </div>
                                  <div className="flex justify-between items-center text-sm p-2 bg-white rounded">
                                    <span>SWIFT:</span>
                                    <div className="flex items-center gap-2">
                                      <span>{bankingInfo.eur.correspondent.swift}</span>
                                      <Button size="sm" variant="ghost" onClick={() => copyToClipboard(bankingInfo.eur.correspondent.swift)}>
                                        <Copy className="w-3 h-3" />
                                      </Button>
                                    </div>
                                  </div>
                                  <div className="flex justify-between items-center text-sm p-2 bg-white rounded">
                                    <span>IBAN:</span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs">{bankingInfo.eur.correspondent.iban}</span>
                                      <Button size="sm" variant="ghost" onClick={() => copyToClipboard(bankingInfo.eur.correspondent.iban || "")}>
                                        <Copy className="w-3 h-3" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="cdf" className="mt-4">
                          <Card className="p-4 bg-orange-50 border-orange-200">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg text-orange-700">Compte CDF - Banque Centrale</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm p-2 bg-white rounded">
                                  <span>Banque:</span>
                                  <span>{bankingInfo.cdf.correspondent.name}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm p-2 bg-white rounded">
                                  <span>SWIFT:</span>
                                  <div className="flex items-center gap-2">
                                    <span>{bankingInfo.cdf.correspondent.swift}</span>
                                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard(bankingInfo.cdf.correspondent.swift)}>
                                      <Copy className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center text-sm p-2 bg-white rounded">
                                  <span>N° Compte:</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs">{bankingInfo.cdf.correspondent.accountNumber}</span>
                                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard(bankingInfo.cdf.correspondent.accountNumber)}>
                                      <Copy className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>

                    <TabsContent value="mobile" className="mt-6">
                      <div className="space-y-4">
                        {mobileMoneyNumbers.map((mobile, index) => (
                          <Card key={index} className="p-4 bg-gradient-to-r from-feld-green/5 to-feld-purple/5">
                            <CardContent className="flex justify-between items-center p-0">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-feld-green/10 rounded-lg flex items-center justify-center">
                                  <Smartphone className="w-5 h-5 text-feld-green" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-primary">{mobile.operator}</h4>
                                  <p className="text-lg font-mono">{mobile.number}</p>
                                </div>
                              </div>
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="border-feld-green text-feld-green hover:bg-feld-green hover:text-white"
                                onClick={() => copyToClipboard(mobile.number)}
                              >
                                <Copy className="w-4 h-4 mr-2" />
                                Copier
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800">
                          <strong>Instructions:</strong> Envoyez votre don via Mobile Money en utilisant l'un des numéros ci-dessus. 
                          N'oubliez pas de nous envoyer un SMS de confirmation avec votre nom et le montant du don.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
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
                    Pour les dons de plus de $1000 USD ou les partenariats, contactez-nous directement
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
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-feld-green rounded-full"></div>
                      <span>WhatsApp: +243 997 713 286</span>
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

              {/* Security Notice */}
              <Card className="p-4 bg-yellow-50 border-yellow-200">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-yellow-800 text-xs font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Sécurité des transactions</h4>
                      <p className="text-sm text-yellow-700">
                        Vérifiez toujours les informations bancaires avant d'effectuer un virement. 
                        FELD ASBL ne demande jamais de coordonnées bancaires par email ou téléphone.
                      </p>
                    </div>
                  </div>
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