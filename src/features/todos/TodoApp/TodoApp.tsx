import { Suspense } from 'react';
import { TaskForm } from '../components/TaskForm/TaskForm';
import { FilterButtons } from '../components/FilterButtons/FilterButtons';
import { TaskItem } from '../components/TaskItem/TaskItem';
import { TaskCounter } from '../components/TaskCounter/TaskCounter';
import { getTasks, getActiveTaskCount } from '../actions';
import { FilterType } from '../types';
import styles from './TodoApp.module.css';

interface TodoAppProps {
  searchParams?: { filter?: string };
}

export const TodoApp: React.FC<TodoAppProps> = async ({ searchParams }) => {
  const filter = (searchParams?.filter || 'all') as FilterType;
  const allTasks = await getTasks();
  const activeTaskCount = await getActiveTaskCount();

  const filteredTasks = allTasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Doリスト</h1>

      <TaskForm />

      <Suspense fallback={<div>読み込み中...</div>}>
        <FilterButtons />
      </Suspense>

      <ul className={styles.taskList}>
        {filteredTasks.length === 0 ? (
          <li className={styles.emptyMessage}>タスクがありません</li>
        ) : (
          filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))
        )}
      </ul>

      <TaskCounter activeCount={activeTaskCount} />
    </div>
  );
};
