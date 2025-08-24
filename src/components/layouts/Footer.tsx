import { CardService } from '../fragments/CardService';
import { SocialAccountsGrid } from '../fragments/SocialMediaGrid';
import { Container } from '../ui/main';
import { Separator } from '../ui/separator';
import Typography from '../ui/typography';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container className="space-y-10">
      <div className="flex flex-col gap-2">
        <CardService />
        <SocialAccountsGrid />
      </div>

      <Separator />

      <footer>
        <Typography.Text variant="sm/normal"> © {year} Jeysen. All rights reserved.</Typography.Text>
      </footer>
    </Container>
  );
};

export default Footer;
