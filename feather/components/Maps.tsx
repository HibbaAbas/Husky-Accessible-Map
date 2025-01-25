import React, { useState } from 'react';
import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Map() {
    const markers = [
        {coordinate: {
            latitude: 47.655066,
            longitude: -122.308229
        },
        title: "Mary Gates Hall",
        description: "Elevator is broken", 
        }
    ];

    const renderMarkers = () => {
        return markers.map((marker, index) => (
            <Marker
                key={index}
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
            />
        ));
    };

   
        
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 47.655548,
                    longitude: -122.303200,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0221,
                }}
            >
                {renderMarkers()} 
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


