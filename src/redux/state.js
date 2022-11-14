let state = {
profilePage: {
    posts: [
        {id:1, message: 'Hi', likeCount: 25},
        {id:2, message: 'How are you?', likeCount: 20},
        {id:3, message: 'Yo', likeCount: 15},
        {id:4, message: 'Yo', likeCount: 10},
    ]
},
dialogsPage: {
    dialogs: [
        {"id":1, "name": "Vova"},
        {"id":2, "name": "Anya"},
        {"id":3, "name": "Serg"},
        {"id":4, "name": "Bob"},
        {"id":5, "name": "Tom"}
      ]

},
sidebar: {}
}

export let addPost = (postMessage) => {


    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 0

    };

    state.profilePage.posts.push(newPost);
}

export default state;