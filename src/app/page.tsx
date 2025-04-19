import HeroSection from "./componets/hero";
import Header from "./componets/header";
import { AboutSection } from "./componets/about";
import ProjectsSection from "./componets/projectSection";
import ContactForm from "./componets/contact";
import Footer from "./componets/footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#080202]">
    <ScrollProgress/>
    <Header/>
    <div className="container mt-24 mx-auto px-10 py-4">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
      </div>
    <Footer/>
  </main>
  );
}
