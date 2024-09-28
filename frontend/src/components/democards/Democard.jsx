import React from 'react';
import card1 from '../../assets/demoCards/card1.png';
import card2 from '../../assets/demoCards/card2.png';
import card3 from '../../assets/demoCards/card3.png';
import card4 from '../../assets/demoCards/card4.png';

const cardData = [
  {
    img: card1,
    title: 'Select Match',
    description: 'Choose an upcoming match from the available list.',
  },
  {
    img: card2,
    title: 'Create Team',
    description: 'Pick 15 players from the players pool to form your team.',
  },
  {
    img: card3,
    title: 'Join Contest',
    description: 'Click the Join Contest button to enter the contest.',
  },
  {
    img: card4,
    title: 'Win Rewards',
    description: 'Check My Contest to view the rewards you earn based on the points your team scores.',
  },
];

export default function Democard() {
  return (
    <div className="flex items-center justify-center mt-[2vw]">
      <div className="grid grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="h-[30vh] w-[20vw] bg-[#3a3a3a] rounded-3xl p-6
                       transition-all duration-300 ease-in-out
                       hover:bg-black relative
                       before:absolute before:inset-0
                       before:rounded-xl before:transition-all
                       before:duration-300 before:ease-in-out
                       before:opacity-0 hover:before:opacity-100
                       before:shadow-[0_0_15px_rgba(0,246,84,0.5)]
                       before:hover:shadow-[0_0_20px_rgba(0,246,84,0.7)] flex flex-col items-center justify-center"
          >
            <div className="relative z-10 text-white flex flex-col items-center">
              <img src={card.img} alt={card.title} className="mb-4 rounded" />
              <h2 className="text-2xl font-bold mb-2 text-center">{card.title}</h2>
              <p className="text-sm text-center">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
