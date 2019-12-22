import React, { Component } from 'react';
import {
  Modal, Calendar,
} from 'antd';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './CampaignScheduler.module.scss';
import ActionItem from '../ActionItem';
import axios from '../../axios';
import calenderIcon from '../../assets/img/calendar.png';
import campaignsActions from '../../actions';

class CampaignScheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.setVisibility = this.setVisibility.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  setVisibility(visibility) {
    this.setState({ visibility });
  }

  onChange(value) {
    const { data, updateData, campaigns } = this.props;
    const { key } = campaigns;
    const { alias } = data;
    this.setState({
      visibility: false,
    });

    updateData(alias, moment(value).format('X'), key);
  }

  render() {
    const { visibility } = this.state;
    const { data } = this.props;
    const {
      createdOn,
    } = data;
    return (
      <>
        <ActionItem
          title="Schedule Again"
          icon={calenderIcon}
          width={24}
          height={24}
          className={styles.actionItems}
          onClick={() => this.setVisibility(true)}
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
            <h3 className={styles.pricingHeading}>Select new date:</h3>
            <Calendar
              onChange={this.onChange}
              fullscreen={false}
              defaultValue={moment(createdOn * 1000)}
            />
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = ({ campaigns }) => ({ campaigns });

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...campaignsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CampaignScheduler);
