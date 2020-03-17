import React, { Component } from 'react';
import { Container } from "react-grid-system";

import styles from "./TrainEdit.module.scss";

import TopHeader from '../../components/Header';


import RotateLoader from "react-spinners/RotateLoader";
import TableItem from '../../components/common/TableItem';
import { Table, TableHead, TableBody, TableHeaderCell, TableRow, TableCell, Heading, Button } from 'evergreen-ui';
import Header from '../../components/Header';
import { FaEdit } from 'react-icons/fa';
import {modifyTrain} from '../../functions/modify';
/**
* @author martincserep
* @function EditPage
* */

class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apiUrl: 'https://kisvasutak-admin.herokuapp.com/' + this.props.match.params.edit + '/' + this.props.match.params.trainId,
            items: [],
            isLoaded: false,
            modfied: {

            },
        }
        this.modify = this.modify.bind(this)
    }

    componentDidMount() {
        fetch(this.state.apiUrl)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                    modfied: json,
                })
            });
    }

    modify() {
        // modifyTrain(this.props.match.params.trainId, this.state.items)
        console.log(this.state.modified)
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
                            <input placeholder="Name" onChange={e=>this.setState({
                                modified: {
                                    ...this.state.modified,
                                    [items.name]:e.target.value
                                }
                            })} className={styles.input} value={this.state.modified.name} type="text" name="name" />
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
                        <button className={styles.button} onClick={()=>this.modify(items)} >Save</button>
                    </div>
                    <Heading size={900}>Stations</Heading>
                    <Table>
                        <TableHead>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Lattitude</TableHeaderCell>
                            <TableHeaderCell>Longitude</TableHeaderCell>
                            <TableHeaderCell><FaEdit /></TableHeaderCell>
                        </TableHead>
                        <TableBody>
                             {items.stations.map(item => {
                                return(
                                    <TableRow key={item.name}> 
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.location.lat}</TableCell>
                                        <TableCell>{item.location.lng}</TableCell>
                                        <TableCell> </TableCell>

                                    </TableRow>
                                )
                            })}
                        <TableRow>
                            <TableCell><input placeholder='name' /></TableCell>
                            <TableCell><input placeholder='lat' /></TableCell>
                            <TableCell><input placeholder='long' /></TableCell>
                            <TableCell><Button>Add</Button></TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </Container>
            </>
        );
    }
}
}
export default Edit;