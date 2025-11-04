'use client';

import { useState } from 'react';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { addTask } from '../../actions';
import styles from './TaskForm.module.css';

export const TaskForm: React.FC = () => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = async () => {
    const trimmedText = taskText.trim();
    if (trimmedText !== '') {
      await addTask(trimmedText);
      setTaskText('');
    }
  };

  const handleKeyPress = (key: string) => {
    if (key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={styles.taskForm}>
      <Input
        value={taskText}
        onChange={setTaskText}
        placeholder="新しいタスクを入力..."
        onKeyPress={handleKeyPress}
        className={styles.input}
      />
      <Button onClick={handleSubmit} className={styles.button}>
        追加
      </Button>
    </div>
  );
};
