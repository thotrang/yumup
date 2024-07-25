"use client";

import { useEffect, useState } from "react";

export const useDeviceType = (): string | null => {
  const [deviceType, setDeviceType] = useState<string | null>(null);

  useEffect(() => {
      const handleResize = () => {
          const mobileMaxWidth = 640;
          if (window.innerWidth <= mobileMaxWidth) {
              setDeviceType('mobile');
          } else {
              setDeviceType('desktop');
          }
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return deviceType;
};