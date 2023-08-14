import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const FilterModal = ({ title, data, onFilter, setDepartment }) => {
  const [value, setValue] = useState(null);
  // const [department, setDepartment] = useState(null);
  // console.log('update value',department);

  const renderItem = React.useCallback(
    (item) => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value && (
            <AntDesign name="check" size={20} color="black" style={styles.icon}/>
          )}
        </View>
      );
    },
    [value, onFilter]
  );

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={220}
        labelField="label"
        valueField="value"
        placeholder={title}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          // setDepartment(item.label);
          // console.log('old value',department);
          // onFilter(department);
        }}
        renderItem={renderItem}
      />
    );
  };

  export default FilterModal;

  const styles = StyleSheet.create({
    dropdown: {
      marginVertical: 4,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
      color: 'gray',
    },
    selectedTextStyle: {
      fontSize: 16,
      color: 'black',
      fontWeight: 500,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });