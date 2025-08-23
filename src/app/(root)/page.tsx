import { ProjectsSection, CertificatesSection, AboutSection, SkillsSection, DashboardSection, KanbanSection, HeroSection } from "./_components";

export default function HomePage() {
  return (
    <main className="space-y-32 py-20">
      <HeroSection />
      <KanbanSection />
      <AboutSection />
      <SkillsSection />
      <DashboardSection />
      {/* <CertificatesSection /> */}
      <ProjectsSection />
    </main>
  );
}
