import React, { Component } from 'react'
import { Props, State } from "../type"
export default class LifeCycleB extends Component {
    constructor(props: Props) {
        super(props)
        this.state = {
            name: "Raman saini"
        }
        console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props: Props, state: State) {
        console.log("LifecycleA getDerivedStateFromProps ")
        return null;
    }
    componentDidMount(): void {
        console.log("LifeCycleB componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycleB shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null;

    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("LifeCycleB componentDidUpdate")
    }
    changeState = () => {
        this.setState({
            name: "codeevolution"
        })
    }
    render() {
        console.log('lifecycle B render ')
        return (
            <>
                Lifecycle B
                <button onClick={this.changeState}>Change state</button>

            </>
        )
    }
}


