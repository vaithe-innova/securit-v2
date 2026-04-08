import RevealAnimation from '@/components/animation/RevealAnimation';
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
        <div className="mb-3 max-w-[70%] mx-auto space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <div className="mb-3 flex items-center w-fit mx-auto rounded-full bg-white py-[6px] px-[13px] border-[1px] border-[#0070CE]">
              <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">Blogs, News & Events </span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="text-primary-700 font-bold text-[30px] !leading-[34px] mb-2">
              Latest articles & <br/> News publish by Innova
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <div className="py-[10px]">
            <TabProvider defaultValue={0}>
              <BlogTabList />
              <BlogTabContent />
            </TabProvider>
          </div>
        </RevealAnimation>
      </div>
    </section>

      
    </main>
  );
};

export default page;
