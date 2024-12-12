import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How accurate is the Snow Day Calculator?",
    answer: "Our calculator achieves an average accuracy rate of 85% for predictions made within 24 hours of potential snow events. The accuracy increases as we get closer to the target date due to more precise weather data. However, remember that school closure decisions involve multiple factors beyond weather conditions."
  },
  {
    question: "How often is the weather data updated?",
    answer: "The calculator pulls fresh weather data every 30 minutes to ensure you have the most current predictions. This includes updates to temperature forecasts, precipitation predictions, and wind chill factors. We recommend checking back regularly during active weather events."
  },
  {
    question: "Does the calculator work for all locations?",
    answer: "The calculator works best in regions that regularly experience snow and have historical data for school closures. While we cover most of North America and many international locations, the accuracy may vary in regions where snow is rare or where school closure policies differ significantly."
  },
  {
    question: "What factors does the calculator consider?",
    answer: "Our algorithm analyzes multiple data points including predicted snowfall amounts, temperature forecasts, wind chill factors, existing snow accumulation, historical closure patterns for your area, and local school district policies. We also consider factors like timing of snowfall and road condition predictions."
  },
  {
    question: "Why might the prediction change throughout the day?",
    answer: "Weather forecasts are constantly updated with new data, which can affect our predictions. Factors like shifting storm paths, changing temperature forecasts, or updated precipitation predictions can all impact the likelihood of a snow day. This is why we update our calculations every 30 minutes."
  },
  {
    question: "Can the calculator predict delays or early dismissals?",
    answer: "Yes! Along with full snow days, our calculator can predict the likelihood of delayed openings and early dismissals. These predictions appear when conditions suggest partial rather than full-day closures might be more likely."
  },
  {
    question: "How far in advance can I get predictions?",
    answer: "The calculator provides predictions up to 14 days in advance. However, the accuracy is highest within a 72-hour window. Long-range predictions should be used as general guidance and checked regularly as the date approaches."
  },
  {
    question: "Should I rely solely on the calculator for school closure information?",
    answer: "While our calculator is a helpful tool, we always recommend following official communications from your school district. The calculator should be used as a supplementary resource alongside official announcements and local news updates."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0">
            <button
              className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-blue-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-500" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="pb-4">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}