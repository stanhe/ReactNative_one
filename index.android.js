/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
    TextInput,
    ListView
} from 'react-native';

class oneProject extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          i am stan i find a button
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const App = ()=>{
    return(
        <View>
        <Image source = {require('./img/littlehuang.jpg')}/>
            <TextInput placeholder="Hello" />
        </View>

    );
}

class SimpleList extends React.Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie'])
        };
    }
    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{'name'+rowData}</Text>}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//AppRegistry.registerComponent('oneProject', () => App);
AppRegistry.registerComponent('oneProject', () => oneProject);
//AppRegistry.registerComponent('oneProject', () => SimpleList);

