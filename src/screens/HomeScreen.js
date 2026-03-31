import React, { useState, useCallback } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import CardPersonal from '../components/CardPersonal';
import styles from "../styles/styles";
import { getPeople } from "../servers/peopleCrud";

export default function HomeScreen(){
    const navigation = useNavigation();
    const [people, setPeople] = useState([]);

    async function loadPeople(){
        try {
            const data = await getPeople();
            setPeople(data);
        } catch (error) {
            console.error('Error loading people:', error);
        }   
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pessoas</Text>
            <Button title="adicionar pessoas" onPress={() => navigation.navigate("addEdit")} />
            <FlatList
                data={people}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardPersonal 
                        item={item}
                        navigation={navigation}
                        refresh={loadPeople}
                    />
                )}
            />
        </View>
    );
}