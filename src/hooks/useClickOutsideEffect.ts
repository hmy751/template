import { useEffect } from "react";

const useClickOutsideEffect = (
  element: HTMLElement | null,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (!element || element.contains(e.target as Node)) {
        return;
      }

      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [element, handler]);
};

export default useClickOutsideEffect;