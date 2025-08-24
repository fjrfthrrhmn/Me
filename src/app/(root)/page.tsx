import { CardService } from '@/components/fragments/CardService';
import {
  ProjectsSection,
  CertificatesSection,
  AboutSection,
  SkillsSection,
  DashboardSection,
  KanbanSection,
  HeroSection,
} from './_components';
import Footer from '@/components/layouts/Footer';

export default function HomePage() {
  return (
    <main className="space-y-32 py-20">
      <HeroSection />
      <KanbanSection />
      <AboutSection />
      <SkillsSection />
      <DashboardSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
