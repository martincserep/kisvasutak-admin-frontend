import React from 'react';

import styles from "./Card.module.scss";

import PropTypes from 'prop-types';

import { FaEdit } from "react-icons/fa";

const Card = ( props ) => {
  const { image, title } = props
    return(
      <div className={styles.panel}>
          <div className={styles.imgContainer}>
            <img src={image} />
          </div>
          <div className={styles.infoContainer}>
            <span className={styles.title}>{title}</span>
            <a href="trainedit" Link className={styles.icon}><FaEdit /></a>
          </div>
      </div>  
    );
}

Card.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}
export default Card;