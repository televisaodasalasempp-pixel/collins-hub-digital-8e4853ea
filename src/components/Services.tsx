import { Snowflake, Wrench, Wind, ThermometerSnowflake, Settings, Zap } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "Instalação de Ar-Condicionado",
    description: "Instalação profissional de todas as marcas e modelos. Split, multi-split, cassete e mais.",
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Limpeza e revisão completa para garantir o melhor desempenho e economia de energia.",
  },
  {
    icon: Settings,
    title: "Reparo e Conserto",
    description: "Diagnóstico preciso e reparo rápido. Resolvemos qualquer problema do seu aparelho.",
  },
  {
    icon: Wind,
    title: "Higienização",
    description: "Limpeza profunda e sanitização para ar mais puro e saudável na sua casa ou empresa.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Câmaras Frigoríficas",
    description: "Instalação e manutenção de câmaras frias para comércios e indústrias.",
  },
  {
    icon: Zap,
    title: "Atendimento de Emergência",
    description: "Problemas urgentes? Contamos com equipe disponível para atendimentos emergenciais.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluções Completas em{" "}
            <span className="gradient-text">Climatização</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos serviços de alta qualidade para manter seu ambiente sempre confortável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-gradient rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(211_100%_50%/0.15)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Saiba mais</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
