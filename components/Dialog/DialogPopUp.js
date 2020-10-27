import React, { useState } from 'react';
import Dialog, { DialogContent, SlideAnimation, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import { Button, Text, TextInput, View } from 'react-native'

const DialogPopUp = () => {

  const [state, setState] = useState(false);

  return (
    <View >
      <Button
        title="Show Dialog"

        onPress={() => {
          setState(true);
        }}

      />
      <Dialog
        visible={state}
        rounded={true}



        onTouchOutside={() => {
          setState(false);
        }}
        dialogAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}
        dialogTitle={<DialogTitle title="Dialog Title" />}
        footer={
          <DialogFooter>
            <DialogButton
              text="CANCEL"
              onPress={() => { }}
            />
            <DialogButton
              text="OK"
              onPress={() => { }}
            />
          </DialogFooter>
        }
      >
        <DialogContent>
          <View>
            <Button title="Hello Dialog" />
            <TextInput placeholder="Enter the name" />
          </View>
        </DialogContent>
      </Dialog>
    </View>
  );
};

export default DialogPopUp;