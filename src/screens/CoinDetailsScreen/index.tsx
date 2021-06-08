import React, {useState} from "react";
import { View, Text ,Image, Pressable} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import PercentageChange from "../../components/PercentageChange";
import CoinPriceGraph from "../../components/CoinPriceGraph";

const historyString = JSON.stringify([
    1780.0268450491153,
    1786.8073198699567,
    1782.046103217479,
    1762.5889908844752,
    1763.4314009890902,
    1777.3722245053589,
    1784.3355424268182,
    1787.7369444570115,
    1781.4471503403727,
    1772.024762594313,
    1763.9134922416997,
    1747.6564788420428,
    1752.7022262648152,
    1757.6685681012784,
    1767.675432199823,
    1760.8175114005912,
    1763.012381471369,
    1764.7301877503367,
    1775.313072628393,
    1774.5382695317232,
    1782.2573401740067,
    1765.1277783348153,
    1788.3516778500543,
    1806.5349972314168,
    1837.183798493146,
    1817.9538062966958,
    1834.6928502670796,
    1844.928618873293,
    1843.813629416727,
    1842.5182385418418,
    1841.1977507032907,
    1841.192427904908,
    1845.4948360873184,
    1851.8651692325382,
    1867.0558982139999,
    1855.1943015819113,
    1846.0909335379095,
    1838.2264153690012,
    1810.419038540757,
    1824.5268345148056,
    1828.4975663709383,
    1791.9832004014143,
    1777.7992477815633,
    1797.5342037442288,
    1803.3481737115806,
    1801.3759350876999,
    1808.6007611039026,
    1807.7173081746294,
    1788.1360513419309,
    1799.8303823294398,
    1799.7030112431974,
    1794.1725580464706,
    1808.688488133059,
    1811.2213005234278,
    1812.861768400041,
    1825.8716692776231,
    1827.1767368715834,
    1824.711596619842,
    1817.8374177299363,
    1811.1641817678521,
    1832.1584090365382,
    1833.6671545576319,
    1830.5711183601543,
    1821.9446723326425,
    1832.131393704897,
    1832.444518483135,
    1825.5335542007315,
    1829.6576900562432,
    1805.5795618834463,
    1803.4799667945038,
    1794.7065810398558,
    1802.7066742592879,
    1799.6086726597835,
    1803.30512943912,
    1806.5320423517321,
    1813.0721788906599,
    1826.356332139717,
    1825.4108426347063,
    1800.1002193692593,
    1779.304410024195,
    1758.913241267588,
    1721.1272777005597,
    1724.823944528725,
    1722.3034247036685,
    1722.2936615962842,
    1738.4695074481863,
    1753.4905133180314,
    1761.7552192696605,
    1764.7921741182013,
    1763.7135044679944,
    1782.5360869862955,
    1803.5738194302146,
    1807.1196253154687,
    1789.344071499672,
    1813.4318514626002,
    1818.4111103299865,
    1810.4945649509805,
    1816.2000665324808,
    1819.9814143051779,
    1822.3866988478308,
    1795.8627710207159,
    1795.0283703437399,
    1777.7070033664577,
    1795.5217215914804,
    1793.44789139272,
    1799.6157551375452,
    1815.2115010257005,
    1812.1242599099446,
    1806.7643476016922,
    1798.588381268944,
    1800.3766941075141,
    1799.6995930525752,
    1803.46891857821,
    1787.8614625958608,
    1783.4711865249417,
    1797.7300268557526,
    1772.3497965675747,
    1780.1575002745242,
    1778.8854180030244,
    1757.2972875285118,
    1761.2633327660046,
    1761.60255278976,
    1751.8780123282993,
    1754.128183060773,
    1754.7089659063804,
    1770.0386069411275,
    1782.837345629066,
    1766.7749051863325,
    1764.5305118376416,
    1777.6470652491082,
    1762.1331615837605,
    1742.9221106526998,
    1759.1042911864533,
    1772.8406829717878,
    1808.411620932477,
    1806.7269267762206,
    1816.9773494592175,
    1808.8014901520426,
    1807.4528925095947,
    1808.6434500672076,
    1826.232986617112,
    1822.0846453955194,
    1813.393629942384,
    1817.7775786765494,
    1819.7857686657057,
    1817.012369974493,
    1832.103803570685,
    1826.8375746827817,
    1847.31314488019,
    1836.795380733793,
    1845.5739221567521,
    1893.8754029073823,
    1905.206010805263,
    1908.1428485460103,
    1886.3055137683048,
    1903.8502360637,
    1900.777278474742,
    1898.7948169844408,
    1902.8308938391488,
    1896.5233017841838,
    1903.1828632694762,
    1913.9629865534087,
    1900.291888856885,
    1906.4606563811412,
    1916.0752562465673,
    1924.2258027618298,
    1904.7970933949343,
    1916.9157040978675
  ]) 

const CointDetailsScreen = () => {
    const [coinData, setCoinData] = useState({
        id: '1',
        image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
        name: 'Bitcoin',
        symbol: 'BTC',
        valueChange24H: -2.23,
        valueChange1D: 4.73,
        valueChange7D: -3.23,
        currentPrice: 60232,
        amount: 2,
    })

    const onBuy = () => {
        // navigation.navigate('CoinExchange', { isBuy: true, coin, portfolioCoin });
      }
    
      const onSell = () => {
        // navigation.navigate('CoinExchange', { isBuy: false, coin, portfolioCoin });
      }

    return (
        <View style={styles.root}>
            <View style={styles.topContainer}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{ uri: coinData.image}} />
                    <View>
                        <Text style={styles.name}>{coinData.name}</Text>
                        <Text style={styles.symbol}>{coinData.symbol}</Text>
                    </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <AntDesign name={'staro'} size={30} color={'#2f95dc'} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.valueContainer}>
                    <Text style={styles.label}>Current Price</Text>
                    <Text style={styles.value}>{coinData.currentPrice}</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 hour</Text>
                        <PercentageChange value={coinData.valueChange24H} />
                    </View>

                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 day</Text>
                        <PercentageChange value={coinData.valueChange1D} />
                    </View>

                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>7 days</Text>
                        <PercentageChange value={coinData.valueChange7D} />
                    </View>
                </View>
            </View>

            <CoinPriceGraph dataString={historyString} />

            <View style={styles.row}>
                <Text>Position</Text>
                <Text>
                    {coinData.symbol} {coinData.amount} 
                    {' '}
                    (€{coinData.currentPrice * coinData.amount})
                </Text>
            </View>

            <View style={[styles.row, { marginTop: 'auto'}]}>
                <Pressable
                    style={[styles.button, { backgroundColor: '#20b100' }]}
                    onPress={onBuy}>
                    <Text style={styles.buttonText}>Buy</Text>
                </Pressable>

                <Pressable
                    style={[styles.button, { backgroundColor: '#ff0000' }]}
                    onPress={onSell}>
                    <Text style={styles.buttonText}>Sell</Text>
                </Pressable>
            </View>

        </View>
    );
};

export default CointDetailsScreen;