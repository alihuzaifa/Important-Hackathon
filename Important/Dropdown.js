import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Dropdown = () => {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [selectedCountry, setSetSelectedCountry] = useState('Select Country');
  const [isClicked, setIsClicked] = useState(false);

  //   A custom drop down picker made by me
  /*
1.get the api data 
2.and code it with normally designing and styling
 */

  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const convertData = await data.json();
    setList(convertData);
    setList2(convertData);
  };

  const onSearch = txt => {
    if (txt !== '') {
      const filterData = list.filter((data, index) => {
        return data.title.toLowerCase().indexOf(txt.toLowerCase());
      });
      setList(filterData);
    } else {
      setList(list2);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Selct Custom Dropdown</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsClicked(!isClicked)}>
        <Text>{selectedCountry}</Text>
        {isClicked ? (
          <Image
            source={require('../images/uparrow.png')}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require('../images/downarrow.png')}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.list}>
          <TextInput
            placeholder="Search"
            style={styles.search}
            onChangeText={txt => {
              onSearch(txt);
            }}
          />
          <FlatList
            data={list}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.dropdownlist}
                  onPress={() => {
                    setIsClicked(!isClicked);
                    setSetSelectedCountry(item.title);
                  }}>
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 100,
  },
  dropdown: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000',
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  list: {
    width: '90%',
    height: 300,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center',
  },
  search: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: '#f1f1f1',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
  },
  dropdownlist: {
    width: '80%',
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
