import { Snowflake } from 'lucide-react';

interface ResultsDisplayProps {
  probability: number;
  location: string;
}

export function ResultsDisplay({ probability, location }: ResultsDisplayProps) {
  const getWittyMessage = (prob: number) => {
    if (prob >= 90) {
      return "Time to 'forget' doing that homework! 📚❄️";
    } else if (prob >= 70) {
      return "Better charge those devices for a Netflix marathon! 🎬";
    } else if (prob >= 50) {
      return "50/50... like your chances of finding matching gloves! 🧤";
    } else if (prob >= 30) {
      return "Don't put away those textbooks just yet! 📖";
    } else if (prob >= 10) {
      return "Looks like you'll need that alarm clock after all! ⏰";
    } else {
      return "Sorry kids, better luck next storm! 🌨️";
    }
  };

  const getEmoji = (prob: number) => {
    if (prob >= 90) return "🎉";
    if (prob >= 70) return "😊";
    if (prob >= 50) return "🤔";
    if (prob >= 30) return "😐";
    if (prob >= 10) return "😕";
    return "😢";
  };

  return probability !== undefined ? (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
      <div className="flex justify-center mb-4">
        <Snowflake className="w-12 h-12 text-blue-500 animate-pulse" />
      </div>
      <h2 className="text-2xl font-bold text-blue-900 mb-2">Snow Day Forecast for {location}</h2>
      <div className="text-6xl font-bold text-blue-500 mb-4">
        {probability}% {getEmoji(probability)}
      </div>
      <p className="text-xl text-gray-700 mb-4">Chance of a Snow Day</p>
      <p className="text-lg text-blue-600 italic">{getWittyMessage(probability)}</p>
      <div className="mt-6 text-sm text-gray-500">
        Next update in: <span className="font-semibold">30 minutes</span>
      </div>
    </div>
  ) : null;
}