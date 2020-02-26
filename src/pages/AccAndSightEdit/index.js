import React, { Component } from 'react';
import { Container } from "react-grid-system";

import styles from "./AccAndSightEdit.module.scss";

import TopHeader from '../../components/Header';


import RotateLoader from "react-spinners/RotateLoader";
/**
* @author martincserep
* @function AccAndSightEdit
* */

class AccAndSightEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apiUrl: 'https://kisvasutak-admin.herokuapp.com/' + this.props.match.params.edit + '/' + this.props.match.params.trainId + '/' + this.props.match.params.id,
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
                <TopHeader />
                <div className={styles.middle}>
                    <RotateLoader
                        size={50}
                        margin={30}
                        />
                </div>

            </>
        );
    } else {
        rawData.forEach(element => {
            if(element[0]){

            } else {
                items = element;
            }
        });   
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
                        <label className={styles.label}>Description</label>
                            <textarea placeholder="Description" className={styles.textboxinput} value={items.description} name="description"  />
                        <label className={styles.label}>Additional URL</label>
                            <input placeholder="Additional" className={styles.input} value={items.additionalUrl} type="url" name="additionalUrl" />
                        <button className={styles.button} type="submit">Save</button>
                    </div>
                </Container>
            </>
        );
    }
}
}
export default AccAndSightEdit;
