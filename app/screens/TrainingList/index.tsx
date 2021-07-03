import * as React from 'react';
import { ScrollView, Text, View, ImageBackground, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { CardButton } from '../../components/CardButton';
import { CardImagem, CardImageProps } from '../../components/CardImage';
import { Container } from '../../components/Container';
import { styles } from './styles';

import deadLiftImage from '../../assets/images/deadlift-header.jpeg';
import squatHeader from '../../assets/images/squat-header.jpeg';
import womanWorkingOut from '../../assets/images/woman-working-out.jpeg';

const DATA = [
  {
    id: '1',
    image: squatHeader,
    title: 'Hipertrofia - Basic',
    subtitle: 'Eleve sua quantidade de massa muscular com exercícios que dão resultado',
    page: 'Hypertrophy'
  },
  {
    id: '2',
    image: deadLiftImage,
    title: 'Treino de Força',
    subtitle: 'Eleve sua quantidade de massa muscular com exercícios que dão resultado',
    page: 'StrengthTraining'
  },
  {
    id: '3',
    image: womanWorkingOut,
    title: 'Treino para mulheres',
    subtitle: 'Eleve sua quantidade de massa muscular com exercícios que dão resultado',
    page: 'WomenWorkout'
  }
];

export default function TrainingList() {
  const navigation = useNavigation();

  const handleNavigate = (item: CardImageProps) => {
    navigation.navigate('Training', { itemId: item.id });
  }

  return (
    <View style={styles.container}>
      <Header
        removeGoBack
        title="Treinos"
      />

      <ScrollView>
        <Container>
          <Text style={styles.sectionTitle}>
            Seus treinos
          </Text>
          <Text style={styles.sectionSubtitle}>
            Veja os treinos que você está realizando
          </Text>

          <CardButton title="Adicionar novo treino" iconName="add-circle" />
        </Container>
        
        <Container>
          <Text style={styles.sectionTitle}>
            Musculação
          </Text>
          <Text style={styles.sectionSubtitle}>
            Escolha um de nossos treinos de acordo com a sua necessidade
          </Text>
        </Container>

        <FlatList
          horizontal
          data={DATA}
          style={styles.list}
          renderItem={({ item }) => (
            <CardImagem item={item} onPress={(item) => handleNavigate(item)}/>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={() => <View style={{ marginRight: 24 }} />}
        />

        <Container>
          <Text style={styles.sectionTitle}>
            Crossfit
          </Text>
          <Text style={styles.sectionSubtitle}>
            Escolha um de nossos treinos de acordo seu nível e preferência
          </Text>
        </Container>

        <FlatList
          horizontal
          data={DATA}
          style={styles.list}
          renderItem={({ item }) => (
            <CardImagem item={item} onPress={() => {}}/>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={() => <View style={{ marginRight: 24 }} />}
        />
      </ScrollView>
    </View>
  );
}

