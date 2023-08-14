import { StyleSheet,View, TextInput } from 'react-native'
import {React, useRef} from 'react'

const CustomInput = ({icon, placeholder, value, setValue, securityType= false}) => {
    const inputRef = useRef(null);
    const onInputFocus = () => {
        inputRef.current.setNativeProps({style: { borderColor: '#4DBEEB', shadowColor: '#4DBEEB' },});
    };
    const onInputBlur = () => {
        inputRef.current.setNativeProps({style: { borderColor: 'gray', shadowColor: 'gray' },});
    };

    return (
        <View style={styles.input} ref={inputRef}>
            {icon}
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={text => setValue(text)}
                placeholderTextColor="#E9ECEF"
                style={[styles.inputText,]}
                secureTextEntry={securityType}
                autoCapitalize="none"
                onFocus={ () => onInputFocus() }
                onBlur = { () => onInputBlur() }
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        backgroundColor: '#3F4A58',
        width: '100%',
        padding: 16,
        marginVertical: 14,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor: 'gray',
        elevation: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    inputText: {
        width: '100%',
        color: '#fff',
        fontSize: 16,
    },
})