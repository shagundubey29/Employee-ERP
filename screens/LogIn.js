import { StyleSheet, Text, View, Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import {React, useState, useRef} from 'react'
import { ScrollView, Dimensions } from 'react-native'
import Logo from '../assets/images/logo.png'
import CustomInput from '../components/CustomInput'
import { LinearGradient } from 'expo-linear-gradient';
import CheckBox from 'react-native-check-box';

const LogIn = ({ navigation }) => {
    const height = Dimensions.get('window').height;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.ScrollView}>
        <KeyboardAvoidingView behavior="height" style={{width: '100%', flex: 1,}}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{width: '100%'}}> 
                <View style={styles.root}>

                    <Image 
                    source={Logo} 
                    resizeMode={"contain"} 
                    style={[styles.logo, {height: height * 0.12}]}
                    />

                    <View style={styles.titleContainer}>
                        <Text style={styles.titleHeading}>Welcome back!</Text>
                        <Text style={styles.titlePara}>Log in to continue</Text>
                    </View>

                    <View style={styles.form}>

                        <CustomInput
                            icon ={ <Fontisto name="email" size={24} color="#4DBEEB" />}
                            placeholder="Email"
                            value={email}
                            setValue={setEmail}
                        />
                        <CustomInput 
                            icon = {<MaterialIcons name="lock-open" size={24} color="#4DBEEB" />}
                            placeholder="Password"
                            value={password}
                            setValue={setPassword}
                            securityType={true}
                        />
                        <View style={styles.checkboxWrapper}>
                            <View style={styles.checkbox}>
                                <CheckBox
                                    style={{flex: 1}}
                                    onClick={()=>{
                                        setIsChecked(!isChecked);
                                    }}
                                    isChecked={isChecked}
                                    checkBoxColor={'#DEE2E6'}
                                />
                                <Text style={{color: '#DEE2E6', fontSize: 16}}>Remember me</Text>
                            </View>
                            <Text style={{color: '#4DBEEB', fontSize: 16}}>Forgot Password?</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Employee')}>
                            <LinearGradient
                            colors={['#40A1F9', '#4DBEEB', '#3DBFF7']}
                            start={{ x: 0.3, y: 0.4 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.btn}
                            >
                            <Text style={styles.btnText}>Log In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default LogIn

const styles = StyleSheet.create({
    ScrollView: {
        flex: 1,
        judifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#485362',
    },
    root: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        padding: 16,
        paddingVertical: 32,
        width: '100%',
    },
    logo: {
        width: '70%',
        maxWidth: 200,
        maxHeight: 200,
        marginVertical: 40,
        marginTop: 45,
    },
    titleContainer: {
        width: '100%',
        paddingHorizontal: 8,
    },
    titleHeading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
    titlePara: {
        fontSize: 16,
        color: '#DEE2E6',
        marginTop: 4,
    },
    form: {
        width: '100%',
        border: 2,
        borderColor: '#000',
        borderStyle: 'solid',
        paddingVertical: 16,
    },
    btn: {
        width: '100%',
        backgroundColor: '#4DBEEB',
        padding: 16,
        alignItems: 'center',
        marginVertical: 16,
        borderRadius: 5,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    checkboxWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        marginTop: 4,
    },
    checkbox: {
        flexDirection: 'row',
        gap: 32,
        alignItems: 'center',
        marginTop: 0,
    },
})