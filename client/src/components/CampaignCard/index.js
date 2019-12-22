import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import styles from './CampaignCard.module.scss';
import {truncate} from "../../utils";

const CampaignCard = ({
  className, name, icon, region,
}) => (
  <Row className={`${className || null}`}>
    <Col lg={4} sm={4} md={6}>
      <img src={icon} alt="logo" className={styles.logo} />
    </Col>
    <Col lg={20} sm={17} md={18} className={styles.titleDesc}>
      <span className={styles.bsTitle}>
        {
          truncate(name, 12)
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
