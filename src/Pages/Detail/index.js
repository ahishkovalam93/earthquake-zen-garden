import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import { createDateTime } from "../../utils/utilFunctions";
import "./styles.scss";

/*
 * Detail Component
 * Renders Title, Magnitude, Time, Status, Tsunami, Type in a Grid
 */

const createDetailGrid = (desc, info) => {
  return (
    <>
      <div className="text">{desc}</div>
      <div className="detail">{info}</div>
    </>
  );
};
const Detail = () => {
  let { id } = useParams();
  const dataSource = useContext(DataContext);
  const details = dataSource.data.features.find((item) => item.id === id);

  return (
    <div className="detailComponents">
      <div className="titlePage">{details.properties.title}</div>
      <div className="detailGrid">
        {createDetailGrid("Title", details.properties.title)}
        {createDetailGrid("Magnitude", details.properties.mag)}
        {createDetailGrid("Time", createDateTime(details.properties.time))}
        {createDetailGrid("Status", details.properties.status)}
        {createDetailGrid("Tsunami", details.properties.tsunami)}
        {createDetailGrid("Type", details.properties.type)}
      </div>
    </div>
  );
};

export default Detail;
