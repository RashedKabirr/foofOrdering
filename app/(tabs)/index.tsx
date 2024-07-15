import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import ProductListItem from '@/components/ProductListItem';
import products from '@/assets/data/products';





export default function TabOneScreen() {
  return (
    <View>  
    <ProductListItem product={products[0]}/>
    <ProductListItem product={products[2]}/>
  
    </View>
  );
}

