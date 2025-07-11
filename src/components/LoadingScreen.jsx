import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [countdown, setCountdown] = useState(10);
  const fullText = "<Portfolio.jsx/>";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          onComplete(); 
        }
        return prev - 1;
      });
    }, 1000);

    
    return () => {
      clearInterval(typingInterval);
      clearInterval(countdownInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div
        onClick={onComplete}
        className="mb-4 text-4xl font-mono font-bold cursor-pointer bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent leading-right"
      >
        {text}<span className="animate-blink text-white text-4xl">|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden mb-4 mr-6">
        <div className="w-[40%] h-full bg-purple-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>

      <div className="text-sm text-gray-400 font-mono">
        Click or Redirecting in <span className="text-white">{countdown}</span> second{countdown !== 1 ? "s" : ""}...
      </div>
    </div>
  );
};
