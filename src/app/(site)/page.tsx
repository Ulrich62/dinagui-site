import HeroSlider from "@/components/HeroSlider";
import ExpertiseCards from "@/components/ExpertiseCards";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ExpertiseCards />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <CTASection />
      <TestimonialsSection />
    </main>
  );
}
