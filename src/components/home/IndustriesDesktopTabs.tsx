'use client';

import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';
import { industriesTabsData } from '@/data/industriesData';

const IndustriesDesktopTabs = () => {
  return (
    <TabList variant="desktop">
      {industriesTabsData.map((tab, i) => (
        <Tab key={tab.id} index={i} variant="desktop">
          {tab.maintitle}
        </Tab>
      ))}
    </TabList>
  );
};

export default IndustriesDesktopTabs;