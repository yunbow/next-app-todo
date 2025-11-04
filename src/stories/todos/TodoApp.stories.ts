import type { Meta, StoryObj } from '@storybook/react';
import { TodoApp } from '@/features/todos/TodoApp/TodoApp';

const meta: Meta<typeof TodoApp> = {
  title: 'Features/Todos/TodoApp',
  component: TodoApp,
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
