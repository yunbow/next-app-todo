// TODO機能固有の型定義

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';
