import React from 'react'
import style from '../styles/Home.module.css'
import classNames from 'classnames'
import Image from 'next/image'

const StoryItem = ({ Item }) => {
    return (
        <div className={style.story}>
            <div className={classNames(Item.hasUpdate ? style.highlitedStory : '')}>
                <Image src={Item.imgPath} className={style.storyImage} width={"66px"} height={"66px"} priority />
            </div>
            <span className={style.storyUser}>{Item.accountName.substring(0, 6) + "..."}</span>
        </div>
    )
}

export default StoryItem
