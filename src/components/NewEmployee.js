import React, { Component, useState } from 'react';
import Axios from 'axios';

export default class NewEmployee extends Component {
  state = {};

  componentDidMount = () => {
    Axios.get('https://randomuser.me/api/?results=50').then((response) => {
      console.log(response.data.results);

      let employeeData = response.data.results.map((employee) => ({
        ...employee,
        tag: [],
      }));
      this.setState(employeeData);
      // setRecord(response.data.results);
    });
  };

  render = () => {
    return <>{/* <h1>hi</h1> */}</>;
  };
}
