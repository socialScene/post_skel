export function recentPost() {
    return  {
        type: 'RECENT_POST_REQUESTED'
    }
}

export function Post(message,video,audio,image){
    return {
        type:'ADD_POST_REQUESTED',
        message,
        video,
        audio,
        image,
    }
}


        
        
        