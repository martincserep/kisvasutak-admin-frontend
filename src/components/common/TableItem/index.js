import React from "react";

import PropTypes from "prop-types";

const TableItem = (props) => {
  const { lat, lng, name } = props;
  return (
    <>
      {lat}
      {lng}
      {name}
    </>
  );
};

TableItem.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default TableItem;
