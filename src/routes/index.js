import Home from '../sections/Home'
import Posts from '../sections/Posts'

export default [
    {
        Component: Home,
        path: {
            path: '/',
            exact: true,
        }
    },
    {
        Component: Posts,
        path: {
            path:`/posts`
        }
    }
]