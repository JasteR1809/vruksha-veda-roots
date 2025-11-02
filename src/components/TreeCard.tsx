import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { Tree } from "@/data/trees";

interface TreeCardProps {
  tree: Tree;
}

const TreeCard = ({ tree }: TreeCardProps) => {
  const openTreeDetail = () => {
    const url = `/tree/${tree.id}`;
    window.open(url, "_blank");
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl smooth-transition hover:scale-105 card-shadow group">
      <div className="aspect-square overflow-hidden">
        <img 
          src={tree.image} 
          alt={tree.name}
          className="w-full h-full object-cover smooth-transition group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{tree.name}</CardTitle>
        <CardDescription className="text-sm italic text-muted-foreground">
          {tree.botanical}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground line-clamp-2">{tree.description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={openTreeDetail}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full smooth-transition"
        >
          Open
          <ExternalLink className="ml-2 w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TreeCard;
