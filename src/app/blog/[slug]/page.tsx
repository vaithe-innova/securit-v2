import BlogContent from '@/components/blog-details/BlogContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const blogs = getMarkDownData('src/data/blogs');
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog Details - Mortgage Services || NextSaaS',
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const blogContent = getMarkDownContent('src/data/blogs/', slug);

  return (
    <main id="main-content" className="bg-background-3 dark:bg-background-7">
      <BlogContent blog={blogContent} />
    </main>
  );
};

export default page;
