import { IBlogPost } from '@/interface';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../../ui/button/LinkButton';

interface BlogCardProps {
  blog: IBlogPost;
  className?: string;
}

const BlogCard = ({ blog, className }: BlogCardProps) => {
  return (
    <article className='h-full'>
      <div
        className={cn(
          'bg-background-1 dark:bg-background-6 relative scale-100 overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500 h-full',
          className,
        )}>
        <figure className="h-[260px] max-w-full overflow-hidden xl:max-w-[409px]">
          <Image
            src={blog?.thumbnail}
            width={409}
            height={250}
            alt={`Thumbnail for blog post: ${blog?.title}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="space-y-6 p-6">
          <div className="flex items-center gap-2">
            <span className="badge badge-green mr-1">{blog?.tag}</span>
            <span rel="author" className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
              {blog?.author}
            </span>
            <span className="h-[6px] w-[5px] rounded-full bg-[#ECE8FF]"> </span>
            <time dateTime="2025-03-20" className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
              {blog?.publishDate}
            </time>
          </div>
          <div>
            <h3 className="sm:text-heading-5 text-heading-6 mb-2 font-normal">
              <Link href={`/blog/${blog.slug}`} aria-label={`Read more about ${blog?.title}`}>
                {blog?.title}
              </Link>
            </h3>
            <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 line-clamp-2 font-normal">
              {blog?.description}
            </p>
          </div>
          <div className="flex justify-start md:block">
            <LinkButton
              href={`/blog/${blog.slug}`}
              className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent dark:hover:text-secondary w-full sm:w-auto"
              aria-label={`Read full article: ${blog?.title}`}>
              Read more
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};

BlogCard.displayName = 'BlogCard';
export default BlogCard;
