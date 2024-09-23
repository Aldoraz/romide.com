"use client";
import { useState } from 'react';

interface Mapshot {
  folderName: string;
  ticks_played: number;
  days: number;
  hours: number;
}

const mapshots: Mapshot[] = [
  {
    folderName: '000',
    ticks_played: 0,
    days: 0,
    hours: 0
  },

];


export default function FactorioSE() {
  const [selectedMapshot, setSelectedMapshot] = useState(1);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMapshot(Number(event.target.value));
  };

  const currentMapshot = mapshots[selectedMapshot - 1];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Factorio Space Exploration Progress</h1>

      {/* Slider for Mapshots */}
      <div className="w-full max-w-lg flex flex-col items-center">
        <input
          type="range"
          min="1"
          max={mapshots.length}
          value={selectedMapshot}
          onChange={handleSliderChange}
          className="w-full"
        />
        <div className="mt-2 text-lg">
          Hours: {currentMapshot.hours}, Days: {currentMapshot.days}
        </div>
      </div>

      {/* Mapshot Display */}
      <div className="mt-8 w-full px-16">
        {currentMapshot && (
          <iframe
            src={`/projects/factorio-space-exploration/mapshots/${currentMapshot.folderName}/index.html`}
            style={{ width: '100%', height: '100vh' }}
            className="border-0"
            title="Factorio Mapshot"
          ></iframe>
        )}
      </div>
    </div>
  );
}
