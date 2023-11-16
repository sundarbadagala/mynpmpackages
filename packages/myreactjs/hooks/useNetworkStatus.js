import { useState, useEffect } from "react";

function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(navigator.onLine);
    });
    window.addEventListener("offline", () => {
      setIsOnline(navigator.onLine);
    });
    return () => {
      window.removeEventListener("online", setIsOnline);
      window.removeEventListener("offline", setIsOnline);
    };
  });

  return isOnline;
}

export default useNetworkStatus;
