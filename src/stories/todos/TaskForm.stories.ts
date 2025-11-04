import type { Meta, StoryObj } from '@storybook/react';
import { TaskForm } from '@/features/todos/components/TaskForm/TaskForm';

const meta: Meta<typeof TaskForm> = {
  title: 'Features/Todos/Components/TaskForm',
  component: TaskForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
