import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { CardButton } from '../../components/CardButton';
import { Container } from '../../components/Container';
import { styles } from './styles';
import { ModalView } from '../../components/ModalView';
import { Input } from '../../components/Input';
import { Option } from '../../components/Option';
import useFetchFoods from './useFetchFoods';
import useDebounce from '../../utils/useDebounce';

const MACROS = [
  {
    id: 'energy_kcal',
    name: 'Calorias',
    weight: 2000,
    measure: 'kcal',
  },
  {
    id: 'carbohydrate_g',
    name: 'Carboidratos',
    weight: 246,
    measure: 'g',
  },
  {
    id: 'protein_g',
    name: 'Proteínas',
    weight: 164,
    measure: 'g',
  },
  {
    id: 'lipid_g',
    name: 'Gordura total',
    weight: 65,
    measure: 'g',
  }
];

const MEALS = [
  {
    id: '1',
    type: 'meal',
    description: 'Café da manhã',
    energy_kcal: 315,
    carbohydrate_g: 45.6,
    protein_g: 13.2,
    lipid_g: 8,
    foods: [
      {
        id: '1314',
        description: 'Pão francês',
        quantity: 1,
        weight: 80,
        energy_kcal: 215,
        carbohydrate_g: 45.6,
        protein_g: 7.20,
        lipid_g: 0,
      },
      {
        id: '9813',
        description: 'Ovo frito',
        quantity: 1,
        weight: 40,
        energy_kcal: 100,
        carbohydrate_g: 0,
        protein_g: 6,
        lipid_g: 8,
      }
    ],
  },
  {
    id: '2',
    type: 'meal',
    description: 'Almoço',
    energy_kcal: 461,
    carbohydrate_g: 50,
    protein_g: 44.7,
    lipid_g: 7.2,
    foods: [
      {
        id: '3452',
        description: 'Arroz integral',
        quantity: 1,
        weight: 200,
        energy_kcal: 240,
        carbohydrate_g: 50,
        protein_g: 6,
        lipid_g: 2,
      },
      {
        id: '1325',
        description: 'Peito de frango',
        quantity: 1,
        weight: 120,
        energy_kcal: 198,
        carbohydrate_g: 0,
        protein_g: 37,
        lipid_g: 4.8,
      },
      {
        id: '1325',
        description: 'Couve',
        quantity: 1,
        weight: 70,
        energy_kcal: 23,
        carbohydrate_g: 0,
        protein_g: 1.7,
        lipid_g: 0.4,
      },
    ],
  },
  {
    id: '3',
    type: 'food',
    description: 'Whey Protein',
    energy_kcal: 122.4,
    carbohydrate_g: 3,
    protein_g: 24,
    lipid_g: 1.6,
  }
];

const initialMacros = {
  energy_kcal: 0,
  carbohydrate_g: 0,
  protein_g: 0,
  lipid_g: 0,
};

export default function TrainingList() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState(MEALS);
  const [counterMacros, setCounterMacros] = useState(initialMacros);
  const [isFoodSearchOpen, setIsFoodSearchOpen] = useState(false);
  const [foodName, setFoodName] = useState('');
  const { fetchFoods, foods, foodsLoading, foodsError } = useFetchFoods();
  const debouncedValue = useDebounce(foodName, 800);
  
  const handleCounterMacros = (newMeals: Array<any>) => {
    const macros = newMeals.reduce((acc, curr) => ({
      energy_kcal: acc.energy_kcal + curr.energy_kcal,
      carbohydrate_g: acc.carbohydrate_g + curr.carbohydrate_g,
      protein_g: acc.protein_g + curr.protein_g,
      lipid_g: acc.lipid_g + curr.lipid_g,
    }), {
      energy_kcal: 0,
      carbohydrate_g: 0,
      protein_g: 0,
      lipid_g: 0,
    });

    setCounterMacros(macros);
  };

  // useEffect(() => {
  //   handleCounterMacros(meals);
  // }, [handleCounterMacros, meals]);

  useEffect(() => {
    if (debouncedValue) {
      fetchFoods(debouncedValue);
    }
  }, [fetchFoods, debouncedValue]);

  const handleOpenSearchFood = () => {
    console.log('teste');
    setIsFoodSearchOpen(prevState => !prevState);
  }

  const handleSelectFood = (item) => {
    const newMeals = [...meals, item];
    setMeals(() => newMeals);
    handleCounterMacros(newMeals);
    handleOpenSearchFood();
  }

  return (
    <View style={styles.container}>
      <Header
        removeGoBack
        title="Dieta"
      />

      <ScrollView>        
        <Container>
          <Text style={styles.sectionTitle}>
            Meta dos macros
          </Text>

          <View style={styles.macro}>
            {MACROS.map(({ id, name, weight, measure }) => (
              <View key={id} style={styles.macroItem}>
                <Text style={styles.macroName}>{name}:</Text>
                <Text style={styles.macroWeight}>{parseInt(weight - counterMacros[id])} {measure}</Text>
              </View>
            ))}
          </View>
          
          <Text style={styles.sectionTitle}>
            Refeições feitas
          </Text>

          {meals.map(({ id, description, energy_kcal }) => (
            <View key={id} style={styles.macroItem}>
              <Text style={styles.macroName}>{description} - </Text>
              <Text style={styles.macroWeight}>{parseInt(energy_kcal)} kcal</Text>
            </View>
          ))}

          <Button title="Adicionar alimento" onPress={handleOpenSearchFood} />
        </Container>

        <Container>
          <Text style={styles.sectionTitle}>
            Sua Dieta
          </Text>
          <Text style={styles.sectionSubtitle}>
            Veja suas dieta completa com todas infos detalhadas
          </Text>

          <CardButton title="Adicionar nova dieta" iconName="add-circle" />
        </Container>
      </ScrollView>

      <ModalView visible={isFoodSearchOpen} closeModal={handleOpenSearchFood}>
        <Input
          placeholder="Busque por um alimento"
          value={foodName}
          maxLength={300}
          onChangeText={setFoodName}
          kind="light"
        />

        {foodsLoading && (
          <View style={styles.loaderWrapper}>
            <ActivityIndicator color="#ffffff" />
          </View>
        )}

        {/* {!foodsLoading && foodsError && (
          <View>
            <Text>{foodsError}</Text>
          </View>
        )} */}

        {!foodsLoading && foods && foods.length > 0 && (
          <FlatList
            style={styles.foodList}
            data={foods}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Option
                data={item}
                label="description"
                onPress={() => handleSelectFood(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <View style={{ marginBottom: 24 }} />}
          />
        )}
      </ModalView>
    </View>
  );
}

