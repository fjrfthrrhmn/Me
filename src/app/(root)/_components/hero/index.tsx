'use client';
import { BUTTONS, STACKS_BUILT } from '@/common/constants/hero';
import { LinkPreview } from '@/components/fragments/LinkPreview';
import { Container } from '@/components/ui/main';
import { motion } from 'motion/react';
import { ButtonCustom } from '@/components/fragments/ButtonCustom';
import Typography from '@/components/ui/typography';
import { ANIMATES, TRANSITIONS } from '@/motion';

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

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {BUTTONS.map((item, index) => {
            return (
              <ButtonCustom key={index} url={item.url} variant={item.variant as any} icon={item.icon} type={item.type as any}>
                {item.text}
              </ButtonCustom>
            );
          })}
        </div>
      </div>

      <div className="mt-32 flex-wrap flex items-center justify-center gap-2">
        {STACKS_BUILT.map(({ url, icon: Icon }, index) => (
          <motion.div
            key={index}
            className="group p-2 rounded-2xl border bg-card select-none shadow-md transition"
            variants={ANIMATES.blurDown}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ...TRANSITIONS.springSmooth,
              delay: index * 0.15,
            }}
          >
            <LinkPreview url={url}>
              <Icon size={28} className="opacity-25 group-hover:opacity-100 transition duration-300" />
            </LinkPreview>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Hero;
