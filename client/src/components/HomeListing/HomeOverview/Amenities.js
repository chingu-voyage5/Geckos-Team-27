import React, { Fragment } from "react";
import PropTypes from "prop-types";
import IconText from "../../UI/IconText/IconText";

const Amenities = ({ amenities, familyAmenities }) => (
  <Fragment>
    <h4>Amenities</h4>
    <div className="Home-Overview-Amenities flex-row">
      <div className="Home-Overview-Amenities-left">
        <IconText
          text="Elevator"
          iconName="fas fa-address-book"
          item={amenities.elevator}
        />
        <IconText
          text="Pets allowed"
          iconName="fas fa-paw"
          item={amenities.pets}
        />
        <IconText
          text="Family/kid friendly"
          iconName="fas fa-user"
          item={amenities.kids}
        />
        <IconText
          text="Suitable for events"
          iconName="fas fa-heart"
          item={amenities.events}
        />
        <IconText
          text="Breakfast"
          iconName="fab fa-apple"
          item={amenities.breakfast}
        />
        <IconText
          text="Kitchen"
          iconName="fas fa-utensils"
          item={amenities.kitchen}
        />
        <IconText
          text="Smoking allowed"
          iconName="fas fa-check"
          item={amenities.smoking}
        />
        <IconText
          text="Buzzer/wireless intercom"
          iconName="fas fa-spinner"
          item={amenities.intercom}
        />
        <IconText
          text="Wireless Internet"
          iconName="fas fa-wifi"
          item={amenities.internet}
        />
        <IconText
          text="Wheelchair accessible"
          iconName="fas fa-wheelchair"
          item={amenities.wheelchair}
        />
        <IconText
          text="Free parking on premises"
          iconName="fas fa-car"
          item={amenities.parking}
        />
        <IconText text="Pool" iconName="far fa-sun" item={amenities.pool} />
        <IconText
          text="Hot tub"
          iconName="fas fa-fire"
          item={amenities.hottub}
        />
        <IconText text="Gym" iconName="fas fa-building" item={amenities.gym} />
        <IconText
          text="Laptop friendly workspace"
          iconName="fas fa-laptop"
          item={amenities.laptop}
        />
        <IconText
          text="Air conditioning"
          iconName="far fa-snowflake"
          item={amenities.ac}
        />
      </div>
      <div className="Home-Overview-Amenities-right">
        <IconText text="Cable TV" iconName="fas fa-tv" item={amenities.cable} />
        <IconText
          text="Hangers"
          iconName="fas fa-unlink"
          item={amenities.hangers}
        />
        <IconText
          text="Indoor Fireplace"
          iconName="fas fa-fire"
          item={amenities.fireplace}
        />
        <IconText
          text="Essentials"
          iconName="fas fa-suitcase"
          item={amenities.essentials}
        />
        <IconText
          text="Iron"
          iconName="fas fa-location-arrow"
          item={amenities.iron}
        />
        <IconText text="Dryer" iconName="fas fa-globe" item={amenities.dryer} />
        <IconText
          text="Washer"
          iconName="fab fa-dashcube"
          item={amenities.washer}
        />
        <IconText text="TV" iconName="fas fa-tv" item={amenities.tv} />
        <IconText
          text="Hair dryer"
          iconName="fas fa-bullhorn"
          item={amenities.hairdryer}
        />
        <IconText
          text="Shampoo"
          iconName="fas fa-columns"
          item={amenities.shampoo}
        />
        <IconText
          text="Heating"
          iconName="fas fa-fire"
          item={amenities.heating}
        />
        <IconText
          text="Paid parking off premises"
          iconName="fas fa-car"
          item={amenities.paidparking}
        />
        <IconText
          text="Free parking on street"
          iconName="fas fa-car"
          item={amenities.streetparking}
        />
        <IconText
          text="Private entrance"
          iconName="fas fa-street-view"
          item={amenities.privent}
        />
        <IconText
          text="Ethernet connection"
          iconName="fas fa-laptop"
          item={amenities.ethernet}
        />
        <IconText
          text="Doorman"
          iconName="fas fa-male"
          item={amenities.doorman}
        />
      </div>
    </div>
    <h4>Family Amenities</h4>
    <div className="Home-Overview-Amenities flex-row">
      <div className="Home-Overview-Amenities-left">
        <IconText
          text="Baby bath"
          iconName="far fa-circle"
          item={familyAmenities.babybath}
        />
        <IconText
          text="Baby monitor"
          iconName="far fa-circle"
          item={familyAmenities.babymonitor}
        />
        <IconText
          text="Babysitter recommendations"
          iconName="far fa-circle"
          item={familyAmenities.babysitter}
        />
        <IconText
          text="Changing table"
          iconName="far fa-circle"
          item={familyAmenities.changingtable}
        />
        <IconText
          text="Children's books and toys"
          iconName="far fa-circle"
          item={familyAmenities.toys}
        />
        <IconText
          text="Children's dinnerware"
          iconName="far fa-circle"
          item={familyAmenities.dinnerware}
        />
        <IconText
          text="Crib"
          iconName="far fa-circle"
          item={familyAmenities.crib}
        />
        <IconText
          text="Fireplace guards"
          iconName="far fa-circle"
          item={familyAmenities.fireplaceguards}
        />
      </div>
      <div className="Home-Overview-Amenities-right">
        <IconText
          text="Game console"
          iconName="far fa-circle"
          item={familyAmenities.gameconsole}
        />
        <IconText
          text="High chair"
          iconName="far fa-circle"
          item={familyAmenities.highchair}
        />
        <IconText
          text="Outlet covers"
          iconName="far fa-circle"
          item={familyAmenities.outletcovers}
        />
        <IconText
          text="Pack 'n Play/travel crib"
          iconName="far fa-circle"
          item={familyAmenities.packnplay}
        />
        <IconText
          text="Room darkening shades"
          iconName="far fa-circle"
          item={familyAmenities.shades}
        />
        <IconText
          text="Stair gates"
          iconName="far fa-circle"
          item={familyAmenities.stairgate}
        />
        <IconText
          text="Table corner guards"
          iconName="far fa-circle"
          item={familyAmenities.tablecorners}
        />
        <IconText
          text="Window guards"
          iconName="far fa-circle"
          item={familyAmenities.windowguards}
        />
      </div>
    </div>
  </Fragment>
);

Amenities.propTypes = {
  amenities: PropTypes.object.isRequired,
  familyAmenities: PropTypes.object.isRequired
};

export default Amenities;
