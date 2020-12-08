import React from 'react';
import { View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import db from '../config';
import firebase from firebase;
import { ListItem } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    constructor(){ 
        super();
        this.state = { 
            allRequests : [],
        requestRef= null
         } 
        }
  
        getAllRequests =()=>{ 
            this.requestRef = db.collection("exchanged_requests") 
            .onSnapshot((snapshot)=>{ 
                var allRequests = [] 
                snapshot.forEach((doc) => {
                     allRequests.push(doc.data()) 
                    }) 
                    this.setState({allRequests:allRequests})
                 })                                 
                } 
                componentDidMount(){
                     this.getAllRequests() 
                    } 
                    componentWillUnmount(){ 
                        this.requestRef();
                     }

keyExtractor = (item,index)=> 
index.toString();
renderItem = ({item,i}) => {
return (
<ListItem
   key={i}
   title = {item.itemName}
   subtitle = {item.description}
   titleStyle = {{color:"black",fontWeight:"bold"}}
   rightElement={
       <TouchableOpacity style={styles.button}>
           <Text style={{color:"black"}}> Exchange </Text>
       </TouchableOpacity>
   }
   bottomDivider 
/>
)
}
}
render () {
    return (
        <View>
      <FlatList
      keyExtractor = {this.keyExtractor}
      data={this.state.allRequests}
      renderItem = {this.renderItem}
      />  
        </View>
    )
}


 
const styles = StyleSheet.create({
    button:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      }
})