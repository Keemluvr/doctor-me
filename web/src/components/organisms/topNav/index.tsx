import Link from "next/link";
import { className as style } from "./styles";
import { Icon } from "../../atoms/icon";
import { IconName } from "../../atoms/icon";
import Image from "next/image";
import clsx from "clsx";

interface TopNavProps {
  title: string;
  children?: React.ReactNode;
  iconName?: IconName;
  iconClassName?: string;
  href?: string;
}

const TopNav = ({ children, iconName, title, iconClassName, href = "/" }: TopNavProps) => {
  const hasIconName = !!iconName;
  const className = style(hasIconName);

  return (
    <header className={className.container} data-testid="header">
      <div className={className.leftContent}>
        <Link href={href} className={className.titleWrapper} data-testid="link">
          {iconName ? (
            <Icon name={iconName} className={clsx(className.titleIcon, iconClassName)} />
          ) : (
            <Image src="/logo.png" alt="DoctorMe" width={48} height={48} />
          )}
        </Link>

        <h1 className={className.title} data-testid="title">
          {title}
        </h1>
      </div>

      {children || null}
    </header>
  );
};

export default TopNav;
