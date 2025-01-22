import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation,  } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, Button } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Loader from '../../Components/Loader';


const Onboarding2 = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

    const handleNavigation = (route) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate(route);
            console.log('Navigated to:', route);
        }, 700);
    };


    return (
        <SafeAreaView style={styles.container} >
            {isLoading && <Loader style={{ position: 'absolute', zIndex: 1, backgroundColor: '#3B4054', borderRadius: 100, }} />}
            <TouchableOpacity 
                style={styles.backButtonContainer}
                onPress={() => {
                    console.info('pressed'),
                    handleNavigation('Onboarding')
                }}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Image
                source={require('../../assets/Images/Onboarding2.png')}
                style={styles.img}
                />
            <Text style={styles.headerText}>The Best Way To</Text>
            <Text style={styles.subHeaderText}>manage your finances 💰</Text>
            <Text style={styles.bodyText}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Blanditiis libero adipisci omnis distinctio aut dolorem est sapiente similique veniam, non harum. 
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => handleNavigation('SignIn')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity> 
        </SafeAreaView>
    )
}

export default Onboarding2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B4054',
    },
    backButtonContainer: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        padding: 5,
    }, 
    img: {
        width: 270,
        height: 270,
        top: -150,
        resizeMode: 'contain',
        borderColor: '#E5E5E5',
        borderWidth: 2,
        borderRadius: 100,
    },
    headerText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#E5E5E5',
        top: -100,
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
    subHeaderText: {
        fontSize: 20,
        color: '#E5E5E5',
        top: -70,
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
    bodyText: {
        fontSize: 13,
        color: 'lightgrey',
        top: 20,
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        padding: 10,
        top: 100,
    },
    buttonText: {
        color: '#3B4054',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
})