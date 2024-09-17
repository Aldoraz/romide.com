"use client";

import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState('');
  const [age, setAge] = useState(0);

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

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-center font-[family-name:var(--font-geist-mono)]">Portfolio</h1>
        <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Business Informatics / Information Systems Student</li>
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

          <li className="list-none">&nbsp;</li>
          <li>
            <a href="/portfolio/projects" className="underline">Projects</a>
          </li>
        </ul>
      </main>
    </div>
  );
}


