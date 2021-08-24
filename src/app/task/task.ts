export interface Task {
  id?: string;
  title: string;
  description: string;
}
export interface TaskDialogData {
  periodicElement: Partial<PeriodicElement>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  periodicElement: PeriodicElement;
  delete?: boolean;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  content:string;
}