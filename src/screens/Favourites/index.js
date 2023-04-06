import {View, Text, StyleSheet} from 'react-native';

export function Favourites(){

    return(
        <View styles={styles.container}>
            <Text>Página de Favoritos</Text>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'grey',
    }

})