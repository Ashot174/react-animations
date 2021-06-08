import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'



export const List = ({items, onRemove}) => {

    const nodeRef = React.useRef(null)
    return (
        // <ul>
        //     {items.map(item => (
        //         <li key={item.id} onClick={() => onRemove(item.id)}>{item.title}</li>
        //     ))}
        // </ul>


        <TransitionGroup component={'ul'}>
            {items.map(item => (
                <CSSTransition
                    classNames={'os'}
                    timeout={750}
                    key={item.id}
                    nodeRef={nodeRef}
                >
                    <li ref={nodeRef} key={item.id} onClick={() => onRemove(item.id)}>{item.title}</li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}
