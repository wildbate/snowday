import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { InfoSection } from './components/InfoSection';
import { ResultsDisplay } from './components/ResultsDisplay';
import { HowToUseSection } from './components/HowToUseSection';
import { FAQSection } from './components/FAQSection';
import { generateMockProbability } from './utils/mockData';

function App() {
  const [location, setLocation] = useState('');
  const [searchResult, setSearchResult] = useState<{ location: string; probability: number } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      const probability = generateMockProbability(location);
      setSearchResult({ location, probability });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Header />
        <SearchForm
          location={location}
          onLocationChange={setLocation}
          onSubmit={handleSubmit}
        />
        {searchResult && (
          <ResultsDisplay
            location={searchResult.location}
            probability={searchResult.probability}
          />
        )}
        <InfoSection />
        <HowToUseSection />
        <FAQSection />
      </div>
    </div>
  );
}

export default App;