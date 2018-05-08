import React, { Component } from 'react';


class HobbyList extends Component{


    render(){
        const hobbies = this.props.hobbies.map((data,index) => {
            return(
                <li>{data}</li>
            );
        });


        return(
            <div>
                <h2>My Hobbies:</h2>
                <ul>
                    {hobbies}
                </ul>
            </div>
        );
    }
}


export default HobbyList;