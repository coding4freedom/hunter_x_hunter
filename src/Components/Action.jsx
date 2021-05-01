import React, { Component } from 'react'

import styles from "./action.module.css";

export default class Action extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            nen: ['enhancement', 'transmutation', 'conjuration', 'emission', 'manipulation', 'specialization'],
        }
    }
    

    render() {
        function getRando(maxNum) {
            return Math.floor(Math.random() * maxNum);
        }

        return (
            <div className={styles.layout}>
                <input
                    className={styles.actionInput} 
                    type="text"
                    placeholder="Enter your name here!"
                    onChange={(e) => this.setState({userInput: e.target.value})}
                />
                <button className={styles.actionBtn}>
                    Activate your Nen Click Here!!
                </button>
            </div>
        )
    }
}
