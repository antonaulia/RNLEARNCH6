import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTile from "../components/CategoryTile";

function CategoryScreen(props) {
  function renderItemComponent(itemData) {
    const catID = itemData.item.id
    function categoryChoosenHandler(){
        props.navigation.navigate('MealScreen', {catID : catID})
    }
    return (
      <CategoryTile title={itemData.item.title} color={itemData.item.color} onPress={categoryChoosenHandler} />
    );
  }
  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderItemComponent}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
