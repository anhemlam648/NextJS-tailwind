/*Contact page*/
'use client';
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const steps = [
  { question: '👋 Hello! What your name?', field: 'name' },
  { question: '💬 Nice to meet you', field: 'message' },
  { question: '❤️ Have a good day!', field: 'message' },
  { question: '✅ Thank you for coming! see you again. 🎉', field: null },
];

const BubbleChatContact = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); // Save form data
  const [showBubbles, setShowBubbles] = useState<string[]>([]);   // State to manage the chat bubbles

  useEffect(() => {
    if (currentStep < steps.length) {
      const question = steps[currentStep].question;
      const time = setTimeout(() => {
        setShowBubbles((prev) => [...prev, `🤖 ${question}`]);
      }, 300); // Show the question after 1 second
      return () => clearTimeout(time); // Cleanup the timeout on unmount or step change
    }
  }, [currentStep]); // setup effect to show the next question after a delay

  const handleInput = (value: string) => {
    const field = steps[currentStep].field;
    if (field) {
      setFormData({ ...formData, [field]: value });
      setShowBubbles((prev) => [...prev, `👤 ${value}`]);
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-yellow-400 via-blue-900 to-gray-800 to-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-black p-6 rounded-xl shadow-2xl space-y-4 border border-yellow-500/30">
        <h2 className="text-center text-2xl font-bold mb-2 drop-shadow">
            💌 Contact Us (Chat Mode Demo)
        </h2>
        {/* Chat bubbles container */}
        <div className="space-y-3 max-h-96 overflow-y-auto flex flex-col mt-10">
            {showBubbles.map((bubble, i) => (
            <div
                key={i}
                className={`rounded-xl px-4 py-2 w-fit max-w-[85%] ${
                bubble.startsWith('🤖')
                    ? 'bg-yellow-400 text-black self-start'
                    : 'bg-gray-800 text-white self-end'
                } shadow-md transition-all`}
            >
                {bubble}
            </div>
            ))}
        </div>
        
        {/* Input form for the next step */}
        {currentStep < steps.length - 1 && (
            <form
            onSubmit={(e) => {
                e.preventDefault();
                const input = (e.target as any).elements[0].value;
                if (input.trim() !== '') {
                handleInput(input);
                (e.target as any).reset();
                }
            }}
            className="flex gap-2 pt-2"
            >
            <input
                type="text"
                placeholder="Type your response..."
                className="flex-1 px-4 py-2 rounded-lg bg-black text-white placeholder-gray-400 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                autoFocus
            />
            <button
                type="submit"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 font-semibold transition"
            >
                Send
            </button>
            </form>
        )}
        </div>
    </div>
  );
};

export default BubbleChatContact;
