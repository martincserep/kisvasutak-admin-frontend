import React, { Component } from 'react';
import { Container } from "react-grid-system";

import styles from "./TrainEdit.module.scss";

import TopHeader from '../../components/Header';


import RotateLoader from "react-spinners/RotateLoader";
/**
* @author martincserep
* @function Accomodations
* */

class Accomodations extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apiUrl: 'http://localhost:8080/gettrain/' + this.props.match.params.trainId,
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
                <div className={styles.middle}>
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
                items = element;
            }
        });

        console.log(items)        
        return(
            <>
                <TopHeader />
                <Container>
                    <div className={styles.formContainer}>
                        <span className={styles.title}>{items.name}</span>
                        <label className={styles.label}>Name</label>
                            <input placeholder="Name" className={styles.input} value={items.name} type="text" name="name" />
                        <label className={styles.label}>Image</label>
                            <input placeholder="Image" className={styles.input} value={items.imgUrl} type="url" name="image" />
                        <label className={styles.label}>Pricing</label>
                            <input placeholder="Pricing" className={styles.input} value={items.pricingUrl} type="url" name="pricing" />
                        <label className={styles.label}>Schedule</label>
                            <input placeholder="Schedule" className={styles.input} value={items.scheduleUrl} type="url" name="schedule" />
                        <label className={styles.label}>Description</label>
                            <textarea placeholder="Description" className={styles.textboxinput} value={items.description} name="description"  />
                        <label className={styles.label}>Events</label>
                            <input placeholder="Events" className={styles.input} value={items.eventsUrl} type="url" name="events" />
                        <label className={styles.label}>Actual Events</label>
                            <input placeholder="Actual Events" className={styles.input} value={items.actualEventsUrl} type="url" name="actualEvents" />
                        <label className={styles.label}>Additional</label>
                            <input placeholder="Additional" className={styles.input} value={items.additionalUrl} type="url" name="additional" />
                        <button className={styles.button} type="submit">Save</button>
                    </div>
                </Container>
            </>
        );
    }
}
}
export default Accomodations;