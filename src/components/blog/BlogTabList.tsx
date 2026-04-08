import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const BlogTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          Blogs
        </Tab>
        <Tab index={1} variant="desktop">
          News & Events
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          Blogs
        </Tab>
        <Tab index={1} variant="mobile">
          News & Events
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default BlogTabList;
