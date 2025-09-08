import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AIAssistant from "@/components/AIAssistant";
import HowItWorks from "@/components/HowItWorks";
import Wellness from "@/components/Wellness";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <AIAssistant />
        <Wellness />
      </main>
      <Footer />
    </div>
  );
}
