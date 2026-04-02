// crypto marketing resources menu
import { BlogIcon, SuccessStoriesIcon, SupportIcon } from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';
import CompanyMenuItemLink from './CompanyMenuItemLink';

type ResourcesMenuItem = {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const resourcesMenuItems: ResourcesMenuItem[] = [
  {
    href: '',
    title: 'Blog',
    description: 'Latest articles and insights',
    icon: <BlogIcon />,
  },
  {
    href: '',
    title: 'Case Studies',
    description: 'Real-world examples of Securit in action',
    icon: <SuccessStoriesIcon />,
  },
  {
    href: '',
    title: 'News and Events',
    description: 'Stay updated with the latest news and events',
    icon: <SupportIcon />,
  },
];

const ResourcesMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  return (
    <div className={cn(menuDropdownId === 'resources-dropdown-menu' ? 'menu-triangle' : '')}>
      <div
        className={cn(
          'absolute top-full left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'pointer-events-auto opacity-100 active-submenu'
            : 'pointer-events-none opacity-0',
        )}
      />
      <ul
        id="resources-dropdown-menu"
        className={cn(
          'dark:bg-background-6 shadow-14 border-stroke-1 absolute top-full left-1/2 z-50 w-[320px] -translate-x-1/2 space-y-1 rounded-b-3xl bg-white p-3 transition-all duration-300 dark:border-white/10',
          // when hover show the menu
          menuDropdownId === 'resources-dropdown-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {resourcesMenuItems.map((item, index) => (
          <CompanyMenuItemLink
            key={item.title}
            {...item}
            showDivider={index < resourcesMenuItems.length - 1}
            setMenuDropdownId={setMenuDropdownId}
          />
        ))}
      </ul>
    </div>
  );
};

ResourcesMenu.displayName = 'ResourcesMenu';
export default ResourcesMenu;
