import { StyleSheet, Image, FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import ProductListItem from '@/components/ProductListItem';
import products from '@/assets/data/products';





export default function TabOneScreen() {
  return (
   
   <FlatList
   data={products}
   renderItem={({item}) => <ProductListItem product={item}/>}
   numColumns={2}
   />
    
  );
}

