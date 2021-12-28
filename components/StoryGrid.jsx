import React, { useRef, useState } from 'react'
import StoryItem from './StoryItem'
import style from '../styles/Home.module.css'
import Chevron from './svgcomponents/Chevron'

const StoryGrid = ({ items }) => {


    const [scrollState, setScrollState] = useState(1);
    const myGrid = useRef();

    const rollLeft = () => {
        myGrid.current.style.transform += "translateX(+348px)";
        setScrollState(scrollState - 1);
    }

    const rollRight = () => {
        myGrid.current.style.transform += "translateX(-348px)";
        setScrollState(scrollState + 1)
    }

    return (
        <div className={style.gridTrack}>
            <div className={style.storiesGrid} ref={myGrid}>
                {items.map(item => {
                    return (
                        <StoryItem Item={item} key={item.id} />
                    )
                })}
            </div>
            {
                scrollState == 1 ? <></> : (
                    <div className={style.sliderLeft} onClick={() => rollLeft()}>
                        <Chevron />
                    </div>
                )
            }

            {
                scrollState == (Math.trunc(items.length / 4)) ? <></> : (
                    <div className={style.sliderRight} onClick={() => rollRight()}>
                        <Chevron />
                    </div>
                )
            }

        </div>

    )
}

export default StoryGrid
