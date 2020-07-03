import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem, CheckBox, Body, Text} from 'native-base';

function Todo(props){
    return (
        <ListItem>
            <CheckBox checked={props.done} 
                      onPress={() => props.onPress() }
                      color={props.done ? "green" : "blue"}
            />
            <Body>
                <Text style={props.done ? styles.striked : null}>{props.text}</Text>
            </Body>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    striked: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
});

export default Todo;