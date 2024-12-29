import React from 'react';
import { TestTubes, FileSpreadsheet, AlertTriangle, CheckCircle2 } from 'lucide-react';
import SampleForm from './SampleForm';
import AnalysisResults from './AnalysisResults';
import QualityMetrics from './QualityMetrics';

const AnalyzerDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <TestTubes className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">
                Fertilizer Composition Analyzer
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6">
            <SampleForm />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <AnalysisResults />
          </div>
        </div>
        <div className="mt-6">
          <QualityMetrics />
        </div>
      </main>
    </div>
  );
};

export default AnalyzerDashboard;