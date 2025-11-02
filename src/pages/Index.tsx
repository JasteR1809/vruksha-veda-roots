import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TreeLibrary from "@/components/TreeLibrary";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TreeLibrary />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
