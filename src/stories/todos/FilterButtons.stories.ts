import type { Meta, StoryObj } from '@storybook/react';
import { FilterButtons } from '@/features/todos/components/FilterButtons/FilterButtons';

const meta: Meta<typeof FilterButtons> = {
  title: 'Features/Todos/Components/FilterButtons',
  component: FilterButtons,
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
