import { IOffer } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import OfferList from './OfferList';

const WhatWeOffer = () => {
    const offerData = getMarkDownData<IOffer>('src/data/intelligences', false, 'id').slice(0, 6);
    return <OfferList offerData={offerData} />;
};

export default WhatWeOffer;
