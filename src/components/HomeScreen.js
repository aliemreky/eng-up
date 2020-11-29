import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { List,  Content, Container } from 'native-base';
import { connect } from 'react-redux';
import _ from 'lodash';

import { categoryFetch } from '../actions';
import HomeScreenListItem from './ListItems/HomeScreenListItem';


class HomeScreen extends Component {
  componentWillMount() {
    this.props.categoryFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    
    this.createDataSource(nextProps);
  }

  createDataSource({mainCategories}) {
    this.dataSource = mainCategories;
  }

  renderRow(category) {
    return <HomeScreenListItem category = {category} />;
  }

  render() {
    const dataArray = Object.values(this.dataSource);

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
}

const style = StyleSheet.create({  
  homeContainer:{
    backgroundColor: null,
    paddingTop:15
  }
});


const mapStateToProps = state => {  
  return {
    mainCategories : state.mainCategories
  };
};

export default connect(mapStateToProps, {
  categoryFetch
})(HomeScreen);