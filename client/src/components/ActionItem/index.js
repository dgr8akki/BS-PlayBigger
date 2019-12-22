import React from 'react';
import styles from './ActionItem.module.scss';

const ActionItem = ({
  icon, title, onClick, width, height, className,
}) => (
  <div className={`${className} ${styles.actionWrapper}`} onClick={onClick}>
    <img src={icon} alt="actionItem" className={styles.actionIcon} width={width} height={height} />
    <span className={styles.imageUrl}>
      {
        title
      }
    </span>
  </div>
);

export default ActionItem;
