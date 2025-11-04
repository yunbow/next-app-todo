'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';

export async function getTasks() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });
  return tasks;
}

export async function addTask(text: string) {
  await prisma.task.create({
    data: {
      text,
    },
  });
  revalidatePath('/');
}

export async function toggleTask(id: number) {
  const task = await prisma.task.findUnique({
    where: { id },
  });

  if (task) {
    await prisma.task.update({
      where: { id },
      data: {
        completed: !task.completed,
      },
    });
    revalidatePath('/');
  }
}

export async function deleteTask(id: number) {
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath('/');
}

export async function clearCompleted() {
  await prisma.task.deleteMany({
    where: {
      completed: true,
    },
  });
  revalidatePath('/');
}

export async function getActiveTaskCount() {
  const count = await prisma.task.count({
    where: {
      completed: false,
    },
  });
  return count;
}
