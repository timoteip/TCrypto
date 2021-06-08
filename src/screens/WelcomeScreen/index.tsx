import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const image =  require('../../../assets/images/Saly-1.png');
const googleButtonImage =  require('../../../assets/images/google-login.png');

const WelcomeScreen = () => {
    const signInGoogle = async () => {
        // await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google});
    }

    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <Text style={styles.header1}>Welcome to TCrypto</Text>
            <Text style={styles.header2}>Invest your virtual 100.000$ and compete with others</Text>

            <Pressable onPress={signInGoogle} style={styles.googleButton}>
                <Image style={styles.buttonImage} source={googleButtonImage} />
            </Pressable>
        </View>
    );
};

export default WelcomeScreen;