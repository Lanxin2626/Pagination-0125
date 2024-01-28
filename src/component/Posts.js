import React from "react";
//state is mutable
//pros is read only and immutable
//父传子 pros
//子穿父 callback
//跨组件传递数据 redux context useRedux useContext
//hooks 不能在if statement， while
const Posts = ({currentPosts, loading}) => {
    if(loading){
        return <h2>is Loading...</h2>
    }
    return <ul
    className="list-group">
        {currentPosts.map(post=>(
            <li key={post.id} className="list-group-item">{post.title}</li>
        ))
        }
    </ul>;
}
export default Posts;