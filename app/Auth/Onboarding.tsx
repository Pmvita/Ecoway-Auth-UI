import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Loader from '../../Components/Loader'



const Onboarding = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

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
                    console.info('Navigating to Onboard Screen #2'),
                    handleNavigation('Onboarding2')
                }}
                >
                <Image 
                source={require('../../assets/Logo.png')}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})