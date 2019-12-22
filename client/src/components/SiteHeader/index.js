import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import styles from './SiteHeader.module.scss';
import logo from '../../assets/img/bs-logo.svg';

const SiteHeader = ({ className }) => (
  <Row className={`${styles.header} ${className || null}`}>
    <Col className={styles.container}>
      <Col span={4} className={styles.logoContainer}>
        <Link to="/">
          <Row>
            <Col span={11}>
              <img src={logo} alt="logo" className={styles.logo} />
            </Col>
            <Col span={13} className={styles.titleDesc}>
              <span className={styles.bsTitle}>
                BlueStacks
              </span>
              <span className={styles.bsDesc}>
                Play Bigger
              </span>
            </Col>
          </Row>
        </Link>
      </Col>
    </Col>
  </Row>
);

export default SiteHeader;
