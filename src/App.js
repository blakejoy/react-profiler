import React, { Component } from 'react';
import './App.css';
import ProfileSection from './ProfileSection';
import HobbyList from "./HobbyList";




class App extends Component {
    render() {
        return (
            <div className="App">

                <ProfileSection name= {this.props.data.name}
                                imgUrl={this.props.data.imgUrl} />
                <HobbyList hobbies={this.props.data.hobbies}/>
            </div>
        );
    }
}



export default App;
