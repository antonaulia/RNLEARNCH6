import { View, Text, Pressable, StyleSheet } from "react-native";

function CategoryTile(props) {
  return (
    <View style={styles.tileContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: props.color },
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={props.onPress}
      >
        <Text>{props.title}</Text>
      </Pressable>
    </View>
  );
}

export default CategoryTile;

const styles = StyleSheet.create({
  tileContainer: {
    margin: 10,
    width: 150,
    height: 150,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
