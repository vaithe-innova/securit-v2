import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import BlogPaginationWrapper from './BlogPaginationWrapper';

const NewsShowcase = () => {
  const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
  const newsAndEvents = blogs
    .filter((post) => {
      const searchable = `${post.tag} ${post.title} ${post.description} ${post.slug}`.toLowerCase();
      return /(news|event|press|announcement|partner|conference|summit|mwc)/.test(searchable);
    })
    .filter((post) => post.publishDate && new Date(post.publishDate) <= new Date());

  const feed = newsAndEvents.slice(0, 0); // Get the latest 6 news and events

  return (
    <section className="">
      <div className="main-container">
        {feed.length > 0 ? (
          <BlogPaginationWrapper blogs={feed} />
        ) : (
          <div className="py-10">
            <div className="rounded-md bg-[#f8d7da] px-5 py-4 text-[#842029]" role="alert" aria-live="assertive">
              <p className="text-base font-normal">No results found.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

NewsShowcase.displayName = 'NewsShowcase';
export default NewsShowcase;
