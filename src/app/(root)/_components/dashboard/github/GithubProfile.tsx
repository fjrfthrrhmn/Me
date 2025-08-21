'use client';
import { NumberTicker } from '@/components/fragments/NumberTicker';
import { Avatar } from '@/components/ui/avatar';
import { Github } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Typography from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';
import { ResGithubProfile } from '@/services/types/github';

type GithubProfileProps = Pick<ResGithubProfile, 'avatar_url' | 'login' | 'html_url' | 'name' | 'public_repos' | 'location'>;

export const GithubProfile = ({ data, loading }: { data?: GithubProfileProps; loading: boolean }) => {
  if (loading || !data) {
    return (
      <div className="grid grid-rows-2 gap-2 h-44 col-span-2">
        <div className="border rounded-2xl p-2 sm:p-4 flex gap-2 items-center w-full">
          <Skeleton className="w-16 h-16" />
          <div className="col-span-3 flex flex-col gap-2">
            <Skeleton className="w-36 h-4" />
            <Skeleton className="w-24 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  }

  const { html_url, avatar_url, name, public_repos, location, login } = data;

  return (
    <div className={`h-44 col-span-2 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 lg:grid-rows-2 lg:grid-cols-1 gap-2`}>
      <div className="p-2 rounded-2xl shadow border border-foreground/10 flex items-center gap-2">
        <Avatar size="size-16" rounded="rounded-2xl">
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
          <Typography.Title variant="6/black">{name}</Typography.Title>
          <Typography.Text variant="xs/normal">{location}</Typography.Text>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-4 rounded-2xl shadow border border-foreground/10 flex flex-col items-center justify-center gap-1">
          <Typography.Text variant="xs/normal">Repository</Typography.Text>
          <NumberTicker value={public_repos} className="font-mono text-3xl font-bold" />
        </div>

        <div className="group rounded-2xl shadow border border-foreground/10 bg-foreground text-background">
          <Link href={html_url || '#'} className="flex flex-col items-center justify-center text-center w-full h-full gap-1">
            <Github size={28} className="transition-all duration-500 group-hover:translate-y-[-4px]" />

            <Typography.Text
              variant="sm/semibold"
              className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100 font-mono"
            >
              @{login}
            </Typography.Text>
          </Link>
        </div>
      </div>
    </div>
  );
};
