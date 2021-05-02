import React, { Component } from 'react'

import styles from "./action.module.css";

function getRando(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

export default class Action extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            randomNen: '',
            isBtnDisabled: false,
            nen: ['enhancement', 'transmutation', 'conjuration', 'emission', 'manipulation', 'specialization'],
        }
    }
    
    assignNen = () => {
        this.setState({
            isBtnDisabled: true,
        })
        this.state.randomNen = getRando(this.state.nen.length);
        alert(
            `The Hunter ${this.state.userInput} is a ${this.state.nen[this.state.randomNen]}
            `);
    }

    render() {
        

        return (
            <div className={styles.layout}>
                <input
                    className={styles.actionInput} 
                    type="text"
                    placeholder="Enter your name here!"
                    onChange={(e) => this.setState({userInput: e.target.value})}
                />
                <button 
                    className={styles.actionBtn}
                    type="submit"
                    disabled={this.state.isBtnDisabled}
                    onClick={this.assignNen}
                >
                    Activate your Nen Click Here!!
                </button>

            </div>
        )
    }
}
