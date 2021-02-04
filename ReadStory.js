import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import db from '../config';

export default class ReadStory extends React.Component {
  constructor(){
    super()
    this.state={
      allStories:[]
    }
  }
  /*in readstory in constructor
   include super keyword and write a function called retrieve story as an arrow function,
   in that function use try catch method ,in try method create an
    empty array allstories and now from db collection get details 
    using onsnapshot format and push the details u got to allstories 
    array then using this array set the state.now in component didmount 
    this retrieve story function should be called*/

   retrieveStories=()=>{
     try{
       allStories=[]
       db.collection("stories")
       .onSnapshot((snapshot)=>{
          all
       })
       catch (error) { 
         console.log(error);
         }
     }
   }

  componentDidMount= async()=>{
    const query=db.collection("stories").get()
    query.docs.map((doc)=>{
       this.setState({
         allStories:[...this.state.allStories,doc.data()]
       })
    })
   }
    render() {
      return (
            <ScrollView>
              
            </ScrollView>
      );
    }
  }