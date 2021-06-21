import { StatusBar } from 'expo-status-bar';
import React, { useState,Component} from 'react';

import { StyleSheet, Text, View,Image,Button,TextInput, TouchableOpacity,ImageBackground} from 'react-native';

export default class NotificationsScreen extends Component {
  state={
    height:0,
    weight:0,
    resultNumber:0,
    resultText:'',
    helpLink:''
  }

  handleCalculate=()=>{
    let value=(this.state.weight)/Math.pow(this.state.height,2);
    this.setState({
      resultNumber: value.toFixed(),
    });

    if(value<18.5){
      this.setState({resultText:'Underweight'})
    }
    else if(value >= 18.5 && value < 25){
      this.setState({resultText:'Perfect'})
    }
    else{
      this.setState({resultText:'Obese',helpLink:'https://rb.gy/tqyq86' })
    }
  }

  render() {
      return(
        <ImageBackground source={require('./assets/bg2.jpg')} style={{ width: '100%', height: '100%' }}>
      <View
      style={{padding:10}}
      >

        <Image
        style={{width:90,height:70,alignSelf:'center',marginTop:60}}
        source={require('./assets/icon1.png')} 
        />
        <View style={styles.container}>
          <TextInput placeholder='Height' keyboardType='numeric' style={styles.input} onChangeText={height => this.setState({height})} />
          <TextInput placeholder='Weight' keyboardType='numeric' style={styles.input} onChangeText={weight => this.setState({weight})} />
        </View>

        <View>
          <TouchableOpacity
          onPress={this.handleCalculate}
          >
              <Text style={styles.buttonText}>Calculate BMI</Text>

          </TouchableOpacity>
          <Text style={styles.outputText}> {this.state.resultNumber} </Text>
          <Text style={styles.outputText}> {this.state.resultText} </Text>
          <Text style={styles.outputText}> {this.state.helpLink} </Text>



        </View>
      </View>
      </ImageBackground>
      )
  }
}
const styles=StyleSheet.create({
container:{
  // textAlign:'center',
  alignItems:'center',
  justifyContent:'center',
  padding:30
  
},

input: {
  height: 80,
  textAlign: 'center',
  width: '50%',
  fontSize: 50,
  marginTop: 24,
  
 borderBottomWidth:1
},
buttonText:{
  alignSelf:'center',
  padding:30,
  fontSize:25,
  color:'#6d8563',
  fontWeight:'bold',
  borderWidth:0.9,
  marginTop:40,
  borderColor:'white',
  backgroundColor:'white',
  opacity:0.8,
  borderRadius:20
  // color:'red'

},
outputText:{
  alignSelf:'center',
  // marginTop:10,
  fontSize:40,
  color:'#6d8563',
  fontWeight:'bold',
  padding:15,
  

}


});