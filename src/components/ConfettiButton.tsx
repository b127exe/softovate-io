import React, { useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { FaCopy, FaCheck } from 'react-icons/fa';
import { FaCheckDouble } from "react-icons/fa6";

function ConfettiButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    if (buttonRef.current) {
      // Copy email to clipboard
      const email = "maazkh9990@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        console.log('Email copied to clipboard');
        setIsCopied(true); // Update the state to indicate email has been copied

        // Reset the button text after 3 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 5000);
      });

      // Trigger confetti
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      confetti({
        particleCount: 100,
        startVelocity: 10,
        spread: 360,
        origin: {
          x: (left + width / 2) / window.innerWidth,
          y: (top + height / 2) / window.innerHeight
        }
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="text-black font-bold px-5 py-2 rounded-lg flex items-center border-gray-950/30 bg-gradient-to-r from-emerald-300 to-sky-400 border-2"
        ref={buttonRef}
        onClick={handleClick}
      >
        {isCopied ? 'Email Copied' : 'Copy My Email'}
        {isCopied ? <FaCheckDouble className="ml-5" /> : <FaCopy className="ml-5" />}
      </button>
    </div>
  );
}

export default ConfettiButton;
