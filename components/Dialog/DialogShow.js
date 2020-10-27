import React, { Component } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import Dialog from "react-native-dialog";

export default class DialogTester extends Component {
  state = {
    dialogVisible: false,
  };

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ dialogVisible: false });
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.showDialog}>
          <Text>Show Dialog</Text>
        </TouchableOpacity>
        <Dialog.Container visible={this.state.dialogVisible} style={{ backgroundColor: 'orange' }}>
          <View style={{ backgroundColor: 'red', }}>
            <Button title="Alert" />
            <Text style={{ marginVertical: 30, color: 'black' }} > Hello Dialog</Text>
          </View>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
          <Dialog.Button label="Delete" onPress={this.handleDelete} />
        </Dialog.Container>
      </View>
    );
  }
}