import HeroSection from "./components/hero";
import Header from "./components/header";
import { AboutSection } from  "./components/about";
import ProjectsSection from "./components/projectSection";
import ContactForm from "./components/contact";
import Footer from "./components/footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import SkillsGrid from "./components/skillCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#080202] bg-black/95">
    <ScrollProgress/>
    <Header/>
    <div className="container mt-24 mx-auto px-10 py-4">
      <HeroSection />
      <AboutSection />
      <SkillsGrid/>
      <ProjectsSection />
      <ContactForm />
      </div>
    <Footer/>
  </main>
  );
}
