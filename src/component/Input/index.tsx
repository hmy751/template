import {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  InputHTMLAttributes,
  FocusEvent,
  RefObject,
  useState,
  TouchEvent,
  MouseEvent,
} from "react";
import clsx from "clsx";
import styles from "./index.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isFocused?: boolean;
  isTouched?: boolean;
  isError?: string;
  placeholder?: string;
  isDisabled?: boolean;
  onFocusChange?: (isFocused: boolean) => void;
  onTouchChange?: (isTouched: boolean) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isFocused: controlledFocus,
      onFocus,
      onFocusChange,
      onBlur,
      isTouched: controlledTouch,
      onTouchStart,
      onTouchChange,
      onMouseDown,
      isError,
      placeholder,
      isDisabled,
      className,
      disabled,
      ...restProps
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ): React.ReactElement => {
    // ref 처리
    const internalInputRef = useRef<HTMLInputElement>(null);

    const assignRef = useCallback(
      (element: HTMLInputElement) => {
        if (element) {
          (internalInputRef as RefObject<HTMLInputElement>).current = element;
        }

        if (typeof ref === "function") {
          ref(element);
        } else if (ref) {
          (ref as RefObject<HTMLInputElement>).current = element;
        }
      },
      [ref]
    );

    // isTouched와 같은 value는 control, unControl에 따라서 기준을 정하고,
    // 이벤트는 control, unControl 모두 실행하여 일관성을 유지한다.

    // touch 이벤트
    const [unControlledTouch, setUnControlledTouch] = useState<boolean>(false);
    const isControlledTouch = controlledTouch !== undefined;

    const isTouched = isControlledTouch ? controlledTouch : unControlledTouch;

    const handleTouch = (
      e: TouchEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>
    ) => {
      e.stopPropagation();

      // 단순 상위에서 조정하는 이벤트
      onTouchChange?.(true);

      // 내부 이벤트
      setUnControlledTouch(true);

      // 상위 useForm과 같은 controlled 이벤트
      onTouchStart?.(e as TouchEvent<HTMLInputElement>);
      onMouseDown?.(e as MouseEvent<HTMLInputElement>);
    };

    // focus 이벤트
    const [unControlledFocus, setUncontrolledFocus] = useState<boolean>(false);
    const isControlledFocus = controlledFocus !== undefined;

    const isFocused = isControlledFocus ? controlledFocus : unControlledFocus;

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        e.stopPropagation();

        onFocusChange?.(true);

        setUncontrolledFocus(true);
        onFocus?.(e);
      },
      [onFocusChange, onFocus]
    );

    // blur 이벤트
    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        e.stopPropagation();

        onFocusChange?.(false);

        setUncontrolledFocus(false);

        onBlur?.(e);
      },
      [onFocusChange, onBlur, isControlledFocus]
    );

    return (
      <input
        ref={assignRef}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          styles.input,
          isTouched && styles.isTouched,
          isFocused && styles.isFocused,
          isError && styles.isError,
          isError
            ? "global-focus-visible-error"
            : "global-focus-visible-default",
          disabled && styles.isDisabled,
          className
        )}
        onMouseDown={handleTouch}
        onTouchStart={handleTouch}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
