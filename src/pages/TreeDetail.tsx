import { useParams, useNavigate } from "react-router-dom";
import { trees } from "@/data/trees";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Volume2 } from "lucide-react";
import { toast } from "sonner";

const TreeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tree = trees.find(t => t.id === id);

  if (!tree) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Tree not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const playAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(tree.shloka.sanskrit);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
      toast.success("Playing Sanskrit shloka");
    } else {
      toast.error("Speech synthesis not supported in your browser");
    }
  };

  return (
    <div className="min-h-screen nature-gradient">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          onClick={() => navigate("/")} 
          variant="outline" 
          className="mb-8"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Library
        </Button>

        <div className="space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary mb-2">{tree.name}</h1>
            <p className="text-xl italic text-muted-foreground">{tree.botanical}</p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden card-shadow">
            <img 
              src={tree.image} 
              alt={tree.name}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* About Section */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">About the Tree</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed text-lg">{tree.about}</p>
            </CardContent>
          </Card>

          {/* Medicinal Uses */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">Medicinal Uses</CardTitle>
              <CardDescription>Traditional Ayurvedic applications and health benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tree.medicinalUses.map((use, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground leading-relaxed">{use}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Sanskrit Shloka */}
          <Card className="card-shadow bg-gradient-to-br from-secondary/20 to-background">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">Sanskrit Shloka</CardTitle>
              <CardDescription>Ancient wisdom about this sacred tree</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-background/50 p-6 rounded-lg">
                <p className="text-2xl font-serif text-center text-primary mb-4 leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                  {tree.shloka.sanskrit}
                </p>
                <p className="text-lg text-center text-muted-foreground italic mb-2">
                  {tree.shloka.transliteration}
                </p>
              </div>
              
              <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                <p className="text-lg font-medium text-foreground">
                  <span className="text-accent font-bold">Meaning: </span>
                  {tree.shloka.meaning}
                </p>
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={playAudio}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full smooth-transition"
                >
                  <Volume2 className="mr-2 w-5 h-5" />
                  Play Audio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TreeDetail;
