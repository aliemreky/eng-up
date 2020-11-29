import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { List,  Content, Container } from 'native-base';
import { connect } from 'react-redux';
import _ from 'lodash';

import SubCategoryListItem from './ListItems/SubCategoryListItem';
import { subCategoryFetch } from '../actions';

class SubCategoryList extends Component {
  componentWillMount() {
    this.dataSource = this.props.subCategories;
  }

  renderRow(category) {
    return <SubCategoryListItem keyExtractor={category.item.index} category = {category}  />;
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
    subCategories: state.subCategories
  };
};


export default connect(mapStateToProps, { subCategoryFetch })(SubCategoryList);