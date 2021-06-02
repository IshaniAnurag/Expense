import * as React from 'react';
import {Text,Button,View,TouchableOpacity,StyleSheet,TextInput,Modal, KeyboardAvoidingView, ScrollView} from 'react-native';
import * as firebase from 'firebase';
import db from '../db'


export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            password:'',
            firstName:'',
            lastName:'',
            emailId:'',
            PhoneNo:'',
            confirmPassword:'',
            isModalVisible:'false'
        }
    }
    
showModal = ()=>{
    <Modal
    animationType="fade"
    transparent={true}
    visible={this.state.isModalVisible}>
        <View>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View>
                        <Text style={styles.textStyle}>Registration</Text>
                        <TextInput
                        style={styles.txtInput}
                        placeholder={"First Name"}
                        onChangeText={(text)=>{
                       this.setState({
                           firstName:text
                       }) }}/>

                       <TextInput
                       style={styles.txtInput}
                       placeholder={"Last Name"}
                       onChangeText={(text)=>{
                           this.setState({
                               lastName:text
                           })
                       }}/>
                       <TextInput 
                       style={styles.txtInput}
                       placeholder={"Email Id"}
                       keyboardType="email-address"
                       onChangeText={(text)=>{
                           this.setState({
                               emailId:text
                           })
                       }}/>

                       <TextInput
                       style={styles.txtInput}
                       placeholder={"Phone Number"}
                       keyboardType="numeric"
                       onChangeText={(text)=>{
                           this.setState({
                               PhoneNo:text
                           })
                       }}/>
                       <TextInput
                       style={styles.txtInput}
                       placeholder={"Password"}
                       secureTextEntry={true}
                       onChangeText={(text)=>{
                          this.setState({
                              password:text
                          })
                       }}
                        />
                        <TextInput 
                        style={styles.txtInput}
                        placeholder={"Confirm Password"}
                        secureTextEntry={true}
                        onChangeText={(text)=>{
                            this.setState({
                            confirmPassword:text
                        })
                        }}
                        />
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    </Modal>


}
userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase.auth().createUserWithEmailAndPassword(emailId, password).then(() => {
          db.collection("users").add({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            PhoneNo: this.state.PhoneNo,
            emailId: this.state.emailId,
           
          });
          return Alert.alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false })
            }
          ]);
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  userLogin = (emailId, password) => {
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
  .then(() => {
    // Signed in 
    var user = userCredential.user;
    alert("Successfully signed in")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  };


    render(){
        return(
            <View style={styles.viewStyle}>
                {this.showModal()}

            <Text style={styles.textStyle}>EXPENSE MANAGER</Text>
<View>
    <TextInput style={styles.txtInput}
     placeholder="Email Id"
     keyboardType='email-address'
    onChangeText={(text)=>{
        this.setState({
            emailId:text
        })
       
    }}/>

    <TextInput style={styles.txtInput}
    placeholder="Password"
    secureTextEntry='true'
    onChangeText={(text)=>{
        this.setState({
            password:text
        })
        
    }}/>
    
</View>
<Button title="Log in" color="green" onPress={this.userLogin(this.state.emailId,this.state.password)}/>
<Button title="Sign Up" onPress={this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    viewStyle:{
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        fontFamily:'fantasy',
        fontSize:30,
        fontWeight:'bold',
        
    },

    txtInput:{
        border:'solid',
        borderColor:'black',
        margin:20
    }
})