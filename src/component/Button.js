/**
 * button
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
} from 'react-native';


export default class oneProject extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            disable :false,
        };
    }
    disabled = ()=>{
        this.setState({
            disable:true
        })
    }
    enable = ()=>{
        this.setState({
            disable:false
        })
    }
    onPress = () =>{
        this.disabled();
        const { onPress } = this.props;
        if (onPress==undefined){
            alert("default events..")
        }else
            onPress(this.enable);
    };
    render() {
        const { text,beijing,onPress } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    disable = {this.state.disable}
                    style={[styles.button,{backgroundColor:beijing},this.state.disable && styles.background]} onPress={this.onPress} >
                    <Text style={styles.buttonText} >
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
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


