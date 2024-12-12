export const generateMockProbability = (location: string): number => {
  // Generate a "random" but consistent probability based on location string
  const hash = location.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return Math.min(Math.max(Math.floor((hash % 100)), 0), 100);
};