import { useEffect } from "react";

const Testing = () => {
  useEffect(() => {
    const overlay = document.createElement('div') as HTMLDivElement;
    overlay.className = "fixed inset-0 bg-black/20 z-30"
    document.body.appendChild(overlay);

    return () => {
      document.body.removeChild(overlay);
    }
  }, []);
  
  return (
    <div></div>
  );
};

export default Testing;