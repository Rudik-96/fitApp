// src/screens/login/index.tsx
import React, { useState } from 'react';

import { View, TextInput, Button, Text } from 'react-native';

import { authStore } from '../../store/authStore';
import { observer } from 'mobx-react-lite';

import { styles } from './styles/styles';

const LoginScreen = observer(() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        authStore.login(email, password);
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
            <Button title="Login" onPress={handleLogin} />
            {authStore.error ? <Text style={styles.error}>{authStore.error}</Text> : null}
        </View>
    );
});



export default LoginScreen;
