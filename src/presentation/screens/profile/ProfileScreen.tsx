import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {

  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );
  const changeProfile = useProfileStore( state => state.changeProfile );

  return (
    <View style={ styles.container }>
      <Text style={ styles.tile }>{ name }</Text>
      <Text style={ styles.tile }>{ email }</Text>

      <Pressable
        onPress={ () => useProfileStore.setState({ name: 'Alberto García' }) }
        style={ styles.primaryButton }
      >
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        onPress={ () => useProfileStore.setState({ email: 'albertog@google.com' }) }
        style={ styles.primaryButton }
      >
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        onPress={ () => changeProfile( 'Peter Parker', 'spiderman@gmail.com' )}
        style={ styles.primaryButton }
      >
        <Text>Regresar cambios</Text>
      </Pressable>

    </View>
  );
};
