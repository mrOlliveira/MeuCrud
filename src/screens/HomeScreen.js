import react, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import styles from "../styles/styles";
import { getPeople, deletePerson } from "../servers/peopleCrud";

export default function HomeScreen(){
    const [people, setPeople] = useState([]);

    async function loadPeople(){
        try {
            const data = await getPeople();
            setPeople(data);
        } catch (error) {
            console.error('Error loading people:', error);
        }   
    };

    useEffect(() => {
        loadPeople();
    }, []);

    return(
        <view style={styles.container}>
            <text style={styles.title}>Pessoas</text>
            <Button title="adicionar pessoas" onPress={() => {navigation.navigate("addEdit")}} />
            <FlatList
                data={people}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <cardPersonal
                        item={item}
                        navigation={navigation}
                        refresh={loadPeople}
                    />
                )}
            />
        </view>
    );
}
