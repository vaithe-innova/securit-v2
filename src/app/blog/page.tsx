import BlogTabContent from '@/components/blog/BlogTabContent';
import BlogTabList from '@/components/blog/BlogTabList';
import { TabProvider } from '@/context/TabContext';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - Mortgage Services || Securit',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      {/* <FeaturedBlog /> */}

      
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        {/* Headings */}
        <div className="mb-3 sm:max-w-[70%] mx-auto space-y-4 text-center">
          <div className="mb-3 flex items-center w-fit mx-auto rounded-full bg-white py-[6px] px-[13px] border-[1px] border-[#0070CE]">
            <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">Blogs, News & Events </span>
          </div>

          <h2 className="text-primary-700 font-bold text-[24px] sm:text-[30px] !leading-[30px] sm:!leading-[34px] mb-2">
            Latest articles & <br className='hidden sm:block' /> News publish by Innova
          </h2>
        </div>
        <div className="py-[10px]">
          <TabProvider defaultValue={0}>
            <BlogTabList />
            <BlogTabContent />
          </TabProvider>
        </div>
      </div>
    </section>

      
    </main>
  );
};

export default page;
