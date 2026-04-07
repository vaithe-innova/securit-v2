import { cn } from '@/utils/cn';
import CompanyMenuItemLink from './CompanyMenuItemLink';

type CompanyMenuItem = {
  href: string;
  title: string;
};

const companyMenuItems: CompanyMenuItem[] = [
  {
    href: '/about',
    title: 'About Us',
  },
  {
    href: '/#team',
    title: 'Our Team',
  },
];

const CompanyMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  return (
    <div className={cn('relative menu-triangle', menuDropdownId === 'company-dropdown-menu' ? 'active' : '')}>
      <div
        className={cn(
          'absolute left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent top-[15px] transition-all duration-300 submenu-indicator',
          menuDropdownId === 'company-dropdown-menu'
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <ul
        id="company-dropdown-menu"
        className={cn(
          'top-[15px] dark:bg-background-6 shadow-14 border-stroke-1 absolute left-1/2 z-50 w-[320px] -translate-x-1/2 space-y-1 rounded-b-3xl bg-white p-3 transition-all duration-300 dark:border-white/10',
          menuDropdownId === 'company-dropdown-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {companyMenuItems.map((item, index) => (
          <CompanyMenuItemLink
            key={item.title}
            {...item}
            showDivider={index < companyMenuItems.length - 1}
            setMenuDropdownId={setMenuDropdownId}
          />
        ))}
      </ul>
    </div>
  );
};

CompanyMenu.displayName = 'CompanyMenu';
export default CompanyMenu;
