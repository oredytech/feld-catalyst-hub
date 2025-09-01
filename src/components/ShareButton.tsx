import { useState } from "react";
import { Share2, Facebook, Twitter, Linkedin, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonProps {
  title: string;
  slug: string;
  excerpt?: string;
}

const ShareButton = ({ title, slug, excerpt }: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const articleUrl = `https://feldrdc.org/actualites/${slug}`;
  const shareText = excerpt ? excerpt.replace(/<[^>]*>/g, '').substring(0, 100) + '...' : title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(articleUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${shareText}\n\nLire l'article complet: ${articleUrl}`)}`
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      toast({
        title: "Lien copié !",
        description: "Le lien de l'article a été copié dans le presse-papiers.",
      });
      setIsOpen(false);
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Impossible de copier le lien.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="border-feld-green text-feld-green hover:bg-feld-green hover:text-white">
          <Share2 className="w-4 h-4 mr-2" />
          Partager
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Partager cet article</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Partagez cet article sur vos réseaux sociaux préférés
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-2 h-12"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
              <span>Facebook</span>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-2 h-12"
            >
              <Twitter className="w-5 h-5 text-sky-500" />
              <span>Twitter</span>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => handleShare('linkedin')}
              className="flex items-center gap-2 h-12"
            >
              <Linkedin className="w-5 h-5 text-blue-700" />
              <span>LinkedIn</span>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => handleShare('email')}
              className="flex items-center gap-2 h-12"
            >
              <Mail className="w-5 h-5 text-gray-600" />
              <span>Email</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <input
              type="text"
              value={articleUrl}
              readOnly
              className="flex-1 bg-transparent text-sm outline-none"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="shrink-0"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareButton;