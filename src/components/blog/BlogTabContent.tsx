import TabContent from '../ui/tab/TabContent';
import BlogShowcase from './BlogShowcase';
import NewsShowcase from './NewsShowcase';

const data = [
  {
    id: 1,
    tabTitle: 'Blogs',
    tabContent: <BlogShowcase />,
  },
  {
    id: 2,
    tabTitle: 'News & Events',
    tabContent: <NewsShowcase />,
  }
];

const BlogTabContent = () => {
  return (
    <>
      {data.map((item, index) => (
        <TabContent key={item.id} index={index}>
          {item.tabContent}
        </TabContent>
      ))}
    </>
  );
};

export default BlogTabContent;
