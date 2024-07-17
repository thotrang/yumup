import Aos from "aos";
import { useEffect } from "react";

export default function useAos({ duration = 1000 }: { duration?: number }) {
  useEffect(() => {
    Aos.init({
      duration,
      once: true,
    });
  }, [duration]);
}
