import React from 'react'

export class BackgroundContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const {  imageType } = this.props
        return (
            <div data-hook={imageType}>
                Hello background component
            </div>
        )
    }
}