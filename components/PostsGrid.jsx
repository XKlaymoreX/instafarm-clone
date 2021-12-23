import React from 'react'
import style from '../styles/Home.module.css'
import PostItem from './PostItem'

const PostsGrid = ({items}) => {
    console.log(items)
    return (
        <div className={style.postsGrid}>
            {items.map(item => { 
                return (
                    <PostItem item={item} key={item.accountId}/>
                )
            })}
        </div>
    )
}

export default PostsGrid
