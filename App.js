import React, { useState } from 'react';
import { View,StyleSheet,  } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { AntDesign } from '@expo/vector-icons';

const cards = [
  { id: 2, color: 'rgba(174, 225, 243, 1)' },    // light blue
  { id: 1, color: 'rgba(167, 245, 194, 1)' },  // light green
  { id: 3, color: 'rgba(248, 217, 134, 1)' },    // light yellow
  { id: 4, color: 'rgba(250, 171, 79, 1)' },  // light orange
  { id: 5, color: 'rgba(252, 122, 93, 1)' },  // light red
];

export default function App() {
  const [index, setIndex] = useState(0);

  const onSwiped = () => {
    setIndex(index+1);
  }


  return (
    <View style={styles.container}>
      <Swiper 
        cards={cards}
        cardIndex={index}
        
        renderCard={(card) => (
          <View
            style={{
              flex:0.8,
              backgroundColor: card.color,
              shadowRadius: 25,
              shadowColor: '#000',
              shadowOpacity: 0.08,
              shadowOffset: {width:0, height:0},
            }}
          >
          </View>
        )}
        // horizontalSwipe
        // onSwipedRight={onSwiped}
        onSwiped={onSwiped}
        showSecondCard
        stackSize={4}
        // stackScale={10}
        stackSeparation={14}
        disableBottomSwipe
        disableTopSwipe
        animateOverlayLabelsOpacity
        animateCardOpacity
        infinite      
        overlayLabels={{
          left: {
            title: 'NOPE',
            element: (
                    <View>
                      <AntDesign name="closecircle" size={100} color="red" />
                    </View>
                  ),
            style: {
              label: {
                backgroundColor: "red",
                borderColor: "red",
                color: "white",
                borderWidth: 1,
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: -20
              }
            }
          },
          right: {
            title: 'LIKE',
            element: (
              <View>
                <AntDesign name="checkcircle" size={100} color="green" />
              </View>
            ),
            style: {
              label: {
                backgroundColor: "blue",
                borderColor: "blue",
                color: "white",
                borderWidth: 1,
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: 20
                
              }
            }
          }
        }}

      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    position: "absolute",
 },
});
