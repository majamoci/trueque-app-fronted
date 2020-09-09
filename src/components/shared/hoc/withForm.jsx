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

    // cambiar el product_id
    handleProductId = (product_id) => {
      this.setState({ product_id });
    };

    // cambiar el estado
    handleState = (status) => {
      this.setState({ status });
    };

    handleSubmit = (e) => {
      e.preventDefault();

      // enviamos los values del form
      this.props.onSubmit({ ...this.state });

      // vaciamos el state
      // this.setState(this.props.values);
    };

    render() {
      return (
        <View
          {...this.props}
          values={this.state}
          _handleSubmit={this.handleSubmit}
          _handleChange={this.handleChange}
          _handleRemember={this.handleRemember}
          _handleState={this.handleState}
          _handleProductId={this.handleProductId}
        />
      );
    }
  };
