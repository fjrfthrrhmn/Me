import { ProjectsSection, AboutSection, SkillsSection, DashboardSection, KanbanSection, HeroSection } from './_components';

export default function HomePage() {
  return (
    <main className="space-y-32 py-16">
      <HeroSection />
      {/* <KanbanSection /> */}
      <AboutSection />
      <SkillsSection />
      <DashboardSection />
      <ProjectsSection />
    </main>
  );
}
