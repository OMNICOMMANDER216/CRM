const navigationMaker = (folders) => {
   return folders.map(folder => {
        return {
            name: folder.name,
            url: '/folder',
            icon: 'icon-layers',
            children: [
                {
                    name: 'Add Board',
                    url: `/addBoard/${folder._id}`,
                    icon: 'icon-pencil',
                },
                ...folder.boards.map(board => {
                return {
                    name: board.name,
                    url: '/board/'+ board._id
                };
            })]
        };
    });
};

export default navigationMaker;