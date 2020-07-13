import React, { Component } from "react";

export const withForm = (View) =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...props.values,
      };
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    handleRemember = (e) => {
      const { value, checked } = e.target;
      this.setState({ [value]: checked });
    };

    handleSubmit = (e) => {
      e.preventDefault();

      // enviamos los values del form
      this.props.handleSubmit({ ...this.state });

      // vaciamos el state
      // this.setState(this.props.values);
    };

    render() {
      return (
        <>
          <View
            {...this.props}
            values={this.state}
            _handleSubmit={this.handleSubmit}
            _handleChange={this.handleChange}
            _handleRemember={this.handleRemember}
          />
        </>
      );
    }
  };
