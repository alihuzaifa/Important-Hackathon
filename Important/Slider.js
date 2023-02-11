import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');

// we made custom ui for slider
/*
1.we get width and height from the dimension
then we simply design it
3.Most important we show slider btn by the help of onScroll event 
4.paginEnabled mean you can onle slide one at a time
*/
const Slider = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={{height: height / 2}}>
        <FlatList
          data={data}
          horizontal
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({data, index}) => {
            return (
              <View style={styles.sliderBox}>
                <TouchableOpacity style={styles.slide}></TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.sliderBtn}>
        {data?.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: currentIndex == index ? 'green' : 'gray',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 5,
              }}></View>
          );
        })}
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderBox: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: '90%',
    height: '90%',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  sliderBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
});
