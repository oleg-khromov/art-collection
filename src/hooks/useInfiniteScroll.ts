import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";

interface ApiResponse {
  page: number;
}

export function useInfiniteScroll(): ApiResponse {
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const debouncedHandleScroll = useDebounce(handleScroll, 800);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [debouncedHandleScroll]);

  return { page };
}
