import cn from "@/utils/cn";

const Title = ({
  children,
  className,
  level = 1,
}: {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
}) => {
  switch (level) {
    case 1:
      return <h1 className={cn("text-3xl", className)}>{children}</h1>;
    case 2:
      return <h2 className={cn("text-2xl", className)}>{children}</h2>;
    case 3:
      return <h3 className={cn("mb-4 text-xl", className)}>{children}</h3>;
    default:
      return null;
  }
};

export default Title;
