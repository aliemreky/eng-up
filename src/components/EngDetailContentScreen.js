import React, { Component } from 'react';
import { StyleSheet, FlatList, Alert } from 'react-native';
import { List, Content, Container, Header, Card, CardItem, Body, Text, View  } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import { engDetailContentFetch } from '../actions';

import EngDetailContentListItem from './ListItems/EngDetailContentListItem';


class EngDetailContentScreen extends Component {

    componentWillMount() {
        this.createDataSource(this.props);
      }
    
      componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
      }
    
      createDataSource({engDetailContent}) {
        this.dataSource = engDetailContent;
      }    
    
      renderRow(engDetailContent) {
        return <EngDetailContentListItem keyExtractor={engDetailContent.item.index} engDetailContent = {engDetailContent}  />;
      }
    
      render() {
          const dataArray = Object.values(this.dataSource).slice(0,5);
    
          return (
            <Container style={style.homeContainer}>
              <Content>
                <List>
                  <FlatList                  
                    data = { dataArray }
                    renderItem = {this.renderRow}
                    keyExtractor={(item, index) => index.toString()}
                    />
                </List>
              </Content>
            </Container>
          );
      }
};

const style = StyleSheet.create({  
  homeContainer:{
    backgroundColor: null,
    paddingTop:15
  }
});


const mapStateToProps = state => {  
    return {
        engDetailContent : state.engDetailContent
    };
  };
  
export default connect(mapStateToProps, {engDetailContentFetch})(EngDetailContentScreen);