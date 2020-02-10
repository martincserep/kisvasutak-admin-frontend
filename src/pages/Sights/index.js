import React, { Component } from 'react';
import { Container } from "react-grid-system";

import sytles from "./Sights.module.scss";

import TopHeader from '../../components/Header';
import Card from '../../components/common/Card';


import RotateLoader from "react-spinners/RotateLoader";
/**
* @author martincserep
* @function Sights
* */

class Sights extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apiUrl: 'https://kisvasutak-admin.herokuapp.com/sights/' + this.props.match.params.trainId,
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

        
        return(
            <>
                <TopHeader />
                <Container>
                    <div className={sytles.homeContainer}>
                        {/* {Object.keys(items).forEach(item=> (
                            <span>items[item].name</span>
                            // <Card title={item.name} image={item.imgUrl} />
                        ))} */}
                        {items.map(item=> (
                            <Card key={item.key} title={item.value.name} isTrain={false} image={item.value.imgUrl} />
                        ))};
                    </div>
                </Container>
            </>
        );
    }
}
}
export default Sights;