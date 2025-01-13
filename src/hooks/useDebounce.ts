import { useRef, useEffect } from "react";

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: any[]) => void;

export function useDebounce<T extends SomeFunction>(
  callback: T,
  delay: number = 800
): (...args: Parameters<T>) => void {
  const timeoutRef = useRef<Timer | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const debouncedFunction = (...args: Parameters<T>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFunction;
}
