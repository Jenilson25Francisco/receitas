import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function FoodList({data}){
    return(
        <TouchableOpacity style={styles.container}
            activeOpacity={0.9} 
        
        >
            <Image 
            
                source={{uri: data.cover}}
                style={styles.cover}

            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        marginBottom: 14,
    },
    cover: {
        width: "100%",
        height: 200,
        borderRadius: 14
    }

})