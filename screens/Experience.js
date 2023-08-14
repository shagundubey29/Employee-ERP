import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Experience = ( { item }) => {
  console.log(item.resource_calendar_id[1]);
  // console.log(item);
  // work_location_id
  console.log('done');
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Work Information</Text>

      <View style={styles.timelineDesign}>

        <View style={styles.pointsWrapper}>
          <View style={styles.points}>
              <LinearGradient
              colors={['#7209b7', 'transparent']}
              start={{ x: 0.3, y: 0.4 }}
              end={{ x: 1, y: 1 }}
              style={styles.circleWrapper}
              >
                <View style={{backgroundColor: '#333', width: '85%', height: '85%', borderRadius: 60, padding: 8,alignItems: 'center', justifyContent: 'center', }}>
                  <View style={styles.circle}></View>
                </View>
              </LinearGradient>
            <View style={styles.line}></View>
          </View>
          <View style={styles.textWrapper}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
            Location
            </Text>
            <Text style={{fontSize: 14, color: '#E9ECEF'}}>
            {item.work_location_id[1]}
            </Text>
          </View>
        </View>
        <View style={styles.pointsWrapper}>
          <View style={styles.points}>
              <LinearGradient
              colors={['#7209b7', 'transparent']}
              start={{ x: 0.3, y: 0.4 }}
              end={{ x: 1, y: 1 }}
              style={styles.circleWrapper}
              >
                <View style={{backgroundColor: '#333', width: '85%', height: '85%', borderRadius: 60, padding: 8,alignItems: 'center', justifyContent: 'center', }}>
                  <View style={styles.circle}></View>
                </View>
              </LinearGradient>
            <View style={styles.line}></View>
          </View>
          <View style={styles.textWrapper}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
            Country
            </Text>
            <Text style={{fontSize: 14, color: '#E9ECEF'}}>
            {item.company_country_id[1]}
            </Text>
          </View>
        </View>
        <View style={styles.pointsWrapper}>
          <View style={styles.points}>
              <LinearGradient
              colors={['#7209b7', 'transparent']}
              start={{ x: 0.3, y: 0.4 }}
              end={{ x: 1, y: 1 }}
              style={styles.circleWrapper}
              >
                <View style={{backgroundColor: '#333', width: '85%', height: '85%', borderRadius: 60, padding: 8,alignItems: 'center', justifyContent: 'center', }}>
                  <View style={styles.circle}></View>
                </View>
              </LinearGradient>
            <View style={styles.line}></View>
          </View>
          <View style={styles.textWrapper}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
            Working Hours
            </Text>
            <Text style={{fontSize: 14, color: '#E9ECEF'}}>
            {item.resource_calendar_id[1]}
            </Text>
          </View>
        </View>
        <View style={[styles.pointsWrapper, styles.lastPoint]}>
          <View style={styles.points}>
              <LinearGradient
              colors={['#7209b7', 'transparent']}
              start={{ x: 0.3, y: 0.4 }}
              end={{ x: 1, y: 1 }}
              style={styles.circleWrapper}
              >
                <View style={{backgroundColor: '#333', width: '85%', height: '85%', borderRadius: 60, padding: 8,alignItems: 'center', justifyContent: 'center', }}>
                  <View style={styles.circle}></View>
                </View>
              </LinearGradient>
            {/* <View style={styles.line}></View> */}
          </View>
          <View style={styles.textWrapper}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
            Department
            </Text>
            <Text style={{fontSize: 14, color: '#E9ECEF'}}>
            {item.department_id[1]}
            </Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Experience

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 24,
    },
    title: {
        fontSize: 18,
        color: '#DEE2E6',
        textTransform: 'uppercase',
        paddingTop: 24,
        paddingLeft: 10,
    },
    timelineDesign: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: 24,
    },
    pointsWrapper: {
      flexDirection: 'row',
    },
    points: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    circleWrapper: {
      height: 30,
      width: 30,
      borderRadius: 60,
      marginHorizontal: 16,
      backgroundColor: '#4DBEEB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      height: 15,
      width: 15, 
      backgroundColor: '#4DBEEB',
      borderRadius: 50,
    },
    line: {
      height: 60,
      width: 2,
      backgroundColor: '#ADB5BD',
      // marginVertical: 2,
    },
    lastPoint: {
      alignItems: 'flex-start',
    },
})