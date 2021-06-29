import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Switch } from '../../components/Switch';
import { Select } from '../../components/Select';

const PLAN_LIST = [
  {
    id: 'basic',
    label: 'Básico',
  },
  {
    id: 'super-basic',
    label: 'Super Básico',
  },
  {
    id: 'premium',
    label: 'Premium',
  },
  {
    id: 'master',
    label: 'Master',
  }
]

export default function UserInfos() {
  const [name, setName] = useState('Eric Vasconcelos de Oliveira');
  const [plan, setPlan] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [openPlanModal, setOpenPlanModal] = useState(false);

  const handleOpenPlanModal = () => setOpenPlanModal(previousState => !previousState);
  const toggleSwitch = () => setIsActive(previousState => !previousState);
  const handleSelectPlan = (selected: string) => setPlan(selected);

  return (
    <View style={styles.container}>
      <Header
        title="Meus dados"
      />

      <Input
        placeholder="Nome"
        value={name}
        maxLength={300}
        onChangeText={setName}
      />

      <Select
        value={plan || 'Escolha o seu plano'}
        open={handleOpenPlanModal}
        isVisible={openPlanModal}
        items={PLAN_LIST}
        selectItem={handleSelectPlan}
      />

      <Switch
        labelOn="Desativar o plano"
        labelOff="Ativar o plano"
        value={isActive}
        toggle={toggleSwitch}
      />
    </View>
  );
}
