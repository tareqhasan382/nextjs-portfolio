import AboutSection from "@/components/about/AboutSection";
import ContactUs from "@/components/contact/ContactUs";
import Education from "@/components/education/Education";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import ProjectSection from "@/components/project/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 ">
      <HeroSection />
      <AboutSection />
      <Education />
      <ProjectSection />
      <ContactUs />
    </main>
  );
}
