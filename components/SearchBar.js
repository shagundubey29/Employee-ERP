import { StyleSheet, TextInput, View, Modal, Text, ScrollView, TouchableOpacity, Pressable} from "react-native";
import React, { useRef, useState } from 'react'
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
import FilterModal from "../components/FilterModal";
import CustomButton from "../components/CustomButton";
import FilterArray from "../data/FilterArray";

const SearchBar = ({ onSearch, onFilter }) => {
    const [search, setSearch] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [department, setDepartment] = useState(null);
  console.log('update value',department);

    const inputRef = useRef(null);
    const onInputFocus = () => {
        inputRef.current.setNativeProps({style: { borderColor: '#4DBEEB', shadowColor: '#4DBEEB' },});
    };
    const onInputBlur = () => {
        inputRef.current.setNativeProps({style: { borderColor: 'gray', shadowColor: 'gray' },});
    };
    const clear = () => {
        setSearch("");
        onSearch("");
    };

  return (
    <View style={styles.container}>
    {/* SearchBar */}
        <View style={styles.searchBar} ref={inputRef}>
            {/* search Icon */}
            <Feather
                name="search"
                size={20}
                color="gray"
                style={{ marginRight: 8 }}
            />
            {/* search Icon */}

            {/* Input field */}
            <TextInput
                style={styles.input}
                placeholder="Search here..."
                onFocus={ () => onInputFocus() }
                onBlur = { () => onInputBlur() }
                onChangeText={(text) => {
                    setSearch(text);
                    onSearch(text);
                }}
                value={search}
            />
            {/* cut icon */}
            {search ? <Pressable onPress={clear}><Entypo name="cross" size={24} color="gray" /></Pressable>: null}
            {/* Input field */}
        </View>
    {/* SearchBar */}

        {/* filter icon */}
        <TouchableOpacity onPress={() => setModalVisible(true)}><Ionicons name="filter-outline" size={28} color="#fff" /></TouchableOpacity>
        {/* Filter Modal */}
        <Modal  
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
        }}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '90%', height: '50%', backgroundColor: '#3D4652', borderRadius: 10, padding: 16 }}>
                    <ScrollView>
                        {/* Heading */}
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginBottom: 24, marginTop : 1 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Filter</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}><Entypo name="cross" size={24} color="#DEE2E6" /></TouchableOpacity>
                        </View>

                        {/* Filter Options */}
                        <FilterModal title={'Select Department'} data={FilterArray.Department} 
                        // onFilter={onFilter} setDepartment={setDepartment}

                        />
                        <FilterModal title={' Select Job Title'} data={FilterArray.JobTitle}/>
                        <FilterModal title={'Select Skills'} data={FilterArray.Skills}/>

                        {/* Apply and Cancel Button */}
                        <View style={styles.btnContainer}>
                            <CustomButton btnText={'Cancel'} onpress={() => setModalVisible(false)}/>
                            <CustomButton btnText={'Apply'} onpress={() => setModalVisible(false)}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
        {/* Filter Modal */}
    </View>
)
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '90%',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        marginRight: 8,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor: 'gray',
        elevation: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    input: {
        width: '82%',
        fontSize: 16,
    },
    btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
})