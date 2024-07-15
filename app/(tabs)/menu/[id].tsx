import { StyleSheet, Image, FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import ProductListItem from '@/components/ProductListItem';
import products from '@/assets/data/products';
import { Stack, useLocalSearchParams } from 'expo-router';


const ProductDetailScreen = () =>{
   const {id} = useLocalSearchParams();
   const product = products.find((p) => p.id.toString() === id);

   return(
    <View>
      <Stack.Screen options={{title : product?.name }} />
    <Text>this is products is id : {id}</Text>
</View>
   );
};

export default ProductDetailScreen;


