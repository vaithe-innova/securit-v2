import ContactInfo from '@/components/contact-page/ContactInfo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Securit - Contact Us || Innova Solutions',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
    </main>
  );
};

export default ContactUs;
