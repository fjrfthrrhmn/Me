import { FEATURES } from '@/common/constants/kanban';
import { KanbanGrid, KanbanCard } from '@/components/ui/bento-grid';
import { Container } from '@/components/ui/main';
import { Separator } from '@/components/ui/separator';
import { Title } from '@/components/ui/title';
import { KanbanSquare } from 'lucide-react';

const Kanban = () => {
  return (
    <Container className="space-y-10">
      <Title text="Kanban" desc="Organize your workflow visually and efficiently." icon={KanbanSquare} />

      <Separator />

      <KanbanGrid className="lg:grid-rows-3">
        {FEATURES.map(feature => (
          <KanbanCard key={feature.name} {...feature} />
        ))}
      </KanbanGrid>
    </Container>
  );
};

export default Kanban;
