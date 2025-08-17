import { ProjectsSection, CertificatesSection, AboutSection, SkillsSection } from "./_components";

export default function HomePage() {
  return (
    <main className="space-y-20 py-20">
      <AboutSection />
      <SkillsSection />
      <CertificatesSection />
      <ProjectsSection />
    </main>
  );
}
