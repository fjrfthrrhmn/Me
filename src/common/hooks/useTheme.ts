import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark' | 'system';

export const handleChangeTheme = async (currentTheme: string | undefined, setTheme: (theme: Theme) => void, buttonRef: HTMLElement) => {
  if (!buttonRef.getBoundingClientRect() && !currentTheme) return;

  await document.startViewTransition(() => {
    flushSync(() => {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }).ready;

  const { top, left, width, height } = buttonRef.getBoundingClientRect();
  const y = top + height / 2;
  const x = left + width / 2;

  const right = window.innerWidth - left;
  const bottom = window.innerHeight - top;
  const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

  document.documentElement.animate(
    {
      clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRad}px at ${x}px ${y}px)`],
    },
    {
      duration: 700,
      easing: 'ease-in-out',
      pseudoElement: '::view-transition-new(root)',
    }
  );
};
