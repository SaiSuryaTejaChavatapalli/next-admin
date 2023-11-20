import Link from "next/link";

type MenuItemProps = {
  item: {
    title: string;
    path: string;
    icon: JSX.Element;
  };
};
const MenuItem = ({ item }: MenuItemProps) => {
  const { path, icon, title } = item;
  return (
    <Link href={path} className="">
      <div className="flex items-center gap-1 p-5 hover:bg-slate-300">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default MenuItem;
