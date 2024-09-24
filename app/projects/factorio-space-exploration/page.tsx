"use client";
import { useState, useEffect } from 'react';

interface Mapshot {
  folderName: string;
  ticks_played: number;
  days: number;
  hours: number;
}

export default function FactorioSE() {
  const [selectedMapshot, setSelectedMapshot] = useState(1);
  const [mapshots, setMapshots] = useState<Mapshot[]>([]);

  useEffect(() => {
    // Fetch the mapshots from the JSON file
    fetch('/projects/factorio-pyanodon/mapshots/mapshots.json')
      .then((response) => response.json())
      .then((data) => setMapshots(data))
      .catch((error) => console.error('Error fetching mapshots:', error));
  }, []);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(event.target.value), 1), mapshots.length);
    setSelectedMapshot(value);
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
        {currentMapshot && (
          <div className="mt-2 text-lg">
            Hours: {currentMapshot.hours}, Days: {currentMapshot.days}
          </div>
        )}
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
