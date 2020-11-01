import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WithModal from "./WithModel";

const ModalForm = WithModal(SanPham);


export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HOC</h3>     
        <ModalForm/>;   
      </div>
    );
  }
}
