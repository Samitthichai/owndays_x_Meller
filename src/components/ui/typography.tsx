import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    variant: {
      display: "text-gt-american-display",
      gt: "font-[family-name:var(--font-gt-american)]",
      favorit: "font-[family-name:var(--font-favorit)]",
      body: "font-[family-name:var(--font-sans)] text-base",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type Props<T extends keyof React.JSX.IntrinsicElements = "p"> = VariantProps<
  typeof textVariants
> &
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
  };

export function Text<T extends keyof React.JSX.IntrinsicElements = "p">({
  variant,
  className,
  children,
  as: Tag = "p" as T,
  ...props
}: Props<T>) {
  const Component = Tag as React.ElementType;
  return (
    <Component className={cn(textVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  );
}
