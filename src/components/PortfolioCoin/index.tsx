import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import image from '../../../assets/images/Saly-10.png';

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
    return (
        <View style={styles.root}>
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
        </View>
    );
};

export default PortofolioCoin;