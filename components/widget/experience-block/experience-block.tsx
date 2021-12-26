import { useEffect, useState } from 'react';
import { getSanityContent } from '../../../utils/getSanityContent';
import { Loader } from '../../loader/loader';
import ExperienceBlockItem, { ExperienceBlockItemProps } from './experience-block.item';

export default function ExperienceBlock() {
  const [items, setItems] = useState<ExperienceBlockItemProps[]>([]);

  useEffect(() => {
    const fetchAllExperienceContent = async () => {
      const { allExperience } = await getSanityContent({
        query: `
          query AllExperienceContent {
            allExperience(sort: [{ start_date: DESC }]) {
              title
              organization
              description
              start_date
              end_date
            }
          }
        `,
      });

      setItems(allExperience);
    };

    fetchAllExperienceContent();
  }, []);

  return items.length === 0 ? (
    <Loader />
  ) : (
    <ul className="grid gap-2 md:gap-8 -mx-6 list-none p-0">
      {items.map(({ title, organization, description, start_date, end_date }, index) => (
        <ExperienceBlockItem
          key={`${title}-${index}`}
          title={title}
          organization={organization}
          start_date={start_date}
          end_date={end_date}
          description={description}
        />
      ))}
    </ul>
  );
}
