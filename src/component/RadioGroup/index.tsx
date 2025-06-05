import {
  ChangeEvent,
  forwardRef,
  HtmlHTMLAttributes,
  ReactNode,
  createContext,
  useContext,
  useMemo,
} from "react";
import clsx from "clsx";
import Text from "../Text";
import styles from "./index.module.css";

type Direction = "horizontal" | "vertical";

interface RadioGroupContextType {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroupContext = createContext<RadioGroupContextType>(
  {} as RadioGroupContextType
);

export interface RootProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  direction: Direction;
  children: ReactNode;
}

const Root = ({ value, onChange, name, direction, children }: RootProps) => {
  const isVertical = direction === "vertical";
  const isHorizontal = direction === "horizontal";

  const contextValue = useMemo(
    () => ({
      value,
      onChange,
      name,
    }),
    [value, name, onChange]
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div
        className={clsx(
          styles.root,
          isVertical && styles.vertical,
          isHorizontal && styles.horizontal
        )}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

Root.displayName = "RadioGroup.Root";

export interface ItemProps extends HtmlHTMLAttributes<HTMLInputElement> {
  value: string;
  direction: Direction;
}

const Item = forwardRef<HTMLInputElement, ItemProps>(
  ({ value, direction, children, ...restProps }, ref) => {
    const isVertical = direction === "vertical";
    const isHorizontal = direction === "horizontal";

    const {
      name,
      value: selectedValue,
      onChange,
    } = useContext(RadioGroupContext);

    const isControlled = selectedValue !== undefined;
    const checkedProp = isControlled
      ? { checked: selectedValue === value }
      : {};

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    return (
      <div
        className={clsx(
          styles.item,
          isHorizontal && styles.horizontal,
          isVertical && styles.vertical
        )}
      >
        <input
          value={value}
          ref={ref}
          type="radio"
          name={name}
          onChange={handleChange}
          {...checkedProp} // checked 속성
          className={clsx("global-focus-visible-default:focus-visible")}
          {...restProps}
        />
        <Text as="span" className={styles.text}>
          {children}
        </Text>
      </div>
    );
  }
);

Item.displayName = "RadioGroup.Item";

const RadioGroup = Object.assign(Root, {
  Item,
});

export default RadioGroup;
