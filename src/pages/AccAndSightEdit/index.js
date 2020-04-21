import React, { Component } from "react";
import { Container } from "react-grid-system";

import styles from "./AccAndSightEdit.module.scss";

import TopHeader from "../../components/Header";

import RotateLoader from "react-spinners/RotateLoader";
import { modifySight, modifyAcc } from "../../functions/modify";
/**
 * @author martincserep
 * @function AccAndSightEdit
 * */

class AccAndSightEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl:
        "https://kisvasutak-admin.herokuapp.com/" +
        this.props.match.params.edit +
        "/" +
        this.props.match.params.trainId +
        "/" +
        this.props.match.params.id,
      type: this.props.match.params.edit,
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(this.state.apiUrl)
      .then((res) => res.json())
      .then((json) => {
        console.debug("json", json[0]);
        this.setState(
          {
            items: json[0],
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
  modify() {
    if (this.state.type === "getacc") {
      modifyAcc(
        this.props.match.params.trainId,
        this.props.match.params.id,
        this.state.items
      );
    } else if (this.state.type === "getsight") {
      modifySight(
        this.props.match.params.trainId,
        this.props.match.params.id,
        this.state.items
      );
    }
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
                  name='name'
                  value={this.state.items.name}
                  placeholder='Name'
                  onChange={(e) =>
                    this.setState({
                      items: {
                        ...this.state.items,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                  className={styles.input}
                  type='text'
                  name='name'
                />
                <label className={styles.label}>Image</label>
                <input
                  placeholder='Image'
                  className={styles.input}
                  value={this.state.items.imgUrl}
                  type='url'
                  name='image'
                />
                <label className={styles.label}>Description</label>
                <textarea
                  placeholder='Description'
                  className={styles.textboxinput}
                  value={this.state.items.description}
                  name='description'
                />
                <label className={styles.label}>Additional</label>
                <input
                  placeholder='Additional'
                  className={styles.input}
                  value={this.state.items.additionalUrl}
                  type='url'
                  name='additional'
                />
                <button
                  className={styles.button}
                  onClick={() => this.modify(this.state.items)}>
                  Save
                </button>
              </div>
            </Container>
          </>
        ) : null}
      </>
    );
  }
}
export default AccAndSightEdit;
