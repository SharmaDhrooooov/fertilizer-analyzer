import React from 'react';
import { CheckCircle2, AlertTriangle, BarChart3 } from 'lucide-react';

const AnalysisResults: React.FC = () => {
  // Mock data - replace with actual analysis results
  const results = {
    isCompliant: true,
    deviations: [],
    recommendations: [
      'Maintain current composition ratios',
      'Store in cool, dry conditions',
    ],
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Analysis Results</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {results.isCompliant ? (
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            ) : (
              <AlertTriangle className="h-8 w-8 text-red-500" />
            )}
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">
              {results.isCompliant ? 'Sample Compliant' : 'Compliance Issues Detected'}
            </h3>
          </div>
        </div>

        {results.deviations.length > 0 && (
          <div className="rounded-md bg-yellow-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Deviations</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <ul className="list-disc pl-5 space-y-1">
                    {results.deviations.map((deviation, index) => (
                      <li key={index}>{deviation}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-md bg-blue-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Recommendations</h3>
              <div className="mt-2 text-sm text-blue-700">
                <ul className="list-disc pl-5 space-y-1">
                  {results.recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;