import { STACKS_BUILT } from '@/common/constants/hero';
import { LinkPreview } from '@/components/fragments/LinkPreview';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/main';
import { ArrowRight, Sparkles } from 'lucide-react';
import Typography from '@/components/ui/typography';

const Hero = () => {
  return (
    <Container>
      <div className="w-full h-dvh lg:h-[400px] md:max-w-2xl mx-auto flex flex-col items-center justify-center gap-2 text-center">
        <Typography.Title variant="1/black" className="leading-tight">
          I Build Websites that <br />
          Look Good and <span className="text-teal-400 bg-teal-400/10 text-shadow-primary px-2 ">Feel Smooth</span>
        </Typography.Title>

        <Typography.Text className="w-full md:max-w-lg">
          Creating interfaces that don’t just work—but feel clean, responsive, and smooth. From wireframes to prod, I bring extra polish to
          every detail.
        </Typography.Text>

        <div className="flex flex-col sm:flex-row items-center gap-2">
          <Button>
            <Sparkles />
            See Portfolio
          </Button>
          <Button variant="secondary">
            Read Me More
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="mt-32 flex-wrap flex items-center justify-center gap-2">
        {STACKS_BUILT.map(({ url, icon: Icon }, index) => (
          <LinkPreview key={index} url={url} className="group p-2 sm:p-4 rounded-2xl border bg-card select-none shadow-md transition">
            <Icon size={24} className='opacity-15 group-hover:opacity-100 transition duration-300' />
          </LinkPreview>
        ))}
      </div>
    </Container>
  );
};

export default Hero;
