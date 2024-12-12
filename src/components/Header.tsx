import { Snowflake } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-4">
        <Snowflake className="w-16 h-16 text-blue-500" />
      </div>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Snow Day Calculator</h1>
      <p className="text-lg text-blue-700 mb-6">Find Out The Probability Of School Being Cancelled Due To Snow!</p>
    </div>
  );
}