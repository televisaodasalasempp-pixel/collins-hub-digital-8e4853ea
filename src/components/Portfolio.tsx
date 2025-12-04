import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const portfolioItems = [
  {
    title: "Instalação Comercial",
    description: "Sistema multi-split para escritório",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
  },
  {
    title: "Manutenção Preventiva",
    description: "Limpeza e higienização completa",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
  },
  {
    title: "Instalação Residencial",
    description: "Split inverter 12.000 BTUs",
    image: "https://images.unsplash.com/photo-1631545806609-35d4ae440431?w=400&h=400&fit=crop",
  },
  {
    title: "Câmara Frigorífica",
    description: "Instalação para supermercado",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  },
  {
    title: "Projeto Comercial",
    description: "Climatização de restaurante",
    image: "https://images.unsplash.com/photo-1504735217152-b768bcab5ebc?w=400&h=400&fit=crop",
  },
  {
    title: "Atendimento Emergencial",
    description: "Reparo 24h em clínica",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nossos{" "}
            <span className="gradient-text">Trabalhos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Confira alguns dos serviços realizados pela nossa equipe.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                <h3 className="font-bold text-foreground text-sm md:text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {item.description}
                </p>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Veja mais trabalhos no nosso Instagram
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://instagram.com", "_blank")}
          >
            <Instagram className="w-5 h-5" />
            Siga-nos no Instagram
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
