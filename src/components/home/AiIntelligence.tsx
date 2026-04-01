import { IIntelligence } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import AiIntelligenceList from './AiIntelligenceList';

const AiIntelligence = () => {
    const intelligenceData = getMarkDownData<IIntelligence>('src/data/intelligences').slice(0, 6);
    return <AiIntelligenceList intelligenceData={intelligenceData} />;
};

export default AiIntelligence;
