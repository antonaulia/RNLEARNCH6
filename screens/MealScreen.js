import { View, Text, FlatList,Image, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealTile from "../components/MealTile";
import { useLayoutEffect } from 'react'

const MealScreen = (props) => {
  const catID = props.route.params.catID
  const navigation = props.navigation

  const mealsToRender = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(props.route.params.catID) >= 0;
  });

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category)=> category.id === catID).title
    const categoryColor = CATEGORIES.find((category)=> category.id === catID).color
    navigation.setOptions({title : categoryTitle, contentStyle: {backgroundColor : categoryColor}})
  },[catID,navigation])

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={mealsToRender}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={MealTile}
      />
    </View>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  }
});
