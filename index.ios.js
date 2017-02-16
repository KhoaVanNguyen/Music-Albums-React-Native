// import a library to help create a
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
const App = () => {
    return (
        <View>
            <Header headerText={'DM !Bullshit that'}/>
            <AlbumList/>
        </View>
    );
};
AppRegistry.registerComponent('Albums', () => App);
