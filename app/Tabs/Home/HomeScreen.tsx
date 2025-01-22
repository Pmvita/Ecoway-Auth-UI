import React from 'react';
import { StyleSheet, Text, View, Platform, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome6 } from '@expo/vector-icons';

const HomeScreen = () => {
    const navigation = useNavigation();

    // Example expense data with specific icons
    const expensesData = [
        { id: '1', title: 'Groceries', amount: '$1,200.00', iconName: 'cart-shopping' },
        { id: '2', title: 'Rent', amount: '$3,500.00', iconName: 'house-chimney'},
        { id: '3', title: 'Utilities', amount: '$850.00', iconName: 'lightbulb' },
        { id: '4', title: 'Transportation', amount: '$300.00', iconName: 'bus' },
    ];

    const renderExpenseItem = ({ item }) => (
        <View style={styles.expenseItem}>
            <FontAwesome6 name={item.iconName} size={24} color="#466AEA" />
            <Text style={styles.expenseTitle}>{item.title}</Text>
            <Text style={styles.text}>{item.amount}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBackground}>
                <Text style={styles.balanceText}>Balance</Text>
                <Text style={styles.balance}>$53,301.61</Text>
                <Text style={styles.currentMonth}>February 25</Text>
            </View>

            <View style={styles.moreInfo}>
                <View style={styles.netIncome}>
                    <FontAwesome6 name="wallet" size={24} color="black" />
                    <Text>Net Income</Text>
                    <Text style={styles.text}>$13,301.61</Text>
                </View>
                <View style={styles.expenses}>
                    <FontAwesome6 name="wallet" size={24} color="black" />
                    <Text>Expenses</Text>
                    <Text style={styles.text}>$7,550.00</Text>
                </View>
            </View>

            <View style={styles.limitContainer}>
                <Text style={styles.limitTitle}>Monthly Spending{'\n'}Limit</Text>
                <Image 
                    source={require('../../../assets/Images/Ellipse3.png')} 
                    style={styles.limitImage} 
                />
                <Text style={styles.limitText}>Spent: $5,000/$10,000</Text>
            </View>

            <Text style={styles.expensesTitle}>Expenses</Text>
            <FlatList
                data={expensesData}
                renderItem={renderExpenseItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.expensesContainer}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBackground: {
        backgroundColor: '#466AEA',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    balanceText: {
        color: '#FFF',
        fontSize: Platform.OS === 'ios' ? 27 : 15,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
    balance: {
        color: '#FFF',
        fontSize: Platform.OS === 'ios' ? 45 : 30,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
    currentMonth: {
        color: '#FFF',
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
    moreInfo: {
        top: -40,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        width: '90%',
        borderRadius: 60,
        margin: 10,
    },
    netIncome: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '50%',
        height: 80,
        borderRadius: 20,
        padding: 10,
    },
    expenses: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '50%',
        height: 80,
        borderRadius: 20,
        padding: 10,
    },
    text: {
        color: 'lightgrey',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    },
    limitContainer: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '90%',
        height: 'auto',
        borderRadius: 20,
        padding: 10,
        bottom: Platform.OS === 'ios' ? 30 : 20,
    },
    limitTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
        top: 40,
    },
    limitImage: {
        width: 150,
        height: 150,
        top: -20,
        right: -200,
    },
    limitText: {
        color: 'grey',
        position: 'absolute',
        fontSize: 15,
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
        top: 130,
        left: 10,
    },
    expensesTitle: {
        color: '#333',
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20,
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
        bottom: Platform.OS === 'ios' ? 30 : 20,
    },
    expensesContainer: {
        paddingHorizontal: 10,
        marginTop: 0,
    },
    expenseItem: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: Platform.OS === 'ios' ? 100 : 140,
        height: Platform.OS === 'ios' ? 120 : 180,
        borderRadius: 15,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        bottom: Platform.OS === 'ios' ? 0 : -20,
    },
    expenseTitle: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});