import * as React from 'react';
import {Text,TextInput,StyleSheet,TouchableOpacity,Button,View} from 'react-native';
import db from '../db';
import firebase from 'firebase';

export default class NewTransactionScreen extends React.Component{

    constructor(){
        super();
        this.state={
            amountSpent:'',
            spentOnEvent:'',
            docId:'',
            timeStamp:0
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7);
    }

    addExpense=  (amountSpent,spentOnEvent)=>{
        var randomExpenseId=this.createUniqueId()
        db.collection('Expenses').add({
            "amountSpent:":amountSpent,
            "spentOnEvent":spentOnEvent,
            "timeStamp":firebase.firestore.FieldValue.timeStamp()
        })
    }


    render(){
        return(
          <View>
              <Text>NEW TRANSACTION SCREEN</Text>
             <TextInput
             style={styles.txtInput}
             onChangeText={(text)=>{
                this.setState({
                    amountSpent:text
                }) }}
                placeholder={"Amount Spent:"}/>

<TextInput
             style={styles.txtInput}
             onChangeText={(text)=>{
                this.setState({
                    amountSpent:text
                }) }}
                placeholder={"Spent On:"}/>

<Button title="Save" onPress={this.addExpense()}/>

          </View>  
        )
    }
}

const styles=StyleSheet.create({
    TextStyle:{
        fontSize:25

    },

    
    txtInput:{
        border:'solid',
        borderColor:'black',
        margin:20
    }
})