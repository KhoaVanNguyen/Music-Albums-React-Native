import React from 'react';
import { Text , View } from 'react-native';

// View to position element, bao quanh element, set heigh, weight, etc
// View wraps up component
const Header = (props) => {
  // destructure import, eo' co la phai xai styles.textStyle
  const { textStyle, viewStyle } = styles;
  // prop
  return (
    <View style = {viewStyle} >
      <Text style = { textStyle }> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    //backgroundColor: '#223000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    paddingTop: 80,
    paddingRight: 155,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 20,
  }
};

export default Header;
