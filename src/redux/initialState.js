const initialState = {
  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out',
    },
    {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum',
    },
  ],

  columns: [
    {
      id: '1',
      listId: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: '2',
      listId: '1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: '3',
      listId: '1',
      title: 'Games',
      icon: 'gamepad',
    },
  ],

  cards: [
    {
      id: '1',
      columnId: '1',
      title: 'The Hobbit',
      isFavorite: false,
    },
    {
      id: '2',
      columnId: '2',
      title: 'Inception',
      isFavorite: false,
    },
    {
      id: '3',
      columnId: '3',
      title: 'The Witcher 3',
      isFavorite: false,
    },
  ]
};

export default initialState;