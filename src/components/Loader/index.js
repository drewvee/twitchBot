import React from 'react';
import { styles } from './styles.scss';

export default function Loader() {
  return (
    <div className={`${styles}`}>
      <div className="outer-container">
        <div className="inner-container">
          <div className="section">
            <div className="face"></div>
            <div className="face"></div>
          </div>
          <div className="section">
            <div className="face">
              <div className="face2"></div>
            </div>
          </div>
          <div className="section">
            <div className="face">
              <div className="face2"></div>
            </div>
            <div className="face"></div>
            <div className="face"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
