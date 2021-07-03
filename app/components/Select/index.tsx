import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { ModalView } from '../ModalView';
import { Option } from '../Option';
import { styles } from './styles';

type OptionType = {
  id: string;
  label: string;
};

type Props = BorderlessButtonProps & {
  value: string;
  open: () => void;
  isVisible: boolean;
  items: Array<OptionType>;
  selectItem: (item: any) => void;
};

export const Select = ({ value, open, isVisible, items, selectItem, ...rest }: Props) => {
  return (
    <>
      <BorderlessButton style={styles.container} onPress={open} {...rest}>
        <View style={styles.select}>
          <Text style={styles.label}>
            {value || 'Selecione um plano'}
          </Text>
          <Ionicons name="chevron-down" size={24} color="black" />
        </View>
      </BorderlessButton>

      <ModalView visible={isVisible} closeModal={open}>
        {items.map(item => (
          <Option
            data={item}
            label="label"
            onPress={() => selectItem(item)}
          />
        ))}
      </ModalView>
    </>
    
  )
}
