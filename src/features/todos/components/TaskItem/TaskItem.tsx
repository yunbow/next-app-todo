'use client';

import { Button } from '@/components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { toggleTask, deleteTask } from '../../actions';
import { Task } from '../../types';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const handleToggle = async () => {
    await toggleTask(task.id);
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
  };

  return (
    <li className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
      <Checkbox
        checked={task.completed}
        onChange={handleToggle}
      />
      <span className={styles.taskText}>{task.text}</span>
      <Button
        onClick={handleDelete}
        variant="danger"
        className={styles.deleteButton}
      >
        削除
      </Button>
    </li>
  );
};
