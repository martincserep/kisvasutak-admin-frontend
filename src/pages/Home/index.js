import React, { Component } from 'react';
import { Container } from "react-grid-system";

import sytles from "./Home.module.scss";

import TopHeader from '../../components/Header';
import Card from '../../components/common/Card';


import RotateLoader from "react-spinners/RotateLoader";

import * as firebase from 'firebase';

/**
* @author martincserep
* @function Home
* */

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ userId: user.uid });
                let apiUrl = 'https://kisvasutak-admin.herokuapp.com/trains/' + user.uid
                fetch(apiUrl)
                    .then(res => res.json())
                    .then(json => {
                        this.setState({
                            items: json,
                            isLoaded: true,
                        })
                    });
			} else {
             console.log('You are not logged in.')   
			}
			
        });
    }
    render() {

    
    var rawData = this.state.items;
    var isLoaded = this.state.isLoaded;
    var items = [];
    var trainId = '';
        
    if (!isLoaded) {
        return(
            <>
                <div className={sytles.middle}>
                    <RotateLoader
                        size={50}
                        margin={30}
                        />
                </div>
                <TopHeader />

            </>
        );
    } else {
        let trains = Object.keys(rawData).map(item => {
            let current = {"key": item, "value": rawData[item]}
            return <Card key={current.value.key} title={current.value.value.name} image={current.value.value.imgUrl} isTrain={true} editHref={'edit/gettrain/' + current.value.key.substr(1)} accomHref={'/accomodations/'+current.value.key.substr(1)} sightsHref={'/sights/'+current.value.key.substr(1)} />
        })

        return(
            <>
                <TopHeader />
                <Container>
                    <div className={sytles.homeContainer}>
                        {trains}
                    </div>
                </Container>
            </>
        );
    }
}
}
export default Home;