import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Typography from '@/components/ui/typography';

interface CertificateItem {
  id: number;
  name: string;
  descShort: string;
  date: Date;
  issuer?: string;
  credentialUrl?: string;
  imageUrl: string;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const CertificatesList = async ({ data }: { data: CertificateItem []}) => {
  await delay(2000);

  if (!data || data.length === 0) {
    return <div className="py-12 text-center">No certificates found</div>;
  }

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-2xl">
      <div className="grid grid-flow-col auto-cols-[minmax(200px,1fr)] sm:auto-cols-[minmax(300px,1fr)] lg:auto-cols-[minmax(350px,1fr)] grid-rows-2 gap-4 p-4 mb-4 rounded-2xl">
        {data.map(item => (
          <div
            key={item.id}
            className="group relative w-full h-32 sm:h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={400}
              height={256}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,..."
              quality={90}
              unoptimized
            />
            <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity *:text-background">
              <div className="mb-2">
                <Typography.Text variant="xs/normal">{item.issuer || 'unknown'}</Typography.Text>
                <Typography.Title variant="5/black">{item.name}</Typography.Title>
              </div>
              {/* <Typography.Text>
                  {new Date(item.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </Typography.Text> */}

              {/* for item description */}
              <Typography.Text variant="xs/normal">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ut dolores, ad illo id excepturi.
              </Typography.Text>
            </div>
          </div>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CertificatesList;
