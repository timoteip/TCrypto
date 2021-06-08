import React, {useState, useEffect} from 'react';
import { View, Text, Image, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import styles from "./styles";
import { useRoute } from '@react-navigation/native';

const image =  require('../../../assets/images/Saly-31.png');

const CoinExchangeScreen = () => {
    const [coinAmount, setCoinAmount] = useState('')
    const [coinEUROValue, setCoinEUROValue] = useState('')
    const [euroPortfolioCoin, setEuroPortfolioCoin] = useState(null);

    const maxEURO = 100000;

    const route = useRoute();

    const isBuy = route?.params?.isBuy;
    const coinData = route?.params?.coinData;
    const portfolioCoin = route?.params?.portfolioCoin;

    useEffect(() => {
        const amount = parseFloat(coinAmount)
        if (!amount && amount !== 0) {
          setCoinAmount("");
          setCoinEUROValue("");
          return;
        }
        setCoinEUROValue((amount * coinData?.currentPrice).toString());
      }, [coinAmount]);

      useEffect(() => {
        const amount = parseFloat(coinEUROValue)
        if (!amount && amount !== 0) {
          setCoinAmount("");
          setCoinEUROValue("");
          return;
        }
        setCoinAmount((amount / coinData?.currentPrice).toString());
      }, [coinEUROValue]);

      const onPlaceOrder = async () => {
        const maxEuro = euroPortfolioCoin?.amount || 0;
        if (isBuy && parseFloat(coinEUROValue) > maxEuro) {
          Alert.alert('Error', `Not enough EURO coins. Max: €{maxEuro}`);
          return;
        }
        if (!isBuy && (!portfolioCoin || parseFloat(coinAmount) > portfolioCoin.amount)) {
          Alert.alert('Error', `Not enough €{coin.symbol} coins. Max: €{portfolioCoin.amount || 0}`);
          return;
        }
    
        await placeOrder();
      }

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={80}
        >
            <Text style={styles.title}>
                {isBuy ? 'Buy ' : "Sell "}
                {coinData?.name}
            </Text>
            <Text style={styles.subtitle}>
                1 {coinData?.symbol}
                {' = '}
                €{coinData?.currentPrice}
            </Text>
            <Image style={styles.image} source={image} />

            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        keyboardType="decimal-pad"
                        placeholder="0"
                        value={coinAmount}
                        onChangeText={setCoinAmount}
                    />
                    <Text>{coinData?.symbol}</Text>
                </View>

                <Text style={{fontSize: 30}}>=</Text>

                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder="0"
                        keyboardType="decimal-pad"
                        value={coinEUROValue}
                        onChangeText={setCoinEUROValue}
                    />
                    <Text>EURO</Text>
                </View>
            </View>

            <Pressable style={styles.button} onPress={onPlaceOrder}>
                <Text style={styles.buttonText}>Place Order</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
};

export default CoinExchangeScreen;