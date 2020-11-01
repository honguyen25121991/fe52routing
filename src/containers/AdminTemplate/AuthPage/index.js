import React, { Component } from "react";

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            taiKhoan:"",
            matKhau:"",
        };
    }

    handleOnChange = (e)=>{
        const {name,value}= e.targer;
        this.setState({
            [name]:value,
        })
    };
    handkeLogin = (e)=>{
        e.prevenDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h3>AuthPage</h3>
              <from onSubmit = {this.handkeLogin} >
                <div className="form-group">
                  <label>TK</label>
                  <input type="text" className="form-control" name="taiKhoan" onChange={this.handleOnChange}/>
                </div>
                <div className="form-group">
                  <label>MK</label>
                  <input type="text" className="form-control" name = "matKhau"  onChange={this.handleOnChange}/>
                  <button className="btn btn-success" type ="submit">Login</button>
                </div>
              </from>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
