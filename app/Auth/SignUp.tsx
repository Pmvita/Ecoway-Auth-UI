import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from '../../Components/Loader';

const SignUp = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNavigation = (route) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate(route);
            console.log('Navigated to:', route);
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
                onPress={() => navigation.navigate('Onboarding')}
            >
                <Text style={styles.backButton}>Back</Text>
            </TouchableOpacity>
            <View style={styles.avatar}>
                <Image style={{ width: 150, height: 150 }} source={require('../../assets/Logo-solo.png')} />
            </View>
            <Text style={styles.headerText}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#A0A4A8"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#A0A4A8"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#A0A4A8"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <TouchableOpacity 
                style={styles.signUpButton} 
                onPress={() => {
                    console.log('Sign Up Pressed');
                    handleNavigation('Home');
                }}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.optionsContainer}>
                <TouchableOpacity 
                    onPress={() => {
                        handleNavigation('SignIn');
                    }}>
                    <Text style={styles.optionText}>Already have an account? Sign In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;

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
    signUpButton: {
        backgroundColor: '#3B4054',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    signUpButtonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
    optionsContainer: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
    },
    optionText: {
        fontSize: 15,
        color: '#3B4054',
        textDecorationLine: 'underline',
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
});
