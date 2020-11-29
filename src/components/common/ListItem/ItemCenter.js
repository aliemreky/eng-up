import React, { Component } from 'react';
import { View, StyleSheet, Platform } from "react-native";
import { Text } from 'native-base';

class ListItemCenter extends Component {
  render() {

    return (
        <View style={styles.mainContent}>
            <Text style={styles.titleStyle}>{this.props.trTitle}</Text>
            <Text note numberOfLines={1} style={{alignSelf: 'flex-start', fontSize: 13}}>{this.props.enTitle}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    mainContent:{
        flex:2.2, 
        justifyContent: 'space-between', 
        paddingTop: 7, 
        paddingBottom:7, 
        paddingLeft:10 
    },

    titleStyle:{
        alignSelf: 'flex-start', 
        fontSize: Platform.OS === 'ios' ? 18 : 15 
    }  
  
});

export default ListItemCenter;
