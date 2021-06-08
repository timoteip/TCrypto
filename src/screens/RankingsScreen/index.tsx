import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import UserRangeItem from '../../components/UserRankingItem';

const image =  require('../../../assets/images/Saly-20.png');

const portofolioCoins = [{
    id: '1',
    name: 'Virtual EURO',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    netWorth: 100000,
}, {
    id: '2',
    name: 'Bitcoin',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    netWorth: 75994,
}, {
    id: '4',
    name: 'Etherium',
    image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
    netWorth: 80153,
}]

const PortofolioScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{width: '100%'}}
                data={portofolioCoins}
                renderItem={({item, index}) => <UserRangeItem user={item} place={index + 1} />}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <Text style={styles.label}>Rankings</Text>
                    </>
                )}
            />
        </View>
    );
};

export default PortofolioScreen;