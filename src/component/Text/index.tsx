import clsx from "clsx";
import styles from "./index.module.css";

const ELEMENT_MAPPING = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
} as const;

type ComponentType = keyof typeof ELEMENT_MAPPING;

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "light" | "normal" | "medium" | "bold";
  as?: ComponentType;
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  maxWidth?: "full" | "fit" | (string & {});
  truncate?: boolean;
  lines?: number;
  color?: "primary" | "secondary" | "disabled" | "error" | "success";
}

const Text = ({
  size = "md",
  weight = "normal",
  as = "p",
  children,
  align = "left",
  maxWidth = "fit",
  truncate = false,
  color = "primary",
  lines,
  className,
  ...restProps
}: TextProps) => {
  const Element = ELEMENT_MAPPING[as];

  return (
    <Element
      className={clsx(
        styles.text,
        styles[size],
        styles[weight],
        styles[as],
        truncate && styles.truncate,
        lines && styles.multiLineTruncate,
        styles[color],
        styles[align],
        maxWidth && styles[maxWidth as "full" | "fit"],
        className
      )}
      style={
        maxWidth && !styles[maxWidth as "full" | "fit"]
          ? { maxWidth }
          : undefined
      }
      {...restProps}
    >
      {children}
    </Element>
  );
};

export default Text;
