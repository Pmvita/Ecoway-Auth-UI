import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from '../../Components/Loader';

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleNavigation = (route) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate(route);
            console.log('Navigated to:', route);
        }, 700);
    };
    const handlePasswordReset = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            console.log(`Password reset link sent to: ${email}`);
            alert('Password reset link has been sent to your email.');
        }, 700);
    };

    return (
        <SafeAreaView style={styles.container}>
            {isLoading && (
                <Loader
                    style={{
                        marginTop: 200,
                        position: 'absolute',
                        zIndex: 1,
                        backgroundColor: '#3B4054',
                        borderRadius: 100,
                    }}
                />
            )}
            <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={() => handleNavigation('SignIn')}
            >
                <Text style={styles.backButton}>Back</Text>
            </TouchableOpacity>
            <View style={styles.avatar}>
                <Image style={{ width: 150, height: 150 }} source={require('../../assets/Logo-solo.png')} />
            </View>
            <Text style={styles.headerText}>Forgot Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#A0A4A8"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity style={styles.resetButton} onPress={handlePasswordReset}>
                <Text style={styles.resetButtonText}>Reset Password</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    backButtonContainer: {
        position: 'absolute',
        paddingTop: 30,
        left: 20,
    },
    backButton: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        padding: 10,
    },
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D6DFFF',
        marginTop: 100,
        borderRadius: 20,
        width: 150,
        height: 150,
        overflow: 'hidden',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3B4054',
        marginTop: 30,
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
    inputContainer: {
        width: '100%',
        marginTop: 20,
    },
    input: {
        backgroundColor: '#F0F3F5',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        marginBottom: 15,
        color: '#3B4054',
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
        borderColor: 'lightgray',
        borderWidth: 2,
    },
    resetButton: {
        backgroundColor: '#3B4054',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    resetButtonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
});