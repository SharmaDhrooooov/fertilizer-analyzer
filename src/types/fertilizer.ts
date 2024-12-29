export interface FertilizerSample {
  id: string;
  name: string;
  date: string;
  composition: {
    nitrogen: number;
    phosphorus: number;
    potassium: number;
    organic: number;
    moisture: number;
  };
  batchNumber: string;
  status: 'pending' | 'analyzed' | 'failed';
  notes?: string;
}

export interface AnalysisResult {
  isCompliant: boolean;
  deviations: string[];
  recommendations: string[];
  timestamp: string;
}