import Image from 'next/image'
import React from 'react'
import style from '../styles/Home.module.css'
import ChatIcon from './svgcomponents/ChatIcon'
import CommentIcon from './svgcomponents/CommentIcon'
import FeedIcon from './svgcomponents/FeedIcon'
import PostSaveIcon from './svgcomponents/PostSaveIcon'

const PostItem = ({ item }) => {


    return (
        <div className={style.post}>
            <div className={style.postHeader}>
                <div className={style.postHeaderInfo}>
                    <Image src={item.image} width={"32px"} height={"32px"} className={style.postHeaderImage} />
                    <h5>{item.firstName} {item.lastName}</h5>
                </div>
                <div className={style.postHeaderOptions}>...</div>
            </div>
            <div className={style.postImageContainer}>
                <Image src={item.image} layout='responsive' width={"100%"} height={"100%"} priority />
            </div>
            <div className={style.postFeedback}>
                <div className={style.postFeedbackActions}>
                    <FeedIcon />
                    <CommentIcon />
                    <ChatIcon />
            </div>
                <div className={style.postSave}>
                    <PostSaveIcon />
                </div>
            </div>
        </div>
    )
}

export default PostItem
