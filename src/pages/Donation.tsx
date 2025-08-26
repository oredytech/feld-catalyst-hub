import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Phone, CreditCard, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donation = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copié !",
      description: "Les informations ont été copiées dans le presse-papiers.",
    });
  };

  const bankingInfo = {
    accountName: "FEMMES ENGAGEES POUR LE LEADERSHIP ET LE DEVELOPPEMENT",
    accountNumber: "30014614301",
    normalizedAccount: "00021003003001461430110",
    accountType: "CURRENT ACCOUNT CORPORATES UAT4",
    currency: "Dollar AMÉRICAIN (USD)",
    bankCode: "00021",
    swift: "ABNGCDKI"
  };

  const correspondents = [
    {
      name: "Banque Centrale du Congo (BCC)",
      account: "Access Bank (RD Congo) SA",
      swift: "BCCGSKS",
      currency: "Franc Congolais (CDF)",
      accountNumber: "00010100000000000001303"
    },
    {
      name: "CITI NEW YORK",
      account: "Access Bank (RD Congo) SA",
      swift: "CITIUS33",
      currency: "USD",
      accountNumber: "36253309",
      iban: "36253309"
    },
    {
      name: "CITI BANK LONDRES",
      account: "Access Bank (RD Congo) SA",
      swift: "CITIGB2L",
      currency: "EURO",
      accountNumber: "11296337",
      iban: "GB33CITI18500811296337"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Faire un Don
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Votre générosité nous permet de continuer notre mission de leadership et de développement 
              au service des communautés de la République Démocratique du Congo.
            </p>
          </div>

          {/* Banking Information */}
          <div className="grid gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Informations Bancaires Principales
                </CardTitle>
                <CardDescription>
                  Access Bank (RD Congo) SA
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Nom du compte</label>
                    <div className="flex items-center justify-between bg-muted p-3 rounded-md">
                      <span className="text-sm font-mono">{bankingInfo.accountName}</span>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard(bankingInfo.accountName)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Numéro de compte</label>
                    <div className="flex items-center justify-between bg-muted p-3 rounded-md">
                      <span className="text-sm font-mono">{bankingInfo.accountNumber}</span>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard(bankingInfo.accountNumber)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Compte normalisé</label>
                    <div className="flex items-center justify-between bg-muted p-3 rounded-md">
                      <span className="text-sm font-mono">{bankingInfo.normalizedAccount}</span>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard(bankingInfo.normalizedAccount)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Code SWIFT</label>
                    <div className="flex items-center justify-between bg-muted p-3 rounded-md">
                      <span className="text-sm font-mono">{bankingInfo.swift}</span>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard(bankingInfo.swift)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Type de compte</label>
                    <p className="text-sm bg-muted p-3 rounded-md">{bankingInfo.accountType}</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Monnaie</label>
                    <p className="text-sm bg-muted p-3 rounded-md">{bankingInfo.currency}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Correspondent Banks */}
            <Card>
              <CardHeader>
                <CardTitle>Banques Correspondantes</CardTitle>
                <CardDescription>
                  Informations pour les virements internationaux
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {correspondents.map((correspondent, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <h3 className="font-semibold text-primary">{correspondent.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">Code SWIFT</label>
                        <div className="flex items-center justify-between bg-muted p-2 rounded">
                          <span className="text-sm font-mono">{correspondent.swift}</span>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => copyToClipboard(correspondent.swift)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">Monnaie</label>
                        <p className="text-sm bg-muted p-2 rounded">{correspondent.currency}</p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">Numéro de compte</label>
                        <div className="flex items-center justify-between bg-muted p-2 rounded">
                          <span className="text-sm font-mono">{correspondent.accountNumber}</span>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => copyToClipboard(correspondent.accountNumber)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      {correspondent.iban && (
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-muted-foreground">IBAN</label>
                          <div className="flex items-center justify-between bg-muted p-2 rounded">
                            <span className="text-sm font-mono">{correspondent.iban}</span>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => copyToClipboard(correspondent.iban)}
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Mobile Money */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Mobile Money
                </CardTitle>
                <CardDescription>
                  Options de paiement mobile disponibles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Numéro Mobile Money</p>
                        <p className="text-sm text-muted-foreground">Airtel Money, M-Pesa, Orange Money</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg">+243 995 021 267</span>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard("+243995021267")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Besoin d'aide ?</CardTitle>
              <CardDescription>
                Contactez-nous pour toute question concernant votre don
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+243 995 021 267</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">📧</span>
                  <span className="text-sm">feldrdc1@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donation;