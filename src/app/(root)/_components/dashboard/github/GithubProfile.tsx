import { NumberTicker } from '@/components/fragments/NumberTicker';
import { Avatar } from '@/components/ui/avatar';
import { Github } from 'lucide-react';
import Typography from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

type GithubProfileProps = Pick<ResGithubProfile, 'avatar_url' | 'html_url' | 'name' | 'public_repos' | 'location'>;

export const GithubProfile = ({ data: { html_url, avatar_url, name, public_repos, location } }: { data: GithubProfileProps }) => {
  return (
    <div className={`grid grid-rows-2 gap-2`}>
      <div className="p-2 rounded-2xl shadow border border-foreground/10 flex items-center gap-2">
        <Avatar size="size-20" rounded="rounded-2xl">
          <Image
            src={avatar_url}
            alt="avatar"
            width={100}
            height={100}
            className="h-full w-full bg-cover bg-center"
            loading="lazy"
            quality={100}
            unoptimized
          />
        </Avatar>
        <div className="flex flex-col">
          <Typography.Title variant="5/black">{name}</Typography.Title>
          <Typography.Text variant="sm/normal">{location}</Typography.Text>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-4 rounded-2xl shadow border border-foreground/10 flex flex-col items-center justify-center gap-1">
          <Typography.Text variant="sm/normal">Repository</Typography.Text>
          <NumberTicker value={public_repos} className="font-mono text-3xl font-bold" />
        </div>

        <Link
          href={html_url || '#'}
          className="rounded-2xl shadow border border-foreground/10 bg-foreground text-background flex items-center justify-center text-center"
        >
          <Github size={28} />
        </Link>
      </div>
    </div>
  );
};
