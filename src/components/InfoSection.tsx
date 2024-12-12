import { Snowflake, Calendar, ThermometerSnowflake } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">How It Works</h2>
      <p className="text-gray-700 mb-6">
        Based on your location's weather forecast and historical trends our Snow Day Calculator will calculate 
        the probability of schools in your area being cancelled over the next 14 days.
      </p>

      <h3 className="text-xl font-semibold text-blue-900 mb-4">The Snow Day Calculator takes into account:</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <FactorCard
          icon={<Snowflake className="w-6 h-6 text-blue-500 flex-shrink-0" />}
          title="Daily Snowfall"
          description="Expected precipitation in snow form"
        />
        
        <FactorCard
          icon={<Calendar className="w-6 h-6 text-blue-500 flex-shrink-0" />}
          title="Cumulative Snow Depth"
          description="Total snow accumulation over time"
        />
        
        <FactorCard
          icon={<ThermometerSnowflake className="w-6 h-6 text-blue-500 flex-shrink-0" />}
          title="Minimum Temperature"
          description="Actual recorded temperature"
        />
        
        <FactorCard
          icon={<ThermometerSnowflake className="w-6 h-6 text-blue-500 flex-shrink-0" />}
          title="Minimum Temperature (Feels Like)"
          description="Wind chill and humidity factors"
        />
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg font-semibold text-blue-900">
          Make our Snow Day Calculator your "GO-TO" school cancellation predicter!
        </p>
      </div>
    </div>
  );
}

function FactorCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      {icon}
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}