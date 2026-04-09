import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import BlogPaginationWrapper from './BlogPaginationWrapper';

const BlogShowcase = () => {
  const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
  return (
    <section className="">
        {/* Blog grid with pagination wrapper */}
        <BlogPaginationWrapper blogs={blogs} />
    </section>
  );
};

BlogShowcase.displayName = 'BlogShowcase';
export default BlogShowcase;
