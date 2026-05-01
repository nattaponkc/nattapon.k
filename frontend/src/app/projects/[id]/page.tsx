import { notFound } from 'next/navigation';
import ClientProjectDetail from './ClientProjectDetail';
import { getProjectData } from './projectsData';

export { generateStaticParams } from './projectsData';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id);
  
  if (!project) {
    return notFound();
  }

  return <ClientProjectDetail project={project} />;
}

