'use client';
import { NumberTicker } from '@/components/fragments/NumberTicker';
import { Avatar } from '@/components/ui/avatar';
import { Github } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { ResGithubProfile } from '@/services/types/github';
import { CardCustom } from '@/components/fragments/CardCustom';
import Typography from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';
import { shimmer } from '@/lib/utils';

type GithubProfileProps = Pick<ResGithubProfile, 'avatar_url' | 'login' | 'html_url' | 'name' | 'public_repos' | 'location'>;

const GithubProfile = ({ data, loading }: { data?: GithubProfileProps; loading: boolean }) => {
  if (loading || !data) return <Loader />;

  const { html_url, avatar_url, name, public_repos, location, login } = data;
  const toBase64 = (str: string) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str));

  return (
    <div className={`h-max col-span-2 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 lg:grid-rows-2 lg:grid-cols-1 gap-2`}>
      <CardCustom className="p-2 rounded-2xl flex items-center gap-4">
        <Avatar size="size-20" rounded="rounded-2xl">
          <Image
            src={avatar_url}
            alt="avatar"
            width={100}
            height={100}
            className="h-full w-full bg-cover bg-center"
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            loading="lazy"
            quality={100}
            unoptimized
          />
        </Avatar>
        <div className="flex flex-col">
          <Typography.Title variant="6/black">{name}</Typography.Title>
          <Typography.Text variant="xs/normal">{location}</Typography.Text>
        </div>
      </CardCustom>

      <div className="grid grid-cols-2 gap-2">
        <CardCustom className=" flex flex-col items-center justify-center gap-1">
          <Typography.Text variant="xs/normal">Repository</Typography.Text>
          <NumberTicker value={public_repos} className="font-mono text-3xl font-bold" />
        </CardCustom>

        <div className="group rounded-2xl shadow bg-radial from-foreground to-foreground/70 text-background">
          <Link
            href={html_url || '#'}
            target="_blank"
            className="flex flex-col items-center justify-center text-center w-full h-full gap-1"
          >
            <Github size={28} className="transition-all duration-500 group-hover:translate-y-[-4px]" />

            <Typography.Text
              variant="sm/semibold"
              className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100 font-mono text-background"
            >
              @{login}
            </Typography.Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GithubProfile;

const Loader = () => (
  <div className="grid grid-rows-2 gap-2 h-max col-span-2">
    <Skeleton className=" p-2 sm:p-4 flex gap-2 items-center w-full">
      <div className="rounded-2xl w-16 h-16 bg-background" />
      <div className="col-span-3 flex flex-col gap-2">
        <div className="rounded-2xl w-36 h-4 bg-background" />
        <div className="rounded-2xl w-24 h-4 bg-background" />
      </div>
    </Skeleton>

    <div className="grid grid-cols-2 gap-2">
      <Skeleton />
      <Skeleton />
    </div>
  </div>
);
