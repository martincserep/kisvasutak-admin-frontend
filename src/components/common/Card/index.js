import React from "react"

import styles from "./Card.module.scss"

import PropTypes from "prop-types"

import { FaEdit, FaHome, FaBinoculars } from "react-icons/fa"

const Card = (props) => {
  const { image, title, accomHref, sightsHref, editHref, isTrain } = props
  return (
    <div className={styles.panel}>
      <div className={styles.imgContainer}>
        <img alt={title} src={image} />
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.title}>{title}</span>
        {isTrain ? (
          <a href={accomHref} className={styles.icon}>
            <FaHome />
          </a>
        ) : (
          ""
        )}
        <a href={editHref} className={styles.icon}>
          <FaEdit />
        </a>
        {isTrain ? (
          <a href={sightsHref} className={styles.icon}>
            <FaBinoculars />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  accomHref: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sightsHref: PropTypes.string,
  editHref: PropTypes.string,
  isTrain: PropTypes.bool.isRequired,
}
export default Card
