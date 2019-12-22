import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import styles from './CampaignCard.module.scss';

const CampaignCard = ({
  className, name, icon, region,
}) => (
  <Row className={`${className || null}`}>
    <Col span={4}>
      <img src={icon} alt="logo" height={40} width={40} />
    </Col>
    <Col span={20} className={styles.titleDesc}>
      <span className={styles.bsTitle}>
        {
          name
        }
      </span>
      <span className={styles.bsDesc}>
        {
          region
        }
      </span>
    </Col>
  </Row>
);

export default CampaignCard;
