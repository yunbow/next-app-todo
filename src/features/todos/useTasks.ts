'use client';

import { useState, useEffect } from 'react';
import { Task, FilterType } from './types';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks).map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt),
      }));
      setTasks(parsedTasks);
    }
  }, []);

  const saveTasks = (updatedTasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    const updatedTasks = [...tasks, newTask];
    saveTasks(updatedTasks);
  };

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    saveTasks(updatedTasks);
  };

  const clearCompleted = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    saveTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'active') return !task.completed;
    if (currentFilter === 'completed') return task.completed;
    return true;
  }).sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  const activeTaskCount = tasks.filter(task => !task.completed).length;

  return {
    tasks: filteredTasks,
    currentFilter,
    activeTaskCount,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
    setCurrentFilter,
  };
};
