export function getRecentPosts(app){
    const posts=app.service('posts');
    return posts.get().then((data,err)=>data.data);
}

export function createUser(app,name,email,password){
    const users =app.service('users');
    return users.create({
        name,
        email,
        password
    }).then((data,err)=> data);

}

export function createProfile(app,avatar,backgroundphoto,description){
    const Profile =app.service('Profile');
    return Profile.create({
        avatar,
        backgroundphoto,
        description
    }).then((data,err)=> data);
}

export function addPost(app,message,video,audio,image){
    const Post =app.service('Post');
    return Post.create({
        message,
        video,
        audio,
        image
    }).then((data,err)=> data);
}