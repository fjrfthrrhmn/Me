import { CardService } from '../fragments/CardService';
import { Container } from '../ui/main';
import { Separator } from '../ui/separator';
import Typography from '../ui/typography';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container className='space-y-10'>
      <CardService />

      <Separator />

      <footer className="py-12">
        <Typography.Text variant='sm/normal'> © {year} Jeysen. All rights reserved.</Typography.Text>
      </footer>
    </Container>
  );
};

export default Footer;
