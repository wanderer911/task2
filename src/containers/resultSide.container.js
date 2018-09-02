import React from 'react'
import { connect } from 'react-redux'

class ResulstSideContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {containerClass} = this.props
        const { name, lastName, logo, telephone, email, title, frontBackgroundColor, frontBackgroundImage, companyName, backBackroundColor, backBackgroundImage } = this.props.form
        return (
            <div className="right" >
                <div className={containerClass} style={{'background-color': frontBackgroundColor, 'background-image': frontBackgroundImage ? `url(${frontBackgroundImage})` : ''}}>
                    {logo &&
                        <img src={logo} className="logo" />}
                    <p>{name} <span className="lastName">{lastName}</span></p>
                    <p>{title}</p>
                    <div className="contacts">
                        <p>{telephone}</p>
                        <p>{email}</p>
                    </div>
                </div>
                <div className={containerClass} style={{'background-color': backBackroundColor, 'background-image': backBackgroundImage ? `url(${backBackgroundImage})` : '' }}>
                    <p>{companyName}</p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    form: state.form,
    visibility: state.visibility
})


const connectedResulstSideContainer = connect(mapStateToProps)(ResulstSideContainer)
export { connectedResulstSideContainer as ResulstSideContainer }

