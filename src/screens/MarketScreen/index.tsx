import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import MarketCoin from '../../components/MarketCoin';

const image =  require('../../../assets/images/Saly-17.png');

const portofolioCoins = [{
    id: '1',
    name: 'Virtual EURO',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'EURO',
    valueChange24H: -100.000,
    valueEURO: 100000,
}, {
    id: '2',
    name: 'Bitcoin',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'BTC',
    valueChange24H: 1.12,
    valueEURO: 75994,
}, {
    id: '4',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'ETH',
    valueChange24H: 30,
    valueEURO: 80153,
}, {
    id: '5',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'ETH',
    valueChange24H: 30,
    valueEURO: 80153,
}, {
    id: '6',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'ETH',
    valueChange24H: 30,
    valueEURO: 80153,
}, {
    id: '7',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'ETH',
    valueChange24H: 30,
    valueEURO: 80153,
}, {
    id: '8',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'ETH',
    valueChange24H: 30,
    valueEURO: 80153,
}, {
    id: '9',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'ETH',
    valueChange24H: 30,
    valueEURO: 80153,
}, {
    id: '10',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'ETH',
    valueChange24H: 30,
    valueEURO: 80153,
}, {
    id: '11',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'ETH',
    valueChange24H: 30,
    valueEURO: 80153,
}, {
    id: '12',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'ETH',
    valueChange24H: 30,
    valueEURO: 80153,
}, {
    id: '13',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    symbol: 'ETH',
    valueChange24H: 30,
    valueEURO: 80153,
}]

const PortofolioScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{width: '100%'}}
                data={portofolioCoins}
                renderItem={({item}) => <MarketCoin marketCoin={item} />}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <Text style={styles.label}>Portofolio Balance</Text>
                    </>
                )}
            />
        </View>
    );
};

export default PortofolioScreen;