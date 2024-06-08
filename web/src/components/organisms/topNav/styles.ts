import clsx from "clsx";

export const className = {
  container: "flex items-center gap-4 justify-between",
  leftContent: "flex items-center gap-4",
  titleWrapper: clsx(
    "h-10 w-10",
    "border rounded-full",
    "hover:bg-primary-100 hover:border-primary-100 transition-all"
  ),
  titleIcon: "h-10 w-10",
  title: "text-black text-3xl font-bold inline "
};
