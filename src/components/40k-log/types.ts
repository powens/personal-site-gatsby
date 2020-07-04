export enum ProgressStatus {
  START = 'start',
  ASSEMBLED = 'assembled',
  PAINT = 'paint',
  DONE = 'done',
}

export interface ProgressStep {
  numDone: number;
  numTotal: number;
  name: string;
  notes?: string;
  status: string;
}
