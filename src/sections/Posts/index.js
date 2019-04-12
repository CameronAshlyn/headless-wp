

import React, { Component } from 'react'
import axios from 'axios'

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("http://localhost/wp-json/wp/v2/posts").then(posts => {
            this.setState({
                posts: posts.data
            })
        })
    }
    
    render() {
        return (
            <div>
                {this.state.posts.map(post => (
                    <ul>
                        <li key={post.id}>
                            <h1> {post.title.rendered}</h1>
                            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                           
                        </li>
                        
                    </ul>
                    

                    
                ))}
            </div>
        )
    }
}

export default Posts;