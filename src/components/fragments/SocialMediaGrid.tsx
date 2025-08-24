import { SiGmail as GmailIcon } from 'react-icons/si';
import { BsGithub as GithubIcon, BsDiscord as DiscordIcon, BsInstagram as InstagramIcon, BsLinkedin as LinkedinIcon, BsTiktok as TiktokIcon } from 'react-icons/bs';
import Typography from '../ui/typography';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const iconSize = 32;
const backgroundIconSize = 275;

export const SOCIAL_MEDIA = [
  {
    title: 'Stay in Touch',
    description: 'Reach out via email for any inquiries or collaborations.',
    name: 'gmail',
    href: 'mailto:satriaabaharii@gmail.com',
    icon: <GmailIcon size={iconSize} />,
    backgroundIcon: <GmailIcon size={backgroundIconSize} />,
    textColor: 'text-red-300',
    backgroundColor: 'bg-red-300',
    borderColor: 'border-red-300',
    backgroundGradientColor: 'bg-gradient-to-b from-red-700 to-red-950',
    colSpan: 'md:col-span-2',
    isShow: true,
  },
  {
    title: 'Follow My Journey',
    description: 'Stay updated with my latest posts and stories on Instagram.',
    name: 'instagram',
    href: 'https://www.instagram.com/satriabaharii_/',
    icon: <InstagramIcon size={iconSize} />,
    backgroundIcon: <InstagramIcon size={backgroundIconSize} />,
    textColor: 'text-purple-200',
    backgroundColor: 'bg-purple-200',
    borderColor: 'border-purple-200',
    backgroundGradientColor: 'bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500',
    isShow: true,
  },
  {
    title: "Let's Connect",
    description: 'Connect for collaboration or explore my professional experience.',
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/satria-bahari/',
    icon: <LinkedinIcon size={iconSize} />,
    backgroundIcon: <LinkedinIcon size={backgroundIconSize} />,
    textColor: 'text-sky-300',
    backgroundColor: 'bg-sky-300',
    borderColor: 'border-sky-300',
    backgroundGradientColor: 'bg-gradient-to-b from-sky-700 to-sky-950',
    isShow: true,
  },
  {
    title: 'Join the Fun',
    description: 'Follow me on TikTok for entertaining and engaging content.',
    name: 'tiktok',
    href: 'https://www.tiktok.com/@satriaabaharii/',
    icon: <TiktokIcon size={iconSize} />,
    backgroundIcon: <TiktokIcon size={backgroundIconSize} />,
    textColor: 'text-neutral-400',
    backgroundColor: 'bg-neutral-400',
    borderColor: 'border-neutral-400',
    backgroundGradientColor: 'bg-gradient-to-b from-neutral-700 to-neutral-950',
    isShow: true,
  },
  {
    title: 'Explore the Code',
    description: 'Explore the source code for all my projects on GitHub.',
    name: 'github',
    href: 'https://github.com/satriabahari',
    icon: <GithubIcon size={iconSize} />,
    backgroundIcon: <GithubIcon size={backgroundIconSize} />,
    textColor: 'text-slate-400',
    backgroundColor: 'bg-slate-400',
    borderColor: 'border-slate-400',
    backgroundGradientColor: 'bg-gradient-to-b from-slate-700 to-slate-950',
    isShow: true,
  },
  {
    title: 'Join the Community',
    description: 'Chat and hangout with me on Discord.',
    name: 'discord',
    href: 'https://discord.gg/your-server-code',
    icon: <DiscordIcon size={iconSize} />,
    backgroundIcon: <DiscordIcon size={backgroundIconSize} />,
    textColor: 'text-indigo-200',
    backgroundColor: 'bg-indigo-200',
    borderColor: 'border-indigo-200',
    backgroundGradientColor: 'bg-gradient-to-b from-indigo-700 to-indigo-950',
    isShow: true,
  },
];

export const SocialAccountsGrid = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {SOCIAL_MEDIA.filter(item => item.isShow).map(
        ({ title, description, name, href, icon, backgroundIcon, backgroundGradientColor }) => (
          <div key={name} className={`${backgroundGradientColor} relative overflow-hidden p-4 rounded-2xl`}>
            {/* big background icon */}
            <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 opacity-10 z-0 text-zinc-100/70">{backgroundIcon}</div>

            {/* content */}
            <div className="z-10 relative flex flex-col justify-between gap-2 h-full *:text-white">
              <Typography.Text variant="md/black">{title}</Typography.Text>
              <Typography.Text variant="xs/normal">{description}</Typography.Text>

              <div className="flex justify-between items-center mt-2">
                <Button asChild size="sm" variant="secondary" className="bg-zinc-100/80 hover:bg-zinc-100/60">
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Typography.Text variant="xs/normal" className="flex items-center gap-1 font-mono text-zinc-900">
                      Go to {name} <ArrowRight size={14} />
                    </Typography.Text>
                  </Link>
                </Button>

                <div className={`p-2 rounded-2xl border-4 border-zinc-100/35`}>{icon}</div>
              </div>
            </div>
          </div>
        )
      )}
    </main>
  );
};
