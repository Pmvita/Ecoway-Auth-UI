import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

// Import Screens
import Onboarding from '../app/Auth/Onboarding';
import Onboarding2 from './Auth/Onboarding2';
import SignIn from '../app/Auth/SignIn';
import SignUp from '../app/Auth/SignUp';
import ForgotPassword from '../app/Auth/ForgotPassword';
import TabLayout from '../app/Layout/TabLayout';

// Import Loader
import Loader from '../Components/Loader';

enableScreens();

const Stack = createNativeStackNavigator();

const RootLayout: React.FC = () => {
    const [loading, setLoading] = useState(false);

    // Simulate loading for demonstration (optional)
    const simulateLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000); // Simulate 3 seconds of loading
    };

    return (
        <NavigationContainer>
            {/* Show Loader when loading */}
            {loading && <Loader message=" " />}

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'fade',
                }}
            >
                {/* Authentication Screens */}
                <Stack.Screen 
                    name="Onboarding" 
                    component={Onboarding} 
                    options={{
                        // Example: Simulate loading when transitioning
                        listeners: {
                            focus: simulateLoading,
                        },
                    }}
                />
                <Stack.Screen 
                    name="Onboarding2" 
                    component={Onboarding2} 
                    />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

                {/* Main Tab Screens */}
                <Stack.Screen name="Main" component={TabLayout} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootLayout;