import React from 'react';
import Typography from '@material-ui/core/Typography';


const Post =({ match, data}) => {
    let post = data.find(p => p.id == match.params.postId)
    return(
        <div>
            <div style={{ marginTop: 150, paddingTop:50 }}>
                <Typography variant="caption">Post #{post.id}</Typography>
                <Typography variant="h2">{post.title}</Typography>
                <img src={post.image} alt="Post" />
                <Typography variant="body">{post.text}</Typography>
            </div>
        </div>
    )
}


export default Post;