import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import products from '@/assets/data/products';



const product = products[0];
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    
     
    </View>
  );
}

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
