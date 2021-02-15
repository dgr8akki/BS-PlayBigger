import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import styles from './CampaignCard.module.scss';
import {truncate} from "../../utils";

const CampaignCard = ({
  className, name, icon, region
}) => (
        <Row className={`${className || null}`}>
            <Col lg={4} sm={4} md={6}>
                <img src={icon} alt="logo" className={styles.logo} />
            </Col>
            <Col span={1}/>
            <Col lg={19} sm={19} md={17} className={styles.titleDesc}>
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
