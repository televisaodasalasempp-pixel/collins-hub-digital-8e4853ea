import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente Residencial",
    content: "Excelente atendimento! Instalaram meu ar-condicionado no mesmo dia. Profissionais muito educados e trabalho impecável.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Empresário",
    content: "Contratei para manutenção da minha empresa e fiquei muito satisfeito. Preço justo e serviço de qualidade.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Cliente Residencial",
    content: "Resolveram o problema do meu ar-condicionado rapidamente. Recomendo muito! Atendimento nota 10.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Gerente de Restaurante",
    content: "Manutenção preventiva feita com muito profissionalismo. Os equipamentos funcionam perfeitamente desde então.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Cliente Residencial",
    content: "Atendimento emergencial no domingo! Chegaram rápido e resolveram o problema. Muito obrigada!",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "Proprietário de Loja",
    content: "Já uso os serviços há 3 anos. Sempre pontuais, preços honestos e trabalho de primeira qualidade.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que nossos{" "}
            <span className="gradient-text">Clientes</span>{" "}
            dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group card-gradient rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
