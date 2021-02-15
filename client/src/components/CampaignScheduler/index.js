import React, { Component } from 'react';
import Modal from 'antd/lib/modal';
import Calendar from 'antd/lib/calendar';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './CampaignScheduler.module.scss';
import ActionItem from '../ActionItem';
import calenderIcon from '../../assets/img/calendar.png';
import campaignsActions from '../../actions';

class CampaignScheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      actualDate: this.props.data.createdOn,
      updatedDate: this.props.data.createdOn
    };
    this.setVisibility = this.setVisibility.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }

  setVisibility(visibility) {
    this.setState({ visibility });
  }

  onChange(value) {
    this.setState({
      updatedDate: moment(value).format('X')
    });
  }

  handleOk() {
    const { data, updateData, campaigns } = this.props;
    const { key } = campaigns;
    const { alias } = data;
    const {updatedDate, actualDate} = this.state;
    if (updatedDate && updatedDate != actualDate)
      updateData(alias, updatedDate, key);
    this.setVisibility(false);
  }

  render() {
    const { visibility, updatedDate } = this.state;
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
          closable={false}
          width={400}
          onCancel={() => this.setVisibility(false)}
          onOk={this.handleOk}
        >
          <div className={styles.modalContainer}>
            <h3 className={styles.pricingHeading}>Select new date:</h3>
            <Calendar
              onChange={this.onChange}
              fullscreen={false}
              defaultValue={moment(updatedDate * 1000)}
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
