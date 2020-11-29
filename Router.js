import React, { Component } from 'react';
import { StyleSheet, YellowBox, Platform } from "react-native";
import { Scene, Router,Actions } from 'react-native-router-flux';
import HomeScreen from './src/components/HomeScreen';
import SubCategoryList from './src/components/SubCategoryList';
import EngDetailContentScreen from './src/components/EngDetailContentScreen';

import { APP_TITLE } from './src/constants/AppConstants';
import AppColor from './src/constants/AppColors';

class RouterComponent extends Component {

  render() {
  YellowBox.ignoreWarnings(["Setting a timer"]);
  YellowBox.ignoreWarnings(["VirtualizedList:"]);

  return (
    <Router sceneStyle={styles.routerScene}
            navigationBarStyle={styles.navBar} 
            titleStyle={styles.navBarTitle}
            backTitle={"Back"}
            backButtonTextStyle={styles.barButtonTextStyle}
            barButtonTextStyle={styles.barButtonTextStyle}
            barButtonIconStyle={styles.barButtonIconStyle}>
        <Scene key="main"  > 
          <Scene
            key="homeScreen"
            component={HomeScreen}
            title={APP_TITLE}
            initial
          />
          <Scene 
            key="subCategories" 
            component={SubCategoryList}
          />
          <Scene 
            key="engDetailContentScreen" 
            component={EngDetailContentScreen} 
            title={APP_TITLE}
             />
        </Scene>        
    </Router>
  );
}};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: AppColor.themeColor,
    height: 70,
    paddingTop: Platform.OS === 'ios' ? 0 : 6
  },
  navBarTitle:{
    paddingTop: Platform.OS === 'ios' ? 0 : 10,
    color: AppColor.navTitle,
    fontSize: 21
  },
  barButtonTextStyle:{
    color:AppColor.white,
    marginTop: Platform.OS === 'ios' ? 5 : 15,
    paddingBottom: 5
  },
  barButtonIconStyle:{
    tintColor:AppColor.white,
    marginTop: Platform.OS === 'ios' ? 5 : 12,
  },
  routerScene: {
    marginTop: Platform.OS === 'ios' ? 70 : 72,
    backgroundColor: '#f4f4f4'
  }
});

export default RouterComponent;
