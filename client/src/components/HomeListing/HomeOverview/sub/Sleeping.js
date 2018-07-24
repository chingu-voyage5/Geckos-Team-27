import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Sleeping = ({ home }) => {
  const renderRooms = room => {
    if (room === "common") {
      return (
        <div key={room} className="Home-Overview-Sleeping-item">
          <div>
            <i className="fas fa-bed fa-3x" />
            <div className="bold-text">Common Spaces</div>
            {Object.keys(home.information.sleeping[room]).map(key => {
              if (home.information.sleeping[room][key] > 0) {
                return renderBeds(key, home.information.sleeping[room][key]);
              } else return "";
            })}
          </div>
        </div>
      );
    } else if (room.indexOf("bedroom") === 0) {
      return (
        <div key={room} className="Home-Overview-Sleeping-item">
          {room.slice(-1) <= home.information.bedrooms ? (
            <div>
              <i className="fas fa-bed fa-3x" />
              <div className="bold-text">Bedroom {room.slice(-1)}: </div>
            </div>
          ) : (
            ""
          )}
          {Object.keys(home.information.sleeping[room]).map(key => {
            if (home.information.sleeping[room][key] > 0) {
              return renderBeds(key, home.information.sleeping[room][key]);
            } else return "";
          })}
        </div>
      );
    }
  };
  const renderBeds = (beds, number) => {
    let bedName = "";
    if (beds === "airmattress") {
      bedName = "air mattress";
    } else {
      bedName = beds;
    }
    return (
      <div key={beds}>
        {number} {bedName} {number === 1 ? "bed" : "beds"}
      </div>
    );
  };
  return (
    <Fragment>
      {Object.keys(home.information.sleeping).map(key => {
        return renderRooms(key);
      })}
    </Fragment>
  );
};

Sleeping.propTypes = {
  home: PropTypes.object.isRequired
};

export default Sleeping;
