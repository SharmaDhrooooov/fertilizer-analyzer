import React from 'react';
import { LineChart, Microscope, TrendingUp, CheckCircle2 } from 'lucide-react';

const QualityMetrics: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <LineChart className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Quality Metrics</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center">
            <Microscope className="h-5 w-5 text-blue-600" />
            <h3 className="ml-2 text-lg font-medium text-gray-900">
              Composition Accuracy
            </h3>
          </div>
          <p className="mt-2 text-3xl font-bold text-blue-600">98.5%</p>
          <p className="mt-1 text-sm text-gray-500">
            Average accuracy across all components
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h3 className="ml-2 text-lg font-medium text-gray-900">
              Quality Score
            </h3>
          </div>
          <p className="mt-2 text-3xl font-bold text-green-600">A+</p>
          <p className="mt-1 text-sm text-gray-500">
            Based on industry standards
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-indigo-600" />
            <h3 className="ml-2 text-lg font-medium text-gray-900">
              Compliance Rate
            </h3>
          </div>
          <p className="mt-2 text-3xl font-bold text-indigo-600">100%</p>
          <p className="mt-1 text-sm text-gray-500">
            Regulatory compliance status
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityMetrics;