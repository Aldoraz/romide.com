"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function Main() {
  const [currentTime, setCurrentTime] = useState('');
  const [age, setAge] = useState(0);

  // About Section
  useEffect(() => {
    setInterval(() => {
      const germanTime = new Date().toLocaleTimeString('de-DE', { timeZone: 'Europe/Berlin' });
      setCurrentTime(germanTime);
    }, 1000);

    const today = new Date();
    const birthDateString = process.env.NEXT_PUBLIC_BIRTHDATE || '';
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age)
  }, []);

  // Fire at end
  useEffect(() => {
    const width = 145;
    const height = 50;

    const fireChars = " ,;+ltgti!lI?/\\|)(1}{][rcvzjftJUOQocxfXhqwWB8&%$#@";
    const maxCharIndex = fireChars.length;

    const firePixelsArray: number[] = [];

    for (let i = 0; i < width * height + 1; i++) {
      firePixelsArray[i] = 0;
    }

    const generateFire = () => {
      let fireString = "";

      // Randomize firePixelsArray values
      for (let i = 0; i < width; i++) {
        const randomCol = Math.floor(Math.random() * width);
        const index = randomCol + width * (height - 1);
        firePixelsArray[index] = Math.floor(Math.random() * maxCharIndex);
      }

      for (let i = 0; i < width; i++) {
        const randomCol = Math.floor(Math.random() * width);
        const index = randomCol + width * (height - 1);
        firePixelsArray[index] = 0;
      }

      for (let i = 0; i < width * (height - 1); i++) {
        const averageValue =
          (firePixelsArray[i] +
            firePixelsArray[i + 1] +
            firePixelsArray[i + width] +
            firePixelsArray[i + width + 1]) / 4;

        firePixelsArray[i] = Math.floor(averageValue);

        fireString += fireChars[firePixelsArray[i]];
        if (i % width === 0) fireString += "\n";
      }

      document.getElementById("fire")!.innerText = fireString;
      setTimeout(generateFire, 30);
    };

    generateFire();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="relative p-4 font-[family-name:var(--font-geist-mono)] sticky top-0 z-10">
        <a href="#home" className="text-2xl font-bold mr-4">Home</a>
        <a href="#about" className="text-2xl font-bold mr-4">About</a>
        <a href="#projects" className="text-2xl font-bold">Projects</a>
      </div>
      {/* Home */}
      <div id="home" className="pt-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-center font-[family-name:var(--font-geist-mono)] -mt-28">Romide</h1>

          {/* Image Icons */}
          <div className="flex justify-center gap-4 z-10">
            <a href="mailto:contact@romide.com" className="flex items-center" aria-label="Email">
              <Image src="/images/email.svg" alt="Email" width={24} height={24} /> {/* Adjust width and height as needed */}
            </a>
            <a href="https://github.com/Aldoraz" target="_blank" rel="noopener noreferrer" className="flex items-center" aria-label="GitHub">
              <Image src="/images/github.svg" alt="GitHub" width={24} height={24} /> {/* Adjust width and height as needed */}
            </a>
          </div>
        </main>
        <pre id="fire" className=" inset-0 z-0"></pre>
      </div>

      {/* About */}
      <div id="about" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-center font-[family-name:var(--font-geist-mono)]">About</h1>
          <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li>Business Informatics (EU) / Information Systems (US) Student</li>
            <li>Germany - {currentTime}</li>
            <li>{age} years old</li>

            <li className="list-none">&nbsp;</li>
            <li>Programming Languages:</li>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] ml-5">
              <li><strong>Python</strong> - 1 Year - Small Applications and Automations</li>
              <li><strong>Java</strong> - 2 Years - High School & University</li>
              <li><strong>C</strong> - 1 Year - University</li>
              <li><strong>VB.Net</strong> - 1 Year - Used with UiPath RPA</li>
              <li><strong>VB</strong> - 1 Year - Automating Excel Processes</li>
            </ol>

            <li className="list-none">&nbsp;</li>
            <li>Web Development:</li>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] ml-5">
              <li><strong>HTML</strong> - 2 Years - High School & Web Development</li>
              <li><strong>CSS</strong> - 1 Year - Web Development</li>
              <li><strong>JavaScript</strong> - 3 Years - Node.js Applications & Web Development</li>
            </ol>

            <li className="list-none">&nbsp;</li>
            <li>Technologies:</li>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] ml-5">
              <li><strong>Databases / SQL</strong> - 2 Years - Highschool, University and Applications</li>
              <li><strong>RPA</strong> - 1 Year - Automating Business Processes with UiPath</li>
              <li><strong>AI</strong> - 2 Years - Using ChatGPT and similar LLMs</li>
            </ol>

            <li className="list-none">&nbsp;</li>
            <li>Languages:</li>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] ml-5">
              <li><strong>German</strong> - C2</li>
              <li><strong>English</strong> - C2</li>
              <li><strong>Spanish</strong> - A2</li>
              <li><strong>French</strong> - B1</li>
            </ol>
          </ul>
        </main>
      </div>
      {/* Projects */}
      <div id="projects" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-center font-[family-name:var(--font-geist-mono)]">Projects</h1>
          <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li><a href="/projects/factorio-pyanodon" className="hover:underline">Factorio Pyanodon</a></li>
            <li><a href="/projects/factorio-space-exploration" className="hover:underline">Factorio Space Exploration</a></li>
          </ul>
        </main>
      </div>
    </>
  );
}
