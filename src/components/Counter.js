import React from 'react';
import { observer, inject } from 'mobx-react'

class Counter extends React.Component {

    renderListOfAchievments() {
        return(
            <ul>
                {this.props.store.AchievmentsStore.listOfAchievments.map(acv => {
                    let s = acv.status ? 'done' : 'x';
                    return (
                        <li key={acv.id}>
                            {acv.text} { s} 
                        </li>
                    )
                })}
            </ul>
        )
    }
    
    render() {
        return (
            <div>
                <p>{this.props.store.ClickStore.numberOfClicks}</p>
                <p>{this.props.store.ClickStore.numberOfLevel}</p>
                {this.renderListOfAchievments()}
            </div>
        )
    }
}

export default inject('store') (observer(Counter))