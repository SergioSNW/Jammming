import React from 'react';
import styles from './Tracl.module.css';

function Track() {
  return (
    <div className="{styles.Track}">
      <div className={styles['Track-information']}>
        {/* <h3> Track name will go here</h3>
                <p>
                    Track artist will go here
                </p> */}
      </div>
      {/* <button className='Track-action'></button> */}
    </div>
  );
}

export default Track;
