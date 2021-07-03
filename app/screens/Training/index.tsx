import React, { useState } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container } from '../../components/Container';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../constants/tokens';

import exercizeImage from '../../assets/images/exercise.png';
import { Button } from '../../components/Button';

const SERIES = [
  {
    id: '0',
    serieType: 'A',
    focus: ['dorsais', 'biceps'],
    exercises: [
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
        advancedTechniques: 'Bi-set',
      },
      {
        id: '2',
        image: exercizeImage,
        name: 'Plank Leg Lifts',
        series: '4',
        repetitions: '30',
        time: null,
        advancedTechniques: 'Bi-set',
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
    ],
  },
  {
    id: '1',
    serieType: 'B',
    focus: ['peitoral', 'tríceps'],
    exercises: [
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
      },
    ]
  },
  {
    id: '2',
    serieType: 'C',
    focus: ['quadríceps', 'panturilhas'],
    exercises: [
      {
        id: '8',
        image: exercizeImage,
        name: 'Squats',
        series: '4',
        repetitions: '20',
        time: null,
      },
      {
        id: '9',
        image: exercizeImage,
        name: 'Pushups',
        series: '4',
        repetitions: '10',
        time: null,
      }
    ]
  },
];

export default function Training() {
  const navigation = useNavigation();
  const { primary, primaryDark, primaryClean, bluePale, white } = colors;

  const handleGoBack = () => navigation.goBack();

  const handleStartTraining = () => {console.log('Começar treino')}

  return (
    <LinearGradient 
      style={styles.container}
      colors={[primaryDark, primary, primaryClean, bluePale]}
    >
      <TouchableOpacity style={styles.goBack} onPress={handleGoBack}>
        <Ionicons 
          name="arrow-back-outline"
          size={24}
          color={white}
        />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Text style={styles.title}>
            Hipertrofia - Basic
          </Text>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque a totam laudantium, magni libero aliquid amet nobis eos eum commodi architecto ullam dolores, in ex hic dolore repellendus culpa! Odio.
          </Text>

          <View style={styles.infos}>
            <View style={styles.infosRow}>
              <View style={styles.infoItem}>
                <Ionicons 
                  name="speedometer-outline"
                  size={20}
                  color={white}
                />
                <Text style={styles.infoItemText}>Nível fácil</Text>
              </View>
              <View style={styles.infoItem}>
                <MaterialCommunityIcons 
                  name="scale"
                  size={20}
                  color={white}
                />
                <Text style={styles.infoItemText}>160kcal</Text>
              </View>

              <View style={styles.infoItem}>
                <Ionicons 
                  name="calendar-outline"
                  size={20}
                  color={white}
                />
                <Text style={styles.infoItemText}>40 dias</Text>
              </View>
            </View>

            <View style={styles.infosRow}>
              <View style={styles.infoItem}>
                <Ionicons 
                  name="hourglass-outline"
                  size={20}
                  color={white}
                />
                <Text style={styles.infoItemText}>40min</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons 
                  name="pause-circle-outline"
                  size={20}
                  color={white}
                />
                <Text style={styles.infoItemText}>40s de descanso</Text>
              </View>
            </View>
          </View>
          
          <Text style={styles.sectionTitle}>
            Exercícios
          </Text>

          <View style={styles.exerciseList}>
            {SERIES.map((serie) => (
              <View key={serie.id} style={styles.serie}>
                <View style={styles.serieInfo}>
                  <Text style={styles.serieType}>
                    Série {serie.serieType}
                  </Text>

                  {serie.focus.map(tag => (
                    <View key={tag} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>

                {serie.exercises.map(exercise => (
                  <View key={exercise.id}>
                    <View style={styles.exercise}>
                      <Image
                        style={styles.exerciseImage}
                        source={exercise.image}
                      />
                      <View style={styles.exerciseInfos}>
                        <View style={styles.exerciseInfosTop}>
                        <Text style={styles.exerciseName}>{exercise.name}</Text>
                          {exercise.advancedTechniques && (
                            <View style={styles.tag}>
                              <Text style={styles.tagText}>{exercise.advancedTechniques}</Text>
                            </View>
                          )}
                        </View>
                        <Text style={styles.exerciseExecution}>
                          {exercise.time ? exercise.time : `${exercise.series} x ${exercise.repetitions}`}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.itemSeparator}></View>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </Container>
      </ScrollView>

      <View style={styles.action}>
        <Button kind="light" title="Começar o treino" onPress={handleStartTraining} />
      </View>
    </LinearGradient>
  );
}

