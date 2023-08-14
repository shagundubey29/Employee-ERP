import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, TouchableOpacity, Alert } from 'react-native'
import { Platform, NativeModules } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Experience from './Experience';
import Education from './Education';
import Edit from './Edit';
import { ScrollView } from 'react-native';

const { StatusBarManager } = NativeModules;

const Profile = ({ route, navigation }) => {
  const { item } = route.params;
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState('experience');

  const onpressExperience = () => {
    setDisplay('experience');
  };
  const onpressEducation = () => {
    setDisplay('education');
  };
  const onpressEdit = () => {
    setDisplay('edit');
  };

  const showDetails = () => {
    setShow(!show);
  };

  const hireMePopup = () => {
    Alert.alert('Hire Me', 'Are you sure you want to hire this employee?', [
      {text: 'Yes', onPress: () => console.warn('Yes Pressed')},
      {text: 'No', onPress: () => console.warn('No Pressed')}
    ],
    { cancelable: true, }
    );
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <SafeAreaView style={[styles.root,  [{paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0}]]}>
      <View style={styles.container}>
        {/* card section */}
        <View style={styles.card}>

          {/* <Pressable style={styles.downarrow} onPress={() =>  showDetails()}>
            {!show ? <MaterialIcons name="keyboard-arrow-down" size={32} color="#fff" /> :
            <Entypo name="cross" size={32} color="#fff" />}
          </Pressable> */}

          <View style={styles.imgWrapper}>
            <Image source={{ uri: `${item.photo}` }}
                style={[{ width: 100, height: 100, borderRadius: 87.5 }, styles.img]}
            />
          </View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 80}}>{item.name}</Text>
          <Text style={{fontSize: 14, color: '#F8F9FA'}}>{item.job_title}</Text>
          
          {show ? <View style={styles.info}>
            <View style={styles.infoCard}>
              <AntDesign name="mobile1" size={18} color="#F8F9FA" />
              <Text style={styles.infoText}>{item.work_phone}</Text>
            </View>
            <View style={styles.infoCard}>
              <MaterialIcons name="email" size={18} color="#F8F9FA" />
              <Text style={styles.infoText}>{item.work_email}</Text>
            </View>
            <View style={styles.infoCard}>
              <MaterialCommunityIcons name="office-building-cog" size={18} color="#F8F9FA" />
              <Text style={styles.infoText}>Skill1, skill2, skill3 </Text>
            </View>
          </View> : null}
          
          <View style={styles.btnContainer}>
              <CustomButton btnText={"Message"} onpress={() => navigation.navigate('Employee')}/>
              <CustomButton btnText={"Hire me"} onpress={() => hireMePopup()}/>
          </View>

          <View style={styles.iconTab}>
            <TouchableOpacity style={[styles.iconTabBox, {borderBottomLeftRadius: 8,}]} onPress={() => setDisplay('experience')}>
              <Entypo name="suitcase" size={24} color={display === 'experience' ? '#fff' : '#ADB5BD'} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconTabBox]} onPress={() => setDisplay('education')}>
              <Entypo name="graduation-cap" size={24} color={display === 'education' ? '#fff' : '#ADB5BD'} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconTabBox, {borderBottomRightRadius: 8,}]} onPress={() => setDisplay('edit')}>
              <FontAwesome5 name="user-edit" size={24} color={display === 'edit' ? '#fff' : '#ADB5BD'} />
            </TouchableOpacity>
          </View>

        </View>
        {/* card section end */}

        {/* details section */}
        {display === 'experience' ? <Experience item = {item}/>
        : display === 'education' ? <Education />
        : display === 'edit'?  <Edit /> : null}
        {/* details section end */}

      </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#333',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#485362',
    position: 'relative',
    marginTop: 50,
    borderRadius: 8,
    shadowColor: '#333',
    shadowOffset: { width: 1, height: 1 },
    backgroundColor: '#485362',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: '#333',
    elevation: 5,
    borderColor: '#485362',
  },
  downarrow: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 16,
  },
  imgWrapper: {
    position: 'absolute',
    top: -70,
    width: 110,
    height: 110,
    borderRadius: 77.5,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#4DBEEB',
  },
  info:{
    alignSelf: 'flex-start',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 6,
  },
  infoText : {
    fontSize: 14,
    color: '#F8F9FA',
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  iconTab: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  iconTabBox: {
    width: '33.33%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3D4652',
    paddingVertical: 10,
    
  },
})