import React, { Component } from 'react';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import styles from './PricingModal.module.scss';
import priceIcon from '../../assets/img/price-icon.png';
import ActionItem from '../ActionItem';

class PricingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
  }

  setVisibility(visibility) {
    this.setState({ visibility });
  }

  render() {
    const { visibility } = this.state;
    const { data } = this.props;
    const {
      name, region, imageUrl, price,
    } = data;
    return (
      <div>
        <ActionItem
          title="View Pricing"
          icon={priceIcon}
          onClick={() => this.setVisibility(true)}
          width={24}
          height={24}
        />
        <Modal
          centered
          visible={visibility}
          footer={null}
          closable={false}
          width={400}
          onCancel={() => this.setVisibility(false)}
        >
          <div className={styles.modalContainer}>
            <Row>
              <Col span={10} className={styles.imageWrapper}>
                <img className={styles.image} src={imageUrl} alt="card" />
              </Col>
              <Col className={styles.titleDesc} span={14}>
                <span className={styles.bsTitle}>
                  {
                    name
                  }
                </span>
                <span className={styles.bsReg}>
                  {
                    region
                  }
                </span>
              </Col>
            </Row>
            <Row className={styles.pricingWrapper}>
              <h3 className={styles.pricingHeading}>Pricing</h3>
            </Row>
            <div className={styles.pricingWrapper}>
              <Row>
                <Col span={12} className={styles.priceTitle}>
                  1 Week - 1 Month
                </Col>
                <Col span={12} className={styles.priceValue}>
                  {
                    `$ ${Math.floor(price / 12) + 15}`
                  }
                </Col>
              </Row>
              <Row>
                <Col span={12} className={styles.priceTitle}>
                  6 Months
                </Col>
                <Col span={12} className={styles.priceValue}>
                  {
                    `$ ${Math.floor(price / 2) + 12}`
                  }
                </Col>
              </Row>
              <Row>
                <Col span={12} className={styles.priceTitle}>
                  1 Year
                </Col>
                <Col span={12} className={styles.priceValue}>
                  {
                    `$ ${Math.floor(price)}`
                  }
                </Col>
              </Row>
            </div>
            <Button
              onClick={() => this.setVisibility(false)}
              className={styles.closeButton}
            >
            Close
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PricingModal;
