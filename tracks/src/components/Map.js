import React, {useState} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Polyline} from "react-native-maps";

const Map = () => {
    let points = [];
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            points.push(
                {
                    latitude: 37.332 + i * 0.01,
                    longitude: -122.031 + i * 0.01,
                }
            )

        } else {
            points.push(
                {
                    latitude: 37.332 + i * 0.02,
                    longitude: -122.031 + i * 0.01,
                }
            )
        }
    }

    return (
        <MapView style={styles.map}
                 initialRegion={{
                     latitude: 37.332,
                     longitude: -122.031,
                     longitudeDelta: 0.01,
                     latitudeDelta: 0.01
                 }}
        >
            <Polyline coordinates={points}/>
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;