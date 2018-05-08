import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const data = {
    name: 'Blake Joynes',
    imgUrl: 'http://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/547/981/datas/profile.jpg',
    hobbies: ['Back End Web Development','iOS Development','Front End Web Development','Gaming']

};

ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
