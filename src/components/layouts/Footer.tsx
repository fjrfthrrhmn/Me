import { Container } from '../ui/main';
import { Separator } from '../ui/separator';
import Typography from '../ui/typography';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      {/* Card Service */}

      <Separator />

      <footer className="py-12">
        <Typography.Text> © {year} Jeysen. All rights reserved.</Typography.Text>
      </footer>
    </Container>
  );
};

export default Footer;
