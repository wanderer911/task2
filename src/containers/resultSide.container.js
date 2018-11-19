import React from 'react'
import { connect } from 'react-redux'


 class ResulstSideContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {containerClass} = this.props
        const { name, lastName, telephone, email, title, companyName,frontBackgroundColor,backBackroundColor } = this.props.form
        return (
            <div className="right" data-hook="result">
                <div className={containerClass} data-hook="result-front" style={{'backgroundColor': frontBackgroundColor}}>
                    <p data-hook="full-name-text">
                        <span data-hook="first-name-text">{name}</span>
                        <span className="lastName" data-hook="last-name-text">{lastName ? ' ' + lastName : ''}</span>
                    </p>
                    <p data-hook="title-text">{title}</p>
                    <div className="contacts">
                        <p data-hook="telephone-text">{telephone}</p>
                        <p data-hook="email-text">{email}</p>
                    </div>
                </div>
                <div className={containerClass} data-hook="result-back">
                    <p data-hook="companyName-text">{companyName}</p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    form: state.form,
})


const connectedResulstSideContainer = connect(mapStateToProps)(ResulstSideContainer)
export { connectedResulstSideContainer as ResulstSideContainer }