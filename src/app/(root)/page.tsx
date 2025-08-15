import { ProjectsSection, CertificatesSection } from "./_components";

export default function HomePage() {
  return (
    <main className="space-y-20 py-20">
      <CertificatesSection />
      <ProjectsSection />
    </main>
  );
}
