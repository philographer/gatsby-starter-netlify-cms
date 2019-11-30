import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Modal = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props.isShow is', this.props.isShow);
    return this.props.isShow ? (
      <div className="modal-container">
        <div className="flex-container">
          <div className="modal-background-container">
            <div style={{textAlign: "right", marginRight: '3%', marginTop: '3%'}} onClick={() => this.props.setIsShow(false)}>x</div>
              <p>{this.props.modalData.name}</p>
              <p>{this.props.modalData.introduction}</p>
              <a href={this.props.modalData.homepage} target='_blank'>Homepage</a>
          </div>
        </div>
      </div>
    ) : null;
  }
};

Modal.propTypes = {
  isShow: PropTypes.bool,
  name: PropTypes.string,
  subName: PropTypes.string,
  establishmentYear: PropTypes.string,
  slogan: PropTypes.string,
  introduction: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  logo: PropTypes.string,
  dept: PropTypes.string,
  modalData: PropTypes.object
}

export default Modal;
