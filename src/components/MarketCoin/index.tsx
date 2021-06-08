import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import PercentageChange from "../PercentageChange";

const image =  require('../../../assets/images/Saly-10.png');

export interface marketCoinProps {
    marketCoin: {
        image: string,
        name: string,
        symbol: string,
        valueChange24H: number,
        valueEURO: number,
    }
   
}

const marketCoin = (props: marketCoinProps) => {
    const {
        marketCoin: {
            image,
            name,
            symbol,
            valueChange24H,
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
                <PercentageChange value={valueChange24H} />
            </View>
        </Pressable>
    );
};

export default marketCoin;