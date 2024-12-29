import React, { useState } from 'react';
import { TestTube2 } from 'lucide-react';
import type { FertilizerSample } from '../types/fertilizer';

const SampleForm: React.FC = () => {
  const [sample, setSample] = useState<Partial<FertilizerSample>>({
    composition: {
      nitrogen: 0,
      phosphorus: 0,
      potassium: 0,
      organic: 0,
      moisture: 0,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sample submission
    console.log('Sample submitted:', sample);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <TestTube2 className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Sample Analysis</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sample Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => setSample({ ...sample, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Batch Number
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => setSample({ ...sample, batchNumber: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries(sample.composition || {}).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {key} (%)
              </label>
              <input
                type="number"
                step="0.01"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={value}
                onChange={(e) => 
                  setSample({
                    ...sample,
                    composition: {
                      ...sample.composition,
                      [key]: parseFloat(e.target.value),
                    },
                  })
                }
              />
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            onChange={(e) => setSample({ ...sample, notes: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Analyze Sample
        </button>
      </form>
    </div>
  );
};

export default SampleForm;