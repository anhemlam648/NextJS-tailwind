/*Portfolio page*/
'use client';
import React, { useState } from 'react';


interface Card {
  title: string;
  description: string;
}


const cardsData: Card[] = [
  { title: 'React', description: 'A JavaScript library for building UI.' },
  { title: 'Tailwind CSS', description: 'Utility-first CSS framework.' },
  { title: 'NextJS', description: 'Scalable frontend framework built with React.' },
  { title: 'GSAP', description: 'Animation library for smooth effects.' },
  { title: 'TypeScript', description: 'A superset of JavaScript that adds type safety.' },
  { title: 'Git', description: 'A distributed version control system.' },
];


const FlipCardDeck = () => {
  const [flippedCards, setFlippedCards] = useState<boolean[]>(new Array(cardsData.length).fill(false)); //add to lenght of cardsData and set to state

  const handleFlipCard = (index: number) => {
    const newFlippedCards = [...flippedCards]; //create a copy of the current flippedCards state array
    newFlippedCards[index] = !newFlippedCards[index]; //toggle the flipped state of the clicked card
    setFlippedCards(newFlippedCards); //update the state with the new flippedCards array
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-blue-900 to-gray-800 flex items-center justify-center p-10 px-6 py-16 mt-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative w-48 h-64 cursor-pointer perspective"
            onClick={() => handleFlipCard(index)}
          >
            <div
              className={`absolute w-full h-full rounded-lg shadow-lg transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
                flippedCards[index] ? 'rotate-x-180' : ''
              }`}
            >
              {/* Front Side change state */}
              <div className="absolute w-full h-full flex items-center justify-center bg-white border-4 border-yellow-400 rounded-lg text-xl font-bold backface-hidden select-none">
                <span role="img" aria-label="flip">
                  🔄
                </span>{' '}
                Click to Flip
              </div>
            
              {/* View */}
              <div
                className="absolute w-full h-full flex flex-col items-center justify-center bg-white-500 border-2 border-yellow-400 rounded-lg text-lg text-white backface-hidden select-none"
                style={{ transform: 'rotateX(180deg)' }}>
                 
                 <h2 className="text-2xl font-semibold">{card.title}</h2>
                <p className="mt-2 px-4 text-center">{card.description}</p>

              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .select-none {
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default FlipCardDeck;

