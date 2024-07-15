import { StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { Product } from '@/app/types';





type ProductListItemsProps = {
    product : Product
}

const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const ProductListItem = ({product} : ProductListItemsProps)  => {
 return(
  <Link href={`./menu/${product.id}`} asChild>
  <Pressable  style={styles.container}> 
  <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
  <Text style={styles.title}>{product.name}</Text>
  <Text style={styles.price}>{product.price}</Text>   
   </Pressable>
   </Link>
 );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0d1c1',
    padding: 20,
    borderRadius: 20,
    paddingBottom: 10,
    flex : 1,
    margin: 6

   
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.text
  },
 
  price : {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },
  image : {
    width: '100%',
    aspectRatio: 1,
    
    
  }
});
