import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider , Icon} from '@rneui/base';

export default function ListAcction(props) {
    const {action, title, iconName}=props;
    return (
        <TouchableOpacity 
        onPress={action}
        >
            <View style={styles.container}>
                <Text>{title}</Text>
                <Icon
                type="material-community"
                name={iconName}
                size={22}
                />
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff',
        padding:16,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'gray',
        borderBottomWidth:1,
    },
})