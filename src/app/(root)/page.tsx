import { ProjectsSection, CertificatesSection, AboutSection, SkillsSection, DashboardSection, KabanSection, HeroSection } from "./_components";

export default function HomePage() {
  return (
    <main className="space-y-20 py-20">
      <HeroSection />
      <KabanSection />
      <AboutSection />
      <SkillsSection />
      <DashboardSection />
      {/* <CertificatesSection /> */}
      <ProjectsSection />
    </main>
  );
}
