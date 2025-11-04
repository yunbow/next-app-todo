import type { Meta, StoryObj } from '@storybook/react';
import { TaskItem } from '@/features/todos/components/TaskItem/TaskItem';

const meta: Meta<typeof TaskItem> = {
  title: 'Features/Todos/Components/TaskItem',
  component: TaskItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    task: {
      id: 1,
      text: '買い物に行く',
      completed: false,
      createdAt: new Date(),
    },
  },
};

export const Completed: Story = {
  args: {
    task: {
      id: 2,
      text: '宿題をやる',
      completed: true,
      createdAt: new Date(),
    },
  },
};

export const LongText: Story = {
  args: {
    task: {
      id: 3,
      text: 'とても長いタスクの説明文。この文章は複数行にわたって表示される可能性があります。',
      completed: false,
      createdAt: new Date(),
    },
  },
};
