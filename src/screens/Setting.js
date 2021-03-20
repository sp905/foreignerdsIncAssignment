import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addStringAction} from '../actions';
import {List, Header, DismissKeyboard} from '../components';
let {width} = Dimensions.get('screen');

export default Setting = ({navigation}) => {
  const [value, onChangeText] = useState('');
  const [isSelect, setSelected] = useState(false);
  let [animatedValue, setAnimated] = useState(new Animated.Value(-width));
  let dispatch = useDispatch();
  let listData = useSelector(x => x.listData);
  const onButtonClick = useCallback(() => {
    if (value.length) {
      setSelected(true);
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        dispatch(addStringAction(value));
        onChangeText('');
        setSelected(false);
        setAnimated(new Animated.Value(-width));
      });
    }
  });
  return (
    <View style={{flex: 1}}>
      <Header title={'Setting'} navigation={navigation} />
      <View style={styles.containerStyle}>
        <View style={styles.inputContainerStyle}>
          <DismissKeyboard>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={onChangeText}
              placeholder="Enter Text"
              value={value}
            />
          </DismissKeyboard>
          <TouchableOpacity onPress={onButtonClick} style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
        {isSelect && value.length ? (
          <Animated.View
            style={{
              ...styles.itemContainerStyle,
              left: animatedValue,
            }}>
            <Animated.Text numberOfLines={1} style={styles.cardTextStyle}>
              {value}
            </Animated.Text>
          </Animated.View>
        ) : null}
        {listData.length ? (
          <List data={listData} extraData={value} />
        ) : (
          <Text style={{flex: 1, textAlign: 'center'}}>No Data</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginHorizontal: 20,
  },
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  textInputStyle: {
    height: 45,
    width: 300,
    backgroundColor: 'white',
    marginRight: 20,
    fontSize: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
  },
  buttonStyle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#4bdc1bad',
  },
  buttonTextStyle: {color: 'white', fontSize: 15},
  cardTextStyle: {color: 'white', fontSize: 15},
  itemContainerStyle: {
    alignSelf: 'center',
    marginVertical: 5,
    paddingHorizontal: 25,
    paddingVertical: 12,
    width: '95%',
    borderRadius: 10,
    backgroundColor: '#4bdc1bad',
  },
});
