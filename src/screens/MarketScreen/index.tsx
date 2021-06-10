import React, { useState, useEffect } from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import styles from './styles';
import MarketCoin from "../../components/MarketCoin";
import { listCoins } from '../../../graphql/queries'

const image =  require('../../../assets/images/Saly-17.png');

// const portfolioCoins = [{
//   id: '1',
//   name: 'Virtual Dollars',
//   image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
//   symbol: 'USD',
//   valueChange24H: 6.420,
//   valueUSD: 69420,
// }, {
//   id: '2',
//   name: 'Bitcoin',
//   image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
//   symbol: 'USD',
//   valueChange24H: -1.12,
//   valueUSD: 59420,
// }, {
//   id: '3',
//   name: 'Etherium',
//   image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
//   symbol: 'ETH',
//   valueChange24H: 3.54,
//   valueUSD: 30120,
// },
// ]

const PortfolioScreen = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listCoins));
      setCoins(response.data.listCoins.items);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCoins();

  }, [])

  return (
    <View style={styles.root}>
      <FlatList
        style={{width: '100%'}}
        data={coins}
        onRefresh={fetchCoins}
        refreshing={loading}
        renderItem={({item}) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.label}>Market</Text>
          </>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
