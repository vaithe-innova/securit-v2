import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const IndustriesTabList = () => {
  return (
    <>
      {/* Desktop TabList */}
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          Manufacturing & Industrial
        </Tab>
        <Tab index={1} variant="desktop">
          Warehousing & Logistics
        </Tab>
        <Tab index={2} variant="desktop">
          Construction & Field Work
        </Tab>
        <Tab index={3} variant="desktop">
          Utilities & Remote Operations
        </Tab>
        <Tab index={4} variant="desktop">
          Oil, Gas & Energy
        </Tab>
      </TabList>
      {/* Mobile TabList */}
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          Manufacturing & Industrial
        </Tab>
        <Tab index={1} variant="mobile">
          Warehousing & Logistics
        </Tab>
        <Tab index={2} variant="mobile">
          Construction & Field Work
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          Utilities & Remote Operations
        </Tab>
        <Tab index={4} variant="mobile">
          Oil, Gas & Energy
        </Tab>
      </TabList>
    </>
  );
};

IndustriesTabList.displayName = 'IndustriesTabList';
export default IndustriesTabList;
