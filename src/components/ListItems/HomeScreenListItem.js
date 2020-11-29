import React, { Component } from 'react';
import { View, StyleSheet, Platform ,TouchableHighlight } from "react-native";
import { ListItem } from 'native-base';
import { connect } from 'react-redux';

import { subCategoryFetch } from '../../actions';

import ListItemLeft from '../common/ListItem/ItemLeft';
import ListItemRight from '../common/ListItem/ItemRight';
import ListItemCenter from '../common/ListItem/ItemCenter';

import AppColor from '../../constants/AppColors';

class HomeScreenListItem extends Component {

    onButtonPress() {    
        this.props.subCategoryFetch({ category: this.props.category.item });
    };

    render() {
    
    const category = this.props.category.item;

    return (
                <ListItem key={category.uid} thumbnail style={styles.listItemStyle}>                    
                        <View style={styles.bottomContainer}>
                            <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                                <View style = {styles.topWrapper}>
                                    <ListItemLeft ListIcon={category.icon} />
                                    <ListItemCenter trTitle={category.trTitle} enTitle={category.enTitle} />
                                    <ListItemRight />
                                </View>

                            </TouchableHighlight>    
                        </View>                    
                </ListItem>
      );
  }
}

const styles = StyleSheet.create({
    listItemStyle:{
        fontSize: 30, 
        marginLeft: 0, 
        paddingLeft: 0
    },
    bottomContainer: {
        flexDirection:'column',
        flex:6,
        marginBottom: 3,
        marginTop:3
    },   
    topWrapper: {
        flex:3,
        flexDirection:"row",
        justifyContent:'space-between',
        borderColor:AppColor.listItemBorder,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: Platform.OS === 'ios' ? 7 : 5,
        paddingBottom: Platform.OS === 'ios' ? 7 : 5,
        backgroundColor: AppColor.white
    }  
  
});


const mapStateToProps = state => {  
    return {
      mainCategories : state.mainCategories
    };
  };
  
export default connect(mapStateToProps, {
    subCategoryFetch
})(HomeScreenListItem);

