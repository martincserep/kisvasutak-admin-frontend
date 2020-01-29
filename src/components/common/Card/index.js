import React from 'react';

import styles from "./Card.module.scss";

import timage from '../../../assets/images/bgimage.jpg';

import { FaEdit } from "react-icons/fa";

const Card = () => {
    return(
      <div className={styles.panel}>
          <div className={styles.imgContainer}>
            <img src={timage} />
          </div>
          <div className={styles.infoContainer}>
            <span className={styles.title}>Lillafüredi Állami Erdei Vasút</span>
            <span className={styles.icon}><FaEdit /></span>
          </div>
      </div>  
    );
}
export default Card;