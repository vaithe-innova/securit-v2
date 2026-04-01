import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import ApproachesList from './ApproachesList';

type ApproachItem = IService & { [key: string]: unknown };

const Approaches = () => {
  const approachesData: ApproachItem[] = getMarkDownData<ApproachItem>('src/data/approach', false, 'slug');

  return <ApproachesList approachesData={approachesData} />;
};

Approaches.displayName = 'Approaches';
export default Approaches;
