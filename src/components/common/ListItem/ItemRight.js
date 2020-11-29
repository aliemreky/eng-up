import React, { Component } from 'react';
import { View, StyleSheet, Platform } from "react-native";
import {  Button,  Icon } from 'native-base';

import { STYLE_CONSTANTS } from '../../../constants/AppConstants';

class ListItemRight extends Component {

  render() {
    return (
        <View style={{flex:0.4}}>
            <Button transparent>
                <Icon type="FontAwesome" name="angle-right" style={styles.rightAngleIconStyle} />
            </Button>
        </View>                               
      );
  }
}

const styles = StyleSheet.create({
    rightAngleIconStyle: {
        fontSize:STYLE_CONSTANTS.ListIconFontSize , 
        color: STYLE_CONSTANTS.ListIconFontColor,
        paddingTop: 0
    },
    
  
});

export default ListItemRight;
