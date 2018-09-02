import React from 'react'
import { connect } from 'react-redux'

class ResulstSideContainer extends React.Component {
    constructor(props){
        super(props)
    }
    //
    render(){
        const { name,lastName,logo,telephone,email,title,frontBackgroundColor,frontBackgroundImage,companyName,backBackroundColor,backBackgroundImage} = this.props.form
        return (
            <div className="right" >
                <div style={{width:'400px',height:'250px',margin:'20px 0 20px 0',
                'background-color':frontBackgroundColor,border:'1px solid black','background-image':frontBackgroundImage?`url(${frontBackgroundImage})`:''}}>
                    {logo&& 
                        <img src={logo} style={{height:'100px',width:'150px',float:'left'}}/>}
                    <p>{name} <span style={{'margin-left': '5px'}}>{lastName}</span></p>
                    <p>{title}</p>
                    <div style={{clear:'both','margin-top':'50px'}}>
                        <p>{telephone}</p>
                        <p>{email}</p>
                    </div>
                </div>
                <div style={{width:'400px',height:'250px','background-color':backBackroundColor,border:'1px solid black','background-image':backBackgroundImage?`url(${backBackgroundImage})`:''}}>
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
export {connectedResulstSideContainer as ResulstSideContainer}

