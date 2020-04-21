import React, { Component } from 'react';
import { Container } from "react-grid-system";

import sytles from "./Accomodations.module.scss";

import TopHeader from '../../components/Header';
import Card from '../../components/common/Card';


import RotateLoader from "react-spinners/RotateLoader";
/**
* @author martincserep
* @function Accomodations
* */

class Accomodations extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apiUrl: 'https://kisvasutak-admin.herokuapp.com/allaccomodations/' + this.props.match.params.trainId,
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch(this.state.apiUrl)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            });
    }

render() {
    
    var rawData = this.state.items;
    var isLoaded = this.state.isLoaded;
    var items = [];
        
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
        rawData.forEach(element => {
            if(element[0]){

            } else {

                Object.keys(element).map(item=> {
                    items.push({"key": item, "value": element[item]});
                })
            }
        });

        let accomodations = Object.keys(items).map(item => {
                let current = {"key": item, "value": items[item]}
                return <Card key={current.value.key} title={current.value.value.name} image={current.value.value.imgUrl} isTrain={false} editHref={'/edit/getacc/' + this.props.match.params.trainId + '/' + current.value.key.substr(1)} />
            })

        return(
            <>
                <TopHeader />
                <Container>
                    <div className={sytles.homeContainer}>
                        {accomodations}
                    </div>
                </Container>
            </>
        );
    }

        
    }
}
export default Accomodations;