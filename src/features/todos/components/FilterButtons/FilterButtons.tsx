'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/Button/Button';
import { FilterType } from '../../types';
import styles from './FilterButtons.module.css';

export const FilterButtons: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = (searchParams.get('filter') || 'all') as FilterType;

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'すべて' },
    { key: 'active', label: '未完了' },
    { key: 'completed', label: '完了済み' },
  ];

  const handleFilterChange = (filter: FilterType) => {
    const params = new URLSearchParams(searchParams);
    if (filter === 'all') {
      params.delete('filter');
    } else {
      params.set('filter', filter);
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className={styles.filterButtons}>
      {filters.map(({ key, label }) => (
        <Button
          key={key}
          onClick={() => handleFilterChange(key)}
          variant={currentFilter === key ? 'primary' : 'secondary'}
          className={styles.filterButton}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
