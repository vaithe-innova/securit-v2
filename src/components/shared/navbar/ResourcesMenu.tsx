// crypto marketing resources menu
import { AboutIcon, TeamIcon } from '@/icons/menu-icon';
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
    title: 'About Us',
    description: 'Latest articles and insights',
    icon: <AboutIcon />,
  },
  {
    href: '',
    title: 'Our Team',
    description: 'Real-world examples of Securit in action',
    icon: <TeamIcon />,
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
    <div className={cn('relative menu-triangle', menuDropdownId === 'resources-dropdown-menu' ? 'active' : '')}>
      <div
        className={cn(
          'absolute left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent top-[15px] transition-all duration-300 submenu-indicator',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <ul
        id="resources-dropdown-menu"
        className={cn(
          'top-[15px] dark:bg-background-6 shadow-14 border-stroke-1 absolute left-1/2 z-50 w-[320px] -translate-x-1/2 space-y-1 rounded-b-3xl bg-white p-3 transition-all duration-300 dark:border-white/10',
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
