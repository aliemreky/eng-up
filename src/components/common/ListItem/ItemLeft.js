import React, { Component } from 'react';
import { View, StyleSheet, Platform } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import { STYLE_CONSTANTS } from '../../../constants/AppConstants';

class ListItemLeft extends Component {

  render() {
    return (
        <View style={styles.iconStyle}>
            <Icon name={this.props.ListIcon} style={styles.ListMainIconStyle} />
         </View>                                    
      );
  }
}

const styles = StyleSheet.create({
    iconStyle:{
        flex:0.5, 
        justifyContent: 'center', 
        alignItems: 'center'        
    },
    
    ListMainIconStyle:{
        fontSize: 35,
        color: STYLE_CONSTANTS.ListIconFontColor,
    }
  
});

export default ListItemLeft;
