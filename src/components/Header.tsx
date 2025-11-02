import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">VrukshaVeda</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary smooth-transition font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary smooth-transition font-medium">
              About
            </a>
            <a href="#library" className="text-foreground hover:text-primary smooth-transition font-medium">
              Library
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
