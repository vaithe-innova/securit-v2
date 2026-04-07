import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';

interface CompanyMenuItemLinkProps {
  href: string;
  title: string;
  showDivider: boolean;
  setMenuDropdownId: (id: string | null) => void;
}

const CompanyMenuItemLink = ({ href, title, showDivider, setMenuDropdownId }: CompanyMenuItemLinkProps) => (
  <>
    <li className="group/item">
      <Link
        href={href}
        onClick={() => setMenuDropdownId(null)}
        className="relative flex items-start gap-3 rounded-2xl p-3 transition-all duration-300">
        <HoverBgTransform className="group-hover/item:opacity-100" />
        <div className="relative z-10">
          <p className="text-tagline-1 text-secondary dark:text-accent font-normal">{title}</p>
        </div>
      </Link>
    </li>
    {showDivider && (
      <li>
        <div className="bg-stroke-4 dark:bg-background-7 mx-auto h-[1px] w-[calc(100%-16px)]" />
      </li>
    )}
  </>
);
CompanyMenuItemLink.displayName = 'CompanyMenuItemLink';
export default CompanyMenuItemLink;
