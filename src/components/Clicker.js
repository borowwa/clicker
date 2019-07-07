import React from 'react';
import { observer, inject } from 'mobx-react'
import {  decorate, action, observable } from 'mobx'

class Clicker extends React.Component {
    componentDidMount() {
        this.showNotification = false;
        this.props.store.AchievmentsStore.loadAchievments();
        this.props.store.AchievmentsStore.setTime1();
        
        this.props.store.AchievmentsStore.onChangeListener = () => {
            this.showNotification = true;
            setTimeout(() => {
                this.showNotification = false;
            }, 1000);
        }
        console.log(this.props.store.AchievmentsStore)
            
    }
    
    increaseClicker = () => {
        const {store : { ClickStore : { addClick }}} = this.props
        const {store : { ClickStore : { numberOfClicks }}} = this.props
        const {store : { AchievmentsStore : { checkHowFast }}} = this.props
        const {store : { AchievmentsStore : { checkHowMany }}} = this.props
        addClick();
        checkHowFast();
        checkHowMany(numberOfClicks);
    }
    
    render() {
        return (
            <div>
                <button onClick={ this.increaseClicker }>Clicker</button>
                { this.showNotification ? <p>NewAchievment!</p> : <p>No Notification</p> }
            </div>
        )
    }
}
decorate(Clicker, {
    increaseClicker : action,
    showNotification : observable
  })

export default inject('store') (observer(Clicker))