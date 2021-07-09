import { FC } from 'react';
import useFirestore from 'src/hooks/useFirestore';
import { Project } from './Project';
import '../styles/Works.scss';

export const Works: FC = () => {
  const { docs } = useFirestore('projects');
  return (
    <section className="works">
      <h2 className="works__header">Some Things I’ve Built</h2>
      {docs.map((p, idx) => (
        <Project project={p} key={p.id} />
      ))}
    </section>
  );
};
