import React, { Component } from "react";
import { actDetailPageApi } from "./modules/action";
import { connect } from "react-redux";

class DetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDetailMovie(id);
  }

  render() {
    return (
      <div>
        <h3>DetailPage</h3>
      </div>
    );
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    getDetailMovie: (id) => {
      dispatch(actDetailPageApi(id));
    },
  };
};

export default connect(null, mapDisptachToProps)(DetailPage);
