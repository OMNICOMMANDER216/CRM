const navigationMaker = folders => folders.map(folder => ({
  name: folder.name,
  url: '/folder',
  icon: 'icon-layers',
  children: [
    {
      name: 'Add Board',
      url: `/addBoard/${folder._id}`,
      icon: 'icon-pencil',
    },
    ...folder.boards.map(board => ({
      name: board.name,
      url: `/board/${board._id}`,
    })),
  ],
}));

export default navigationMaker;
