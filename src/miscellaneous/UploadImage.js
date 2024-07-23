import React, { Component } from 'react';

class UploadImage extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  image: null,
	  user: props.user,
	  info: ''
	};
  }

  handleImageChange = (event) => {
	this.setState({
	  image: URL.createObjectURL(event.target.files[0])
	});
  };

  handleInfoChange = (event) => {
	this.setState({
	  info: event.target.value
	});
  };

  handleSubmit = (event) => {
	event.preventDefault();
	console.log('Image:', this.state.image);
	console.log('User:', this.state.user);
	console.log('Info:', this.state.info);
  };

  render() {
	return (
	  <div>
		<form onSubmit={this.handleSubmit}>
		  <input type="file" accept="image/*" onChange={this.handleImageChange} />
		  <input type="text" placeholder="Enter info" value={this.state.info} onChange={this.handleInfoChange} />
		  <button type="submit">Upload</button>
		</form>
		{this.state.image && <img src={this.state.image} alt="Uploaded" />}
	  </div>
	);
  }
}

export default UploadImage;