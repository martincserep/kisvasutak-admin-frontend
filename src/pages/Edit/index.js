import React, { Component } from "react";
import { Container } from "react-grid-system";

import styles from "./TrainEdit.module.scss";

import TopHeader from "../../components/Header";

import {
  Table,
  TableHead,
  TableBody,
  TableHeaderCell,
  TableRow,
  TableCell,
  Heading,
  Button,
} from "evergreen-ui";
import { FaTrashAlt } from "react-icons/fa";
import { modifyTrain } from "../../functions/modify";
import EditableLabel from "react-inline-editing";
/**
 * @author martincserep
 * @function EditPage
 * */

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl:
        "https://kisvasutak-admin.herokuapp.com/" +
        this.props.match.params.edit +
        "/" +
        this.props.match.params.trainId,
      items: [],
      isLoaded: false,
      newName: "",
      newLat: "",
      newLong: "",
    };
    this.modify = this.modify.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleFocusOut = this._handleFocusOut.bind(this);
  }

  componentDidMount() {
    fetch(this.state.apiUrl)
      .then((res) => res.json())
      .then((json) => {
        console.debug("json", json[1]);
        this.setState(
          {
            items: json[1],
            modfied: json,
          },
          () => {
            this.setState({
              isLoaded: true,
            });
          }
        );
      });
  }

  _handleFocus(text) {
    console.log("Focused with text: " + text);
  }

  _handleFocusOut(text) {
    console.log("Left editor with text: " + text);
  }

  modify() {
    modifyTrain(this.props.match.params.trainId, this.state.items);
    // console.log(this.state.items)
  }
  addToList() {
    if (
      this.state.newName.length < 1 ||
      this.state.newLat.length < 1 ||
      this.state.newLong.length < 1
    ) {
      alert("Nincs minden adat kitöltve");
    } else {
      let items = this.state.items;
      let stations = this.state.items.stations;
      let newLocation = {
        location: { lat: this.state.newLat, long: this.state.newLong },
        name: this.state.newName,
      };
      stations.push(newLocation);
      items.stations = stations;
      this.setState({ items: items });
      this.setState({ newName: "", newLat: "", newLong: "" });
      this.modify();
    }
  }
  removeFromStations(stationName) {
    let items = this.state.items;
    let stations = this.state.items.stations;
    stations.forEach((current) => {
      if (current.name === stationName) {
        let index = stations.indexOf(current);
        stations.splice(index, 1);
      }
    });
    items.stations = stations;
    this.setState({ items: items });
    this.modify();
  }
  render() {
    return (
      <>
        {this.state.isLoaded ? (
          <>
            <TopHeader />
            <Container>
              <div className={styles.formContainer}>
                <span className={styles.title}>{this.state.items.name}</span>
                <label className={styles.label}>Name</label>
                <input
                  name="name"
                  value={this.state.items.name}
                  placeholder="Name"
                  onChange={(e) =>
                    this.setState({
                      items: {
                        ...this.state.items,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                  className={styles.input}
                  type="text"
                  name="name"
                />

                <label className={styles.label}>Image</label>
                <input
                  placeholder="Image"
                  className={styles.input}
                  value={this.state.items.imgUrl}
                  type="url"
                  name="image"
                />
                <label className={styles.label}>Pricing</label>
                <input
                  placeholder="Pricing"
                  className={styles.input}
                  value={this.state.items.pricingUrl}
                  type="url"
                  name="pricing"
                />
                <label className={styles.label}>Schedule</label>
                <input
                  placeholder="Schedule"
                  className={styles.input}
                  value={this.state.items.scheduleUrl}
                  type="url"
                  name="schedule"
                />
                <label className={styles.label}>Description</label>
                <textarea
                  placeholder="Description"
                  className={styles.textboxinput}
                  value={this.state.items.description}
                  name="description"
                />
                <label className={styles.label}>Events</label>
                <input
                  placeholder="Events"
                  className={styles.input}
                  value={this.state.items.eventsUrl}
                  type="url"
                  name="events"
                />
                <label className={styles.label}>Actual Events</label>
                <input
                  placeholder="Actual Events"
                  className={styles.input}
                  value={this.state.items.actualEventsUrl}
                  type="url"
                  name="actualEvents"
                />
                <label className={styles.label}>Additional</label>
                <input
                  placeholder="Additional"
                  className={styles.input}
                  value={this.state.items.additionalUrl}
                  type="url"
                  name="additional"
                />
                <button
                  className={styles.button}
                  onClick={() => this.modify(this.state.items)}
                >
                  Save
                </button>
              </div>
              <Heading size={900}>Stations</Heading>
              <Table>
                <TableHead>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Lattitude</TableHeaderCell>
                  <TableHeaderCell>Longitude</TableHeaderCell>
                  <TableHeaderCell>Remove</TableHeaderCell>
                </TableHead>
                <TableBody>
                  {this.state.items.stations.map((item) => {
                    return (
                      <TableRow key={item.name}>
                        <TableCell>
                          <EditableLabel
                            text={item.name}
                            labelClassName="myLabelClass"
                            inputClassName="myInputClass"
                            inputWidth="200px"
                            inputHeight="25px"
                            inputMaxLength="50"
                            inputFontWeight="bold"
                            onFocus={this._handleFocus}
                            onFocusOut={this._handleFocusOut}
                          />
                        </TableCell>
                        <TableCell>
                          <EditableLabel
                            text={item.location.lat}
                            labelClassName="myLabelClass"
                            inputClassName="myInputClass"
                            inputWidth="200px"
                            inputHeight="25px"
                            inputMaxLength="50"
                            inputFontWeight="bold"
                            onFocus={this._handleFocus}
                            onFocusOut={this._handleFocusOut}
                          />
                        </TableCell>
                        <TableCell>
                          <EditableLabel
                            text={item.location.lng}
                            labelClassName="myLabelClass"
                            inputClassName="myInputClass"
                            inputWidth="200px"
                            inputHeight="25px"
                            inputMaxLength="50"
                            inputFontWeight="bold"
                            onFocus={this._handleFocus}
                            onFocusOut={this._handleFocusOut}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() => this.removeFromStations(item.name)}
                          >
                            <FaTrashAlt />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow>
                    <TableCell>
                      <input
                        placeholder="name"
                        onChange={(e) =>
                          this.setState({ newName: e.target.value })
                        }
                        id="newName"
                        value={this.state.newName}
                        name="newName"
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        placeholder="lat"
                        onChange={(e) =>
                          this.setState({ newLat: e.target.value })
                        }
                        id="newLat"
                        value={this.state.newLat}
                        name="newLat"
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        placeholder="long"
                        onChange={(e) =>
                          this.setState({ newLong: e.target.value })
                        }
                        id="newLong"
                        value={this.state.newLong}
                        name="newLong"
                      />
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => this.addToList()}>Add</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Container>
          </>
        ) : null}
      </>
    );
  }
}
export default Edit;
