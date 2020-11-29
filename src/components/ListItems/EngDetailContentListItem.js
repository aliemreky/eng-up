import React, { Component } from 'react';
import { StyleSheet, Platform, Image } from "react-native";
import { Card, CardItem, Text, Body, ListItem, Content, Container, View, Left, Right } from 'native-base';

import AppColor from '../../constants/AppColors';

class EngDetailContentListItem extends Component {

  render() {
    const engDetailContent = this.props.engDetailContent.item;

    return (
                <ListItem thumbnail key={engDetailContent.index} style={styles.ListItemStyle}>
                        <View style = {styles.CardViewStyle}>
                            <Card style = {styles.CardStyle}>
                                <CardItem bordered style={{borderTopColor: "#0051b5", borderTopWidth: 3}}>
                                    <View style={{flex:2, flexDirection:"row", justifyContent:'space-between'}}>
                                        <Left style={{flex:0.3}}>
                                            <Image source={require('../../../assets/english.png')} />
                                        </Left>
                                        <Body style={{flex:1.5, flexDirection: 'row', justifyContent: 'center'}}>                                        
                                            <Text> {engDetailContent.enContent} </Text>
                                        </Body>
                                    </View>
                                </CardItem>
                                <CardItem bordered style={{borderBottomColor: "#d90022", borderBottomWidth: 3}}>
                                    <View style={{flex:2, flexDirection:"row", justifyContent:'space-between'}}>
                                        <Left style={{flex:0.3}}>
                                            <Image source={require('../../../assets/turkish.png')} />
                                        </Left>
                                        <Body style={{flex:1.5, flexDirection: 'row', justifyContent: 'center'}}>
                                            <Text> {engDetailContent.trContent} </Text>
                                        </Body>
                                    </View>                                    
                                </CardItem>
                                <CardItem bordered>
                                    <View style={{flex:2, flexDirection:"row", justifyContent:'space-between', paddingTop:4, paddingBottom: 4}}>
                                        <Left style={{flex:1}}><Text>Sol Icon</Text></Left>
                                        <Right style={{flex:1}}><Text>Sağ Icon</Text></Right>
                                    </View>                                  
                                </CardItem>
                            </Card>
                        </View>
                </ListItem>
      );
  }
}

const styles = StyleSheet.create({
    CardStyle:{
        backgroundColor: AppColor.white
    },
    CardViewStyle:{
        flex:1,
        shadowOpacity:0,
        elevation:0,        
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    ListItemStyle:{
        paddingLeft: 0,
        marginLeft: 0 
    }
});


export default EngDetailContentListItem;