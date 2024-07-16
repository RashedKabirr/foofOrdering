import { StyleSheet, Image, FlatList } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import ProductListItem from '@/components/ProductListItem';
import products from '@/assets/data/products';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';



const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () =>{
   const [selectedSize, setSelectedSite] = useState("M");
   const {id} = useLocalSearchParams();
   const product = products.find((p) => p.id.toString() === id);

   return(
    <View style = {styles.container}>
      <Stack.Screen options={{title : product?.name }} />
       <Image style={styles.image} source={{uri : product?.image}} />


      <Text style = {styles.selectSizeText}>Select Size</Text>
      <View style = {styles.sizes}>
       {sizes.map((size) => (
          <View style = {[styles.size, 
            {
               backgroundColor: selectedSize === size ? 'gainsboro': 'white',
            },
          ]} 
          key={size}>
         <Text style = {styles.sizeText}>{size}</Text>
         </View>
         ))}
      </View>


       <Text style={styles.price}>${product?.price}</Text>
    </View>
   );
};

export default ProductDetailScreen;


const styles = StyleSheet.create({
   container : {
      padding: 20,
      backgroundColor : '#f2edda',
      flex: 1
   },

   image : {
      width: '100%',
      aspectRatio: 1,
      
   },
   price: {
      fontSize: 23,
      color: Colors.light.tint    
   },
   selectSizeText : {
      color : Colors.light.text,
      paddingBottom : 10,

   },
   sizes : {
      backgroundColor: '#f2edda',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom : 10
   },
   size : {
     backgroundColor: 'gainsboro',
     aspectRatio: 1,
     width: 50,
     borderRadius: 50,
     alignItems: 'center',
     justifyContent: 'center'
     
   },
   sizeText : {
      fontSize : 20,
      fontWeight : '500',
      color: Colors.light.text
   }
})