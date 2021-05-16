import React, { useContext, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import "./styles.scss";
import {
  createDateTime,
  convertTo12Hour,
  sortColumn,
} from "../../utils/utilFunctions";

/**
 * Home Component
 * Renders Title, Magnitude, Time in a Grid
 * -	Clicking the column header will sort the data according to that column
 * -	Clicking the column header successively will toggle the sort directions
 **/

const Grid = ({ properties, id }) => {
  return (
    <>
      <Link className="titleElements" to={"/detail/" + id}>
        {properties.place}
      </Link>
      <div className="gridElements">{properties.mag}</div>
      <div className="gridElements">{createDateTime(properties.time)}</div>
    </>
  );
};

const Home = () => {
  const dataSource = useContext(DataContext);
  const [gridData, setGridData] = useState({
    data: dataSource.data.features,
    order: false,
  });

  /**
   * Clicking the column header will sort the data according to that column
   * args: key (place, mag, time)
   **/
  const onclickHeader = useCallback(
    (key) => {
      const sorted = !gridData.order
        ? [...gridData.data].sort((a, b) =>
            sortColumn(a.properties[key], b.properties[key])
          )
        : [...gridData.data].reverse((a, b) =>
            sortColumn(a.properties[key], b.properties[key])
          );
      setGridData({ data: sorted, order: !gridData.order });
    },
    [gridData]
  );

  return (
    <div className="homeComponents">
      <div className="titlePage">{dataSource.data.metadata.title}</div>
      <div className="gridComponents">
        <div onClick={() => onclickHeader("place")} className="header">
          Title
        </div>
        <div onClick={() => onclickHeader("mag")} className="header">
          Magnitude
        </div>
        <div onClick={() => onclickHeader("time")} className="header">
          Time
        </div>
        {gridData.data.map(({ properties, id }) => (
          <Grid properties={properties} key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
