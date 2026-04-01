import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import NotFoundClient from './NotFoundClient';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '404 - NextSaaS',
};

const NotFound = () => {
  return <NotFoundClient />;
};

export default NotFound;
