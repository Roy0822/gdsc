export let id = 1;
export const initialTasks = [
  {
    id: id++,
    name: 'Example',
    done: 0,
    description: 'This is an example task',
    subtasks: [
      {
        id: id++,
        name: 'Subtask 1',
        done: 0,
        description: 'This is a subtask',
        subtasks: [],
        labels: ['data structure', 'homework']
      },
      {
        id: id++,
        name: 'Subtask 2',
        done: 0,
        description: 'This is another subtask',
        subtasks: [],
        labels: ['test', 'math']
      },
      {
        id: id++,
        name: 'Subtask 3',
        done: 0,
        description: 'This is a subtask yooo~',
        subtasks: [],
        labels: ['ML', 'self-study']
      },

    ],
  },
  {
    id: id++,
    name: 'Another Example',
    done: 0,
    description: 'This is another example task',
    subtasks: [
      {
        id: id++,
        name: 'Subtask 1',
        done: 0,
        description: 'This is a subtask',
        subtasks: [],
        labels: ['VLSI', 'study']
      },
      {
        id: id++,
        name: 'Subtask 2',
        done: 0,
        description: 'This is another subtask',
        subtasks: [],
        labels: ['calculus', 'homework']
      },
    ],
    labels: ['project', 'collaborate']
  },
  {
    id: id++,
    name: 'Yet Another Example',
    done: 0,
    description: 'This is yet another example task',
    subtasks: [],
    labels: ['project', 'collaborate']
  },
];