import React, { useRef } from 'react';
import { ScrollView, Text, View, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container } from '../../components/Container';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../constants/tokens';

import exercizeImage from '../../assets/images/exercise.png';

const EXERCISES = [
  {
    id: '0',
    image: exercizeImage,
    name: 'Polichenelo',
    series: null,
    repetitions: null,
    time: '02:00',
  },
  {
    id: '1',
    image: exercizeImage,
    name: 'Jumping Jacks',
    series: '3',
    repetitions: '40',
    time: null,
  },
  {
    id: '2',
    image: exercizeImage,
    name: 'Plank Leg Lifts',
    series: '4',
    repetitions: '30',
    time: null,
  },
  {
    id: '3',
    image: exercizeImage,
    name: 'Squats',
    series: '4',
    repetitions: '20',
    time: null,
  },
  {
    id: '4',
    image: exercizeImage,
    name: 'Pushups',
    series: '4',
    repetitions: '10',
    time: null,
  },
  {
    id: '5',
    image: exercizeImage,
    name: 'Plank Leg Lifts',
    series: '4',
    repetitions: '30',
    time: null,
  },
  {
    id: '6',
    image: exercizeImage,
    name: 'Squats',
    series: '4',
    repetitions: '20',
    time: null,
  },
  {
    id: '7',
    image: exercizeImage,
    name: 'Pushups',
    series: '4',
    repetitions: '10',
    time: null,
  }
]

export default function Training() {
  const navigation = useNavigation();
  const offset = useRef(new Animated.Value(0)).current;
  const { primary, primaryDark, primaryClean, bluePale, white } = colors;

  const handleGoBack = () => navigation.goBack();
  
  console.log(offset);

  return (
    <Animated.View style={styles.container}>
      <LinearGradient 
        style={styles.container}
        colors={[primaryDark, primary, primaryClean, bluePale]}
      >
        <View style={styles.header}>
          <BorderlessButton onPress={handleGoBack}>
            <Ionicons 
              name="arrow-back-outline"
              size={24}
              color={white}
            />
          </BorderlessButton>
        
          <Text style={styles.headerTitle}>
            Hipertrofia - Basic
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
      >
          <Container>
            <Text style={styles.title}>
              Hipertrofia - Basic
            </Text>

            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque a totam laudantium, magni libero aliquid amet nobis eos eum commodi architecto ullam dolores, in ex hic dolore repellendus culpa! Odio.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium deleniti natus sunt quisquam exercitationem veritatis facilis libero labore, illo dolore velit sint impedit temporibus sit autem aperiam. Optio, magnam quod!
            </Text>

            <Text style={styles.sectionTitle}>
              Exercícios
            </Text>
            
            {EXERCISES.map((exercise) => (
              <View key={exercise.id}>
                <View style={styles.exercise}>
                  <Image
                    style={styles.exerciseImage}
                    source={exercise.image}
                  />
                  <View style={styles.exerciseInfos}>
                    <Text style={styles.exerciseName}>{exercise.name}</Text>
                    <Text style={styles.exerciseExecution}>
                      {exercise.time ? exercise.time : `${exercise.series} x ${exercise.repetitions}`}
                    </Text>
                  </View>
                </View>
                <View style={styles.itemSeparator}></View>
              </View>
            ))}
          </Container>
          
        </ScrollView>
      </LinearGradient>
    </Animated.View>
  );
}

