// src/screens/signUp/index.tsx
import React, { useState } from 'react';

import { View, TextInput, Button, Text } from 'react-native';

import { observer } from 'mobx-react-lite';
import { authStore } from '../../store/authStore';

import { styles } from './styles/styles';

const SignUpScreen = observer(() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        authStore.signUp(email, password);
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
            <Button title="Sign Up" onPress={handleSignUp} />
            {authStore.error ? <Text style={styles.error}>{authStore.error}</Text> : null}
        </View>
    );
});

export default SignUpScreen;
