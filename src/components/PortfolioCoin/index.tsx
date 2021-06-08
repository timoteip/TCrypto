import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const image =  require('../../../assets/images/Saly-10.png');

export interface PortofolioCoinProps {
    portofolioCoin: {
        image: string,
        name: string,
        symbol: string,
        amount: number,
        valueEURO: number,
    }
   
}

const PortofolioCoin = (props: PortofolioCoinProps) => {
    const {
        portofolioCoin: {
            image,
            name,
            symbol,
            amount,
            valueEURO
        }

    } = props;

    const navigation = useNavigation();

    return (
        <Pressable style={styles.root} onPress={() => navigation.navigate('CoinDetails')}>
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: image}} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.name}>€{valueEURO}</Text>
                <Text style={styles.symbol}>{symbol} {amount}</Text>
            </View>
        </Pressable>
    );
};

export default PortofolioCoin;