import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="flex space-x-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-red-700 rounded-full opacity-0"
            style={{
              animation: `twinkle 1.5s infinite ${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
