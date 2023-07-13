import './Info.css'
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

function About() {
    return (
        <div className="header">
            
            <h1 className='heading'>Home</h1>
            
            <div className='heading'>
                <h2 className='inline'>
                    Members of Sarvalagu percussion center banded together to start an initiative to feed the homeless in areas around the Bay Area.
                </h2>
                <h2 className='inline'> 
                    This initiative started after inspirational conversations resonating with the theme of immediacy in service.
                </h2>
                <h2 className='inline'>
                    Please contact us at ___@gmail.com for more information on how to get involved.

                </h2>
            </div>
        </div>
    );
}

export default About;
