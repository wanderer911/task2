import React from 'react';
import { connect } from 'react-redux';

class ResulstSideContainer extends React.Component {
    constructor(props){
        super(props);
        
    }
    render(){
        const { name,lastName,logo,telephone,email,title,frontBackgroundColor,frontBackgroundImage,companyName,backBackroundColor,backBackgroundImage} = this.props.form;
        return (
            <div>
                <p>{name} <span style={{"margin-left": '5px'}}>{lastName}</span></p>
                <p>{title}</p>
                <p>{telephone}</p>
                <p>{email}</p>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    form: state.form,
    visibility: state.visibility
})


const connectedResulstSideContainer = connect(mapStateToProps)(ResulstSideContainer);
export {connectedResulstSideContainer as ResulstSideContainer};

