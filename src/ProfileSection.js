import React, { Component } from 'react';



class ProfileSection extends Component{


    render(){
        return(
            <header>
                <h1>{this.props.name}</h1>
                <img src={this.props.imgUrl} />
            </header>
        );
    }
}



export default ProfileSection;
