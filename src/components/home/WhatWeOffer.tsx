import { IOffer } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import OfferList from './OfferList';

const WhatWeOffer = () => {
    const offerData = getMarkDownData<IOffer>('src/data/offers', false, 'id').slice(0, 6);
    return <section id="features" className="bg-white pt-20 pb-20 md:pb-16 lg:pb-[100px] xl:pt-[120px] xl:pb-[140px]"><OfferList offerData={offerData} /></section>;
};

export default WhatWeOffer;
