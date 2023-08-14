import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '../components/SearchBar';

const EmployeeList = ({ navigation }) => {
const [skills, setSkills] = useState([{}]);
const [data, setData] = useState([{}]);
const [oldData, setOldData] = useState([{}]);
console.log('loging');
  // const data = require('../data/MOCK_DATA.json'); 

const getUsers = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Cookie': 'session_id=14fbe3542ac943a60b0f6556235bba20563681be'
  };

  const body_data = {
    jsonrpc: '2.0',
    params: {}
  };

  try{
    const response = await fetch('https://odoo-118584-0.cloudclusters.net/employee_list_api?jsonrpc=2.0&params={}', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body_data)
    });

    const json = await response.json();
    // let arr_length = json.result.response.length;
    // console.log(json.result.response.department_id);
    setData(json.result.response);
    setOldData(json.result.response);
  } catch (error) {
    console.log(error);
  }
};

// const getSkills = async () => {
//   for(let i=0; i<arr_length; i++){
//     console.log(data[i].id);
//     const headers = {
//       'Content-Type': 'application/json',
//       'Cookie': 'session_id=14fbe3542ac943a60b0f6556235bba20563681be'
//     };

//     let body_data = {
//       jsonrpc: '2.0',
//       params: {"id":data[i].id}
//     };

//     const response = await fetch('https://odoo-118584-0.cloudclusters.net/get_skill_line', {
//       method: 'POST',
//       headers: headers,
//       body: JSON.stringify(body_data)
//     });

//     const json = await response.json();
//     // console.log(json.result.response);
//     setSkills(...skills, json.result.response);
//     // setSkills(json.result.response);
//   };
// };
// const getSkills = async () => {
//   const headers = {
//     'Content-Type': 'application/json',
//     'Cookie': 'session_id=14fbe3542ac943a60b0f6556235bba20563681be'
//   };

//   const body_data = (id) => ({
//     jsonrpc: '2.0',
//     params: { id },
//   });

//   const promises = data.map(({ id }) => (
//     fetch('https://odoo-118584-0.cloudclusters.net/get_skill_line', {
//       method: 'POST',
//       headers: headers,
//       body: JSON.stringify(body_data(id))
//     }).then(response => response.json()).then(json => json.result.response)
//   ));

//   const skills = await Promise.all(promises);
//   setSkills([...skills]);
//   // setData(data.map((item, index) => ({ ...item, skills: skills[index] })));
// };

// console.log(skills);
// console.log(skills.employee_id);
useEffect(() => {
  getUsers();
  // getSkills();
}, []);

  // search function
  const onSearch = (text) => {
    if(text === '') return setData(oldData);
    else{
      let searchResult = data.filter((item) => {
        return item.name.toLowerCase().startsWith(text.toLowerCase());
      });
      return setData(searchResult);
    };
  };

  // filter function
  const onFilter = (text) => {
    console.log(text);
    const filterResult = data.filter((item) => {
      return item.department_id[1] === text;
    });
    return setData(filterResult);
  };
  
  return (
    <SafeAreaView style={styles.cardContainer}>
      {/* <Text style={styles.titleHeading}></Text> */}
      <SearchBar onSearch={onSearch} onFilter={onFilter}/>
      <FlatList
        data={data}
        ListHeaderComponent={
          <View style={{width: '100%', height: 0}}/>
        }
        ListFooterComponent={
          <View style={{width: '100%', height:28}}/>
        }
        keyExtractor={(item) => { return item.id;}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image style={{ width: 75, height: 75, borderRadius: 37.5 }}
                source={{ uri: `https://odoo-118584-0.cloudclusters.net/web/image?model=hr.employee&id=3&field=avatar_128&unique=1680187625000` }}/>
            </View>
            <View style={{flexBasis: '50%'}}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.title}>{item.job_title}</Text>
              <Text style={styles.text}>skill1, skill2, skill3</Text>
              <Text style={styles.text}>{item.department_id}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile', { item})} style={styles.btnContainer}>
              <LinearGradient
                colors={['#40A1F9', '#4DBEEB', '#3DBFF7']}
                start={{ x: 0.3, y: 0.4 }}
                end={{ x: 1, y: 1 }}
                style={styles.btn}
                >
                <Text style={styles.btnText}>View</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  )
}

export default EmployeeList

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#3D4652',
  },
  card: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 24,
    borderRadius: 6,
    marginVertical: 8,
    shadowColor: '#333',
    shadowOffset: { width: 1, height: 1 },
    backgroundColor: '#485362',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: '#333',
    elevation: 5,
    borderColor: '#485362',
    borderWidth: 1,
    borderRadius: 5,
  },
  imageWrapper: {
    flexBasis: '23%',
    width: 80,
    height: 80, 
    borderRadius: 42.5,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    marginLeft: 8,
    padding: 1,
    alignSelf: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F8F9FA',
  },
  title: {
    color: '#F8F9FA',
    fontSize: 13,
    marginBottom: 2,
  },
  text: {
    color: '#DEE2E6',
    marginTop: 2,
    fontSize: 12,
  },
  btnContainer: {
    flexBasis: '15%',
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    backgroundColor: '#4DBEEB',
    paddingHorizontal: 6,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 3,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,  
  },
  titleHeading: {
    marginTop: 24,
    marginBottom:8,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
})