import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProfileItem } from './ProfileItem';
import { styles } from './styles';
import { version, updatedAt } from '../../package.json';
import { colors } from '../../constants/tokens';


const DATA = [
  {
    id: 'UserInfos',
    title: 'Meus dados',
    icon: 'person-outline',
    iconColor: colors.primaryDark,
    page: 'UserInfos',
  },
  {
    id: 'AboutApp',
    title: 'Sobre o app',
    icon: 'help-circle-outline',
    iconColor: colors.primary,
    page: 'AboutApp',
  },
  {
    id: 'UseTerms',
    title: 'Termos de uso',
    icon: 'information-circle-outline',
    iconColor: colors.primaryClean,
    page: 'UseTerms',
  },
];

export default function Profile() {
  const navigation = useNavigation();
  
  const handleNavigate = (page: string) => {
    navigation.navigate(page);
  }
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View style={styles.wrapperImg}>
          <Image
            style={styles.imgProfile}
            source={{
              uri: 'https://github.com/ericvasconcelos.png',
            }}
          />
        </View>
        <View>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.name}>Eric Vasconcelos</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <ProfileItem
              data={item}
              onPress={() => handleNavigate(item.page)}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          ListFooterComponent={() => <View style={styles.itemSeparator} />}
          keyExtractor={item => item.id}
        />
        <ProfileItem data={{
          id: 'Logout',
          title: 'Sair',
          icon: 'log-out-outline',
          iconColor: colors.bluePale,
        }} />

        <View style={styles.version}>
          <Text style={styles.versionText}>Versão: {version}</Text>
          <Text style={styles.versionDate}>Atualizado em {updatedAt}</Text>
        </View>
      </View>
    </View>
  );
}
