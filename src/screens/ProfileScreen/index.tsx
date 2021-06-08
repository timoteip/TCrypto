import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const image =  require('../../../assets/images/Saly-16.png');

const ProfileScreen = () => {
    const [user, setUser] = useState({
        id: '1',
        name: "Timo",
        email: "timotei.perju@gmail.com",
        image: 'https://image.freepik.com/free-vector/cryptocurrency-logo-template_8163-114.jpg',
        netWorth: 23000,
    })

    const signOut = () => {
        console.warn("Sign out!!")
    }

    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />

            <View style={styles.userContainer}>
                    <Image style={styles.userImage} source={{ uri: user.image}} />
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                        <Text style={styles.value}>€{user.netWorth}</Text>
                    </View>
            </View>

            <Pressable onPress={signOut} style={{marginTop: 'auto'}}>
                <Text>Sign Out</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;