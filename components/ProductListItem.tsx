import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { Product } from '@/app/types';
import products from '@/assets/data/products';
const product = products;

type ProductListItemsProps = {
    product : Product
}

const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const ProductListItem = ({product} : ProductListItemsProps)  => {
 return(
  <View style={styles.container}> 
  <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
  <Text style={styles.title}>{product.name}</Text>
  <Text style={styles.price}>{product.price}</Text>   
   </View>
 )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0d1c1',
    padding: 10,
    borderRadius: 30

   
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
    aspectRatio: 1
  }
});
