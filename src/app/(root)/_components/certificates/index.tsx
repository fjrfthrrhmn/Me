'use server';

import { Container } from '@/components/ui/main';
import { Separator } from '@/components/ui/separator';
import { Title } from '@/components/ui/title';
import { IconCertificate } from '@tabler/icons-react';
import { Suspense } from 'react';
import CertificatesList from './CertificatesList';

const Certificates = async () => {
  const res = await fetch('http://localhost:3000/api/certificates', { cache: 'no-store' }); // 1 day
  const data = await res.json();

  return (
    <section>
      <Container className="space-y-10 mb-10">
        <Title text="Hello World" desc="lorem ipsum dolor" icon={IconCertificate} iconSize={32} />
        <Separator />
      </Container>

      <div className="relative">
        {/* Scrollable area */}
        <div className="pl-[calc((100vw-1024px)/2)]">
          <Suspense fallback={<div className="py-12 text-center">Loading certificates...</div>}>
            <CertificatesList data={data.data || []} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
