import React from "react";
import { Text, TouchableHighlightProps, TouchableOpacity } from 'react-native';
import { style } from "./style";

type Props = TouchableHighlightProps & {
    text: string
}

export function Button({...rest}:Props){
    return (
        <TouchableOpacity style={style.button} {...rest}>
            <Text style={style.textButton}>{rest.text}</Text>
        </TouchableOpacity>
    )
}