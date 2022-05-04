import { View,Text, StyleSheet } from 'react-native';


const MealScreen = () => {
    return (
        <View>
            <Text>Meals Screen !</Text>
        </View>
    );
}

export default MealScreen;

const styles = StyleSheet.create({
    screenContainer:{
        flex : 1,
        justifyContent :'center',
        alignItems : 'center'
    }
})