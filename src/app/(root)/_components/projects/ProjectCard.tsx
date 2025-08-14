import Typography from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

type ProjectWebsiteCardProps = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export const ProjectWebsiteCard = ({ ...props }: ProjectWebsiteCardProps) => {
  const { id, title, description, imageUrl, liveUrl, repoUrl, techStack } = props;

  return (
    <Link href={'#'} key={id} aria-label={title} className="space-y-6 border bg-card rounded-xl pb-4 shadow">
      <div className="relative group overflow-hidden rounded-t-2xl">
        <Image
          src={imageUrl!}
          alt={title}
          width={400}
          height={200}
          className="bg-cover w-full h-44 rounded-t-2xl group-hover:scale-110 transition duration-300"
          placeholder="empty"
          quality={100}
          priority
          unoptimized
        />
      </div>

      <div className="flex flex-col gap-1 px-4">
        <Typography.Title variant="4/black">{title}</Typography.Title>
        <Typography.Text className="line-clamp-2">{description}</Typography.Text>
      </div>

      <div className="flex gap-0 px-4">
        {techStack.slice(0, 4).map(item => {
          return (
            <div key={item} className="border rounded-sm px-2 py-1 bg-background">
              <Typography.Text variant="sm/normal">{item}</Typography.Text>
            </div>
          );
        })}
      </div>
    </Link>
  );
};

interface ProjectDesignCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectDesignCard = ({ ...props }: ProjectDesignCardProps) => {
  const { id, title, description, imageUrl } = props;

  return (
    <Link href={'#'} key={id} aria-label={title} className="border bg-card rounded-xl shadow">
      <div className="relative group overflow-hidden rounded-2xl">
        <Image
          src={imageUrl!}
          alt={title}
          width={400}
          height={200}
          className="bg-cover w-full h-60 rounded-2xl group-hover:scale-110 transition duration-300"
          placeholder="empty"
          quality={100}
          priority
          unoptimized
        />
      </div>
    </Link>
  );
};
