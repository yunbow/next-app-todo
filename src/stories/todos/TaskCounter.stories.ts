import type { Meta, StoryObj } from '@storybook/react';
import { TaskCounter } from '@/features/todos/components/TaskCounter/TaskCounter';

const meta: Meta<typeof TaskCounter> = {
  title: 'Features/Todos/Components/TaskCounter',
  component: TaskCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NoTasks: Story = {
  args: {
    activeCount: 0,
  },
};

export const SingleTask: Story = {
  args: {
    activeCount: 1,
  },
};

export const MultipleTasks: Story = {
  args: {
    activeCount: 5,
  },
};
