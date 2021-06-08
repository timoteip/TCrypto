import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import image from '../../../assets/images/Saly-10.png';

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
    return (
        <View style={styles.root}>
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: image}} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={{}}>{symbol}</Text>
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.name}>€{valueEURO}</Text>
                <Text style={{color: valueChange24H > 0 ? '#3a960c' : '#f10000'}}>
                    {valueChange24H > 0 && '+'}{valueChange24H}
                </Text>
            </View>
        </View>
    );
};

export default marketCoin;