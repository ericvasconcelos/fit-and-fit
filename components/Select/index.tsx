import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { ModalView } from '../ModalView';
import { styles } from './styles';

type Option = {
  id: string;
  label: string;
};

type Props = BorderlessButtonProps & {
  value: string;
  open: () => void;
  isVisible: boolean;
  items: Array<Option>;
  selectItem: (id: string) => void;
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
          <BorderlessButton key={item.id} style={styles.optionContainer} onPress={() => selectItem(item.id)}>
            <View style={styles.option}>
              <Text style={styles.labelOption}>
                {item.label}
              </Text>
              <Ionicons name="chevron-forward" size={24} color="white" />
            </View>
          </BorderlessButton>
        ))}
      </ModalView>
    </>
    
  )
}
