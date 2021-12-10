import React from 'react'
import style from '../styles/Home.module.css'
import classNames from 'classnames'

const StoryItem = ({Item}) => {
    return (
        <div className={style.story}>
           <img src={'/media/cristian-hoza.jpg'} className={classNames(style.storyImage, Item.hasUpdate ? style.highlitedStory : '')} />
           <span  className={style.storyUser}>{Item.accountName.substring(0, 6) + "..."}</span>
        </div>
    )
}

export default StoryItem
