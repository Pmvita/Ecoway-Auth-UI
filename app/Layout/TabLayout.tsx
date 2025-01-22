import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';

// Import Icons
import { Entypo } from '@expo/vector-icons';

// Import Screens
import HomeScreen from '../Tabs/Home/HomeScreen';

// Import Components
import Loader from '../../Components/Loader';

const Tab = createBottomTabNavigator();

const TabLayout: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [loadingPercentage, setLoadingPercentage] = useState(0);

    // Simulate a loading state with a percentage (optional)
    const simulateLoading = () => {
        setLoading(true);
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            setLoadingPercentage(progress);

            if (progress >= 100) {
                clearInterval(interval);
                setLoading(false);
            }
        }, 15); // Simulate loading in ms
    };

    // Trigger loading on tab focus
    useFocusEffect(
        React.useCallback(() => {
            simulateLoading();
        }, [])
    );

    return (
        <>
            {/* Show Loader when loading */}
            {loading && 
                <Loader 
                    message={` Loading... ${loadingPercentage}%`}
                    style={{ 
                        position: 'absolute', 
                        flex: 1,
                        zIndex: 1, 
                        backgroundColor: 'lightgrey', // 3B4054
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center', 
                    }}
                />
            }

            <Tab.Navigator 
                screenOptions={{ headerShown: false }}
                initialRouteName="HomeScreen"
            >
                <Tab.Screen 
                    name="HomeScreen"  
                    component={HomeScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="grid" size={35} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
};

export default TabLayout;