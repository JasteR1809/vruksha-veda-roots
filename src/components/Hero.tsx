import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToLibrary = () => {
    const librarySection = document.getElementById("library");
    librarySection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 157, 88, 0.1), rgba(255, 255, 255, 0.95)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
          Know your trees —<br />preserve Ayurveda
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Explore the wisdom of nature through Ayurvedic trees, shlokas, and healing knowledge
        </p>
        <Button 
          size="lg"
          onClick={scrollToLibrary}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full smooth-transition shadow-lg hover:shadow-xl hover:scale-105"
        >
          Explore Trees
          <ArrowDown className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
