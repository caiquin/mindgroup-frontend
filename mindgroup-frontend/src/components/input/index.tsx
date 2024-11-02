import React, { forwardRef, Fragment, LegacyRef } from "react";
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { style } from "./style";
import {MaterialIcons, FontAwesome, Octicons} from '@expo/vector-icons';
import { thems } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;


type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{

    const {IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, ...rest} = Props;

    return(
    <Fragment>
        {title&&<Text style={style.titleInput}>{title}</Text>}
        <View style={style.boxInput}>
            <TextInput 
                style={style.input}
                {...rest}
            />
            {IconRight && iconRightName &&(
                <IconRight name={iconRightName as any} size={20}/>
            )}
        </View>
    </Fragment>

    )
})