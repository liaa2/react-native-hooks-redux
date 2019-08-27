import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 30;

function SquareScreen() {
  // action is the object the describes the updates we want to make
  // action --> how to change state
  const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {type: 'red' || 'green' || 'blue', payload: 15 || -15 }
    switch(action.type) {
      case 'red':
        return state.red + action.payload > 255 || state.red + action.payload < 0 
        ? state
        : {...state, red: state.red + action.payload};
      case 'green':
        return state.green + action.payload > 255 || state.green + action.payload < 0
          ? state
          : { ...state, green: state.green + action.payload };
      case 'blue':
        return state.blue + action.payload > 255 || state.blue + action.payload < 0
          ? state
          : { ...state, blue: state.blue + action.payload };
      default:
        return state;
    }
  }
  
  // dispatch --> run the reducer
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0 })
  return (
    <View>
      <ColorCounter 
        color="Red" 
        onIncrease={() => dispatch({type: 'red', payload: COLOR_INCREMENT})} 
        onDecrease={() => dispatch({ type: 'red', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter 
        color="Green" 
        onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT })} 
        onDecrease={() => dispatch({ type: 'green', payload: -1 * COLOR_INCREMENT })}
        />
      <ColorCounter 
        color="Blue" 
        onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT })} 
        onDecrease={() => dispatch({ type: 'blue', payload: -1 * COLOR_INCREMENT })}
        />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  }
})

export default SquareScreen;