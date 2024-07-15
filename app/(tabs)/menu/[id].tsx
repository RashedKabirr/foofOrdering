import { StyleSheet, Image, FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import ProductListItem from '@/components/ProductListItem';
import products from '@/assets/data/products';
import { useLocalSearchParams } from 'expo-router';

const id = useLocalSearchParams();
const ProductDetailScreen = () =>{
   return(
    <View>
    <Text>this is products is id :  </Text>
</View>
   );
};

export default ProductDetailScreen;


