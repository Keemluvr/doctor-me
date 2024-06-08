import clsx from "clsx";

export const className = (hasIconName: boolean) => ({
  container: "flex items-center gap-4 justify-between",
  leftContent: "flex items-center gap-4",
  titleWrapper: clsx(
    hasIconName ? "h-9 w-9" : "h-10 w-10",
    "border rounded-full",
    "hover:bg-primary-100 hover:border-primary-100 transition-all"
  ),
  titleIcon: clsx(hasIconName ? "h-8 w-8" : "h-10 w-10"),
  title: clsx("text-black font-bold", hasIconName ? "text-xl" : "text-3xl")
});
