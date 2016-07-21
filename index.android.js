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
    ListView,
    TouchableOpacity,
    TouchableHighlight,
    Animated,
    InteractionManager
} from 'react-native';

import Button from './src/component/Button';

class oneProject extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    fetchData = () =>{
        fetch('http://bbs.reactnative.cn/api/category/3')
            .then((response) => response.json())
            .then((jsonData) => {
                this.setState({
                    title : jsonData.topics[0].titlerr
                })
                this.refs.button.enable()
            })
            .catch((error) => {
                console.warn(error);
            });
    };
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.instructions}>
              {this.state.title ? this.state.title:null}
          </Text>
          <Button ref="button" text="获取数据" beijing="green" onPress = {this.fetchData}/>
          {/*<Button text="quxiao"  beijing="gray" dianji={()=>{alert('1234')}}/> */}
      </View>
    );
  }
}

const App = ()=>{
    return(
        <View>
        <Image source = {{uri:'http://img2.imgtn.bdimg.com/it/u=451523955,1115502761&fm=21&gp=0.jpg'}}
               style = {{width :400,height:400}}/>
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
            <View >
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{'name'+rowData}</Text>}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonText:{
        textAlign:'center',
        color:'white'
    },
    button:{
        width:120,
        height:40,
        borderRadius:20,
        backgroundColor:'green',
        justifyContent:'center'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    background:{
      backgroundColor:'gray'
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
      //backgroundColor:'yellow'
  },
});

class Playground extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }
    render(): ReactElement {
        return (
            <Animated.Image                         // 可选的基本组件类型: Image, Text, View
                source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                style={{
          flex: 1,
          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
          ]
        }}
                />
        );
    }
    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
        Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
            this.state.bounceValue,                 // 将`bounceValue`值动画化
            {
                toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
                friction: 1,                          // Bouncier spring
                tension: 40
            }
        ).start();                                // 开始执行动画
    }
}

class ExpensiveScene extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {renderPlaceholderOnly: true};
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({renderPlaceholderOnly: false});
        });
    }

    render() {
        if (this.state.renderPlaceholderOnly) {
            return this._renderPlaceholderView();
        }

        return (
            <View>
                <Text>Your full view goes here</Text>
            </View>
        );
    }


    _renderPlaceholderView() {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
};

//AppRegistry.registerComponent('oneProject', () => App);
AppRegistry.registerComponent('oneProject', () => oneProject);
//AppRegistry.registerComponent('oneProject', () => SimpleList);
//AppRegistry.registerComponent('oneProject', () => Playground);
//AppRegistry.registerComponent('oneProject', () => ExpensiveScene);

