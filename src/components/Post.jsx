import React from 'react'
import { connect } from 'react-redux'

const Post = (props) => {
  console.log(props.posts)
  return (
    <div className='flex gap-3 flex-wrap'>
      {props.posts.map((post) => (
        <div className='p-4 shadow-md w-1/3' key={post.id}>
          <p>id : {post.id}</p>
          <p>title : {post.title}</p>
          <p>desc : {post.desc}</p>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Post)
