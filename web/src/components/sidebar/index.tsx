import { useMemo } from "react";
import { signOut } from "next-auth/react";
import { className } from "./style";
import { usePathname } from "next/navigation";
import Users from "../svg/users";
import Settings from "../svg/settings";
import LogOut from "../svg/logout";
import clsx from "clsx";
import Link from "next/link";

const onHoverItem = (currentPathName: string, item: { link: string }) => {
  return currentPathName === item.link ? "opacity-100 bg-primary" : "border-transparent hover:bg-default-200";
};

const Sidebar = () => {
  const pathname = usePathname();

  const items = [
    {
      link: "/admin",
      label: <Users selected={pathname === "/admin"} />
    },
    {
      link: "/settings",
      label: <Settings selected={pathname === "/settings"} />
    }
  ];

  const classNameSidebar = useMemo(() => className, []);

  return (
    <nav className={classNameSidebar.wrapper}>
      <div className={classNameSidebar.main}>
        {items.map((item) => (
          <Link
            key={[item.link].toString()}
            href={item.link}
            className={clsx(classNameSidebar.item, onHoverItem(pathname, item))}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
        className={classNameSidebar.footer.signUpButton}
      >
        <LogOut />
      </button>
    </nav>
  );
};

export default Sidebar;
