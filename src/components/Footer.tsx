const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          Made by{" "}
          <span className="font-medium text-foreground">Vedang Kulkarni</span>
          {" "}and{" "}
          <span className="font-medium text-foreground">Kritish Bokade</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
