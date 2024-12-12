import { Search, MapPin, RefreshCw, Bell } from 'lucide-react';

export function HowToUseSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">How to Use the Snow Day Calculator</h2>
      
      <div className="space-y-8">
        <Step
          icon={<MapPin className="w-8 h-8 text-blue-500" />}
          title="Enter Your Location"
          description="Start by entering your city, town, or zip code in the search bar above. Our calculator needs your precise location to access accurate weather data and historical snow patterns for your area. We support locations across all snow-prone regions."
        />

        <Step
          icon={<Search className="w-8 h-8 text-blue-500" />}
          title="Get Your Prediction"
          description="Click the search button or press enter to receive your snow day probability. Our advanced algorithm analyzes multiple weather factors including predicted snowfall, temperature trends, and historical school closure data for your specific region."
        />

        <Step
          icon={<RefreshCw className="w-8 h-8 text-blue-500" />}
          title="Check Regular Updates"
          description="Weather conditions can change rapidly, especially in winter. Our calculator updates every 30 minutes with the latest forecast data. For the most accurate predictions, we recommend checking back regularly as your target date approaches."
        />

        <Step
          icon={<Bell className="w-8 h-8 text-blue-500" />}
          title="Understand the Results"
          description="Your results will show a percentage probability of a snow day occurring. The higher the percentage, the more likely schools will close. We also provide helpful insights about the specific weather conditions contributing to the prediction."
        />

        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Pro Tips for Best Results</h3>
          <ul className="space-y-3 text-blue-800">
            <li>• Check predictions for multiple consecutive days during storm systems</li>
            <li>• Compare results with nearby locations for a broader perspective</li>
            <li>• Consider checking in both morning and evening for updated forecasts</li>
            <li>• Remember that local school district policies vary and may affect closure decisions</li>
            <li>• Use the calculator in conjunction with official school communications</li>
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mt-4">
          <h3 className="text-xl font-semibold text-yellow-800 mb-4">Important Notes</h3>
          <p className="text-yellow-900">
            While our Snow Day Calculator uses sophisticated algorithms and real-time data, final school closure 
            decisions are always made by local school administrators. Multiple factors beyond weather conditions 
            may influence these decisions, including road conditions, facility readiness, and regional policies.
          </p>
        </div>
      </div>
    </div>
  );
}

function Step({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-blue-50 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}