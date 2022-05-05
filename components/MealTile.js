import { StyleSheet, Image, View, Text } from "react-native";

function MealTile(itemData) {
  return (
    <View style={styles.mealTileContainer}>
      <Image
        style={styles.mealImage}
        source={{ uri: itemData.item.imageUrl }}
      />
      <Text style={styles.mealTitle}>{itemData.item.title}</Text>
      <View style={styles.detailContainer}>
        <Text>   {itemData.item.duration}m   </Text>
        <Text>   {itemData.item.complexity.toUpperCase()}   </Text>
        <Text>   {itemData.item.affordability.toUpperCase()}   </Text>
      </View>
    </View>
  );
}

export default MealTile;

const styles = StyleSheet.create({
  mealTileContainer: {
    margin: 8,
    borderWidth: 4,
    borderColor: "grey",
    borderRadius : 10,
    overflow : 'hidden',
    backgroundColor : 'white'
  },
  mealImage: {
    width: "100%",
    height: 200,
  },
  mealTitle: {
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
    fontSize : 18
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-between",
    marginBottom : 10
  },
});
