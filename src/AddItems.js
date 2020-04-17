import React from "react";
import firebase from "./firebase";

class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  submitForm = () => {
    let db = firebase.firestore();
    console.log("Calling collection");
    console.log(this.state);
    console.log(typeof this.state);
    db.collection("collections")
      .add(this.state)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    this.setState({ toContact: true });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <h2>Add new item:</h2>

          <div className="form-group">
            <span>Name</span>
            <label htmlFor="nameInput"></label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
              className="form-control"
              id="nameInput"
              placeholder="Enter item name"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="descriptionInput"></label>
            <span>Description</span>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              className="form-control"
              id="descriptionInput"
              placeholder="Enter Item Description"
              autoComplete="off"
            />
          </div>

          <button className="submit" onClick={this.submitForm}>
            Add item!
          </button>
        </form>
      </div>
    );
  }
}

export default AddItems;
