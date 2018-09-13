import React from 'react';
import styles from './Header.css';
import icons from '../../utils/icons';

const Header = ({ technologies }) => {
  return (
    <div className={ styles.root }>
      {/* icons[tech] gets svg tag */}
      {   
        technologies.map((tech, index) => (
          <div key={ tech } className={ styles.icon }>{ icons[tech] }</div>
        ))
      }
    </div>
  )
};

export default Header;