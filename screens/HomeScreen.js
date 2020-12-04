import React from 'react';
import { View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component {
    constructor () {
        super();
        this.state = {
            userName : "",
            description : "",
            itemName : ""
                }
    }
render () {
    return (
        <View>
      <FlatList
      keyExtractor = {this.keyExtractor}
      data = {this.state.allRequests}
      renderItem = {this.renderItem}
      />  
        </View>
    )
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