import * as React from 'react';
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native';
import {ListItem,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';
import db from '../db';



export default class ReportScreen extends React.Component{
    constructor(){
        super();
        this.state={
            ExpenseArray:[]
        }
        this.requestRef=null
    }


getExpenseList=()=>{
    this.requestRef=db.collection("Expenses")
    .onSnapshot((snapshot)=>{
      var ExpenseList = snapshot.docs.map((doc) => doc.data())
      this.setState({
       ExpenseArray:ExpenseArray
      });
    })
  }

  componentDidMount(){
    this.getExpenseList()
  }

  componentWillUnmount(){
    this.requestRef();
  }
 
  KeyExtractor=(item,index) => index.toString()

  renderItem=({item,i})=>{
      return(
          <ListItem
          key={i}
          title={item.amountSpent}
          subtitle={item.spentOnEvent}/>
      )
  }

  render(){
      return(
          <View>
             <Header
             centerComponent={{text: 'EXPENSES REPORT',style:{color:'blue'}}}/>

              <FlatList
              keyExtractor={this.KeyExtractor}
              data={this.state.ExpenseList}
              renderItem={this.renderItem}/>
          </View>
      )
  }
}
