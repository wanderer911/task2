import React from 'react'
import Button from 'wix-style-react/Button'

export class LeftSideContainer extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { props:{onFinalClick }} = this
        return (<div className="left" data-hook="left">
            <div className="margin-top20 ">
                <Button onClick={onFinalClick} dataHook="finish-button">Finish</Button>
            </div>
        </div>)
    }
}


