import React from 'react';

import { View, Text, Button } from 'react-native';

import { observer } from 'mobx-react-lite';
import { authStore } from '../../store/authStore';

import { styles } from './styles/styles';

const DashboardScreen = observer(() => {
    const handleLogout = () => {
        authStore.logout();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> welcome !</Text>
            <Text style={styles.email}>you are joined us: {authStore.user?.email}</Text>
            <Button title="log out" onPress={handleLogout} />
        </View>
    );
});

export default DashboardScreen;
