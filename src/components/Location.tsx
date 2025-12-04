import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua das Flores, 123 - Centro",
      subContent: "São Paulo - SP",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99999-9999",
      subContent: "(11) 3333-3333",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@collinsrefrigeracao.com.br",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 8h às 18h",
      subContent: "Sáb: 8h às 12h",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Onde{" "}
            <span className="gradient-text">Estamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Atendemos em toda a região metropolitana. Venha nos visitar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground">{info.content}</p>
                {info.subContent && (
                  <p className="text-muted-foreground">{info.subContent}</p>
                )}
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/50 h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975836695366!2d-46.65529052378849!3d-23.56186256177045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sPra%C3%A7a%20da%20S%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Collins Refrigeração"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
