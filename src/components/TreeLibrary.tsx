import TreeCard from "./TreeCard";
import { trees } from "@/data/trees";

const TreeLibrary = () => {
  return (
    <section id="library" className="py-20 nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ayurvedic Tree Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the healing wisdom of sacred trees used in Ayurveda for centuries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {trees.map((tree) => (
            <TreeCard key={tree.id} tree={tree} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreeLibrary;
