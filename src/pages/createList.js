import React from "react";
import Track from "../components/track";
import styles from "./home-screen-dark.module.css"
import  "../components/track.module.css"
import LinkClass from "./ComponentWithLink";


function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

function createList(recom, sliceSize) {
    return recom.slice(0, sliceSize).map((item) => (
    <LinkClass key={item.id} className={styles.trackContainer} href={item.Link}>
      <Track 
        key={item.id} // Use the index as the key for mapping
        albumCover={item.Image}
        dripTooHardLilB={
            truncateString(item.Track,16)
          }
        lilBabyGunna={item.Artist}
        propWidth="276px"
      />
      </LinkClass>
    ));
  }
  
  export default createList;