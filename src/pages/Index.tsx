import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Collins Refrigeração | Instalação e Manutenção de Ar-Condicionado em SP</title>
        <meta
          name="description"
          content="Especialistas em instalação, manutenção e conserto de ar-condicionado em São Paulo. Atendimento residencial e comercial. Orçamento grátis!"
        />
        <meta name="keywords" content="ar-condicionado, refrigeração, instalação, manutenção, conserto, São Paulo, climatização" />
        <meta property="og:title" content="Collins Refrigeração | Soluções em Climatização" />
        <meta property="og:description" content="Especialistas em instalação, manutenção e conserto de ar-condicionado. Atendimento 24h. Orçamento grátis!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://collinsrefrigeracao.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <QuoteForm />
          <Location />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
