import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import UseCasesClient from './UseCasesClient';

type UseCaseItem = IService & { [key: string]: unknown };

const UseCases = () => {
  const useCasesData: UseCaseItem[] = getMarkDownData<UseCaseItem>('src/data/approach', false, 'slug');

  return <UseCasesClient useCasesData={useCasesData} />;
};

UseCases.displayName = 'UseCases';
export default UseCases;
