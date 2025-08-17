import { STACKS_BUILT } from '@/common/constants/hero';
import { LinkPreview } from '@/components/fragments/LinkPreview';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/main';
import Typography from '@/components/ui/typography';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <Container>
      <div className="w-full h-dvh lg:h-[400px] md:max-w-2xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        {/* <BlurFade delay={0.2}>
          <div className="w-max h-max select-none bg-zinc-950 px-4 py-0.5 rounded-2xl">
            <ShinyText text={t('shiny')} />
          </div>
        </BlurFade> */}

        <>
          <Typography.Title variant="1/black" className="leading-tight">
            I Build Websites that <br />
            Look Good and <span className="text-primary bg-primary/20 text-shadow-primary px-2 rounded-2xl">Feel Smooth</span>
          </Typography.Title>
        </>

        <>
          <Typography.Text className="w-full md:max-w-lg">
            Creating interfaces that don’t just work—but feel clean, responsive, and smooth. From wireframes to prod, I bring extra polish
            to every detail.
          </Typography.Text>
        </>

        <div className='flex items-center gap-2'>
          <Button>
            <Sparkles />
            See Portfolio
          </Button>
          <Button variant="outline">
            Read Me More
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="mt-12 flex-wrap flex items-center justify-center gap-1">
        {STACKS_BUILT.map(({ src, alt, url }, index) => (
          <LinkPreview key={index} url={url} className="group p-2 rounded-2xl border bg-white/25 select-none shadow-md transition">
            <Image
              src={src}
              alt={alt}
              width={32}
              height={32}
              className="h-6 w-6 grayscale group-hover:grayscale-0 transition duration-200 select-none"
              loading="lazy"
              decoding="async"
              unoptimized
            />
          </LinkPreview>
        ))}
      </div>
    </Container>
  );
};

export default Hero;
