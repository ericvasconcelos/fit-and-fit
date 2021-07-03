import * as React from 'react';
import { ScrollView, Text, View, ImageBackground, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { CardButton } from '../../components/CardButton';
import { CardImageProps } from '../../components/CardImage';
import { Container } from '../../components/Container';
import { styles } from './styles';

const MACROS = [
  {
    id: 'calories',
    name: 'Calorias',
    weight: 2000,
    measure: 'kcal',
  },
  {
    id: 'carbohydrate',
    name: 'Carboidratos',
    weight: 246,
    measure: 'g',
  },
  {
    id: 'protein',
    name: 'Proteínas',
    weight: 164,
    measure: 'g',
  },
  {
    id: 'fat',
    name: 'Gordura total',
    weight: 65,
    measure: 'g',
  }
];

const MEALS = [
  {
    id: '1',
    type: 'meal',
    name: 'Café da manhã',
    calories: 315,
    carbohydrate: 45.6,
    protein: 13.2,
    fat: 8,
    foods: [
      {
        id: '1314',
        name: 'Pão francês',
        quantity: 1,
        weight: 80,
        calories: 215,
        carbohydrate: 45.6,
        protein: 7.20,
        fat: 0,
      },
      {
        id: '9813',
        name: 'Ovo frito',
        quantity: 1,
        weight: 40,
        calories: 100,
        carbohydrate: 0,
        protein: 6,
        fat: 8,
      }
    ],
  },
  {
    id: '2',
    type: 'meal',
    name: 'Almoço',
    calories: 461,
    carbohydrate: 50,
    protein: 44.7,
    fat: 7.2,
    foods: [
      {
        id: '3452',
        name: 'Arroz integral',
        quantity: 1,
        weight: 200,
        calories: 240,
        carbohydrate: 50,
        protein: 6,
        fat: 2,
      },
      {
        id: '1325',
        name: 'Peito de frango',
        quantity: 1,
        weight: 120,
        calories: 198,
        carbohydrate: 0,
        protein: 37,
        fat: 4.8,
      },
      {
        id: '1325',
        name: 'Couve',
        quantity: 1,
        weight: 70,
        calories: 23,
        carbohydrate: 0,
        protein: 1.7,
        fat: 0.4,
      },
    ],
  },
  {
    id: '3',
    type: 'food',
    name: 'Whey Protein',
    calories: 122.4,
    carbohydrate: 3,
    protein: 24,
    fat: 1.6,
  }
];

export default function TrainingList() {
  const navigation = useNavigation();

  const handleNavigate = (item: CardImageProps) => {
    navigation.navigate('Training', { itemId: item.id });
  }

  const counter = MEALS.reduce((acc, curr) => ({
    calories: acc.calories + curr.calories,
    carbohydrate: acc.carbohydrate + curr.carbohydrate,
    protein: acc.protein + curr.protein,
    fat: acc.fat + curr.fat,
  }), {
    calories: 0,
    carbohydrate: 0,
    protein: 0,
    fat: 0,
  });

  console.log(counter);



  return (
    <View style={styles.container}>
      <Header
        removeGoBack
        title="Dieta"
      />

      <ScrollView>
        <Container>
          <Text style={styles.sectionTitle}>
            Sua Dieta
          </Text>
          <Text style={styles.sectionSubtitle}>
            Veja suas dieta completa com todas infos detalhadas
          </Text>

          <CardButton title="Adicionar nova dieta" iconName="add-circle" />
        </Container>
        
        <Container>
          <Text style={styles.sectionTitle}>
            Meta dos macros
          </Text>
          <Text style={styles.sectionSubtitle}>
            Adicione suas refeições durante o dia e bata seus macros do dia
          </Text>

          <View style={styles.macro}>
            {MACROS.map(({ id, name, weight, measure }) => (
              <View key={id} style={styles.macroItem}>
                <Text style={styles.macroName}>{name}:</Text>
                <Text style={styles.macroWeight}>{weight - counter[id]} {measure}</Text>
              </View>
            ))}
          </View>
          
          <Text style={styles.sectionTitle}>
            Refeições feitas
          </Text>

          {MEALS.map(({ id, name, calories }) => (
            <View key={id} style={styles.macroItem}>
              <Text style={styles.macroName}>{name} - </Text>
              <Text style={styles.macroWeight}>{calories} kcal</Text>
            </View>
          ))}
        </Container>
      </ScrollView>
    </View>
  );
}

