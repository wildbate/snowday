import { MapPin, Search } from 'lucide-react';

interface SearchFormProps {
  location: string;
  onLocationChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function SearchForm({ location, onLocationChange, onSubmit }: SearchFormProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <form onSubmit={onSubmit} className="max-w-md mx-auto">
        <div className="relative">
          <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            placeholder="Enter your city or zip code"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600 transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}