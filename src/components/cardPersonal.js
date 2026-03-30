function cardPersonal({ name, email, phone }) {
    return(
        <view style={styles.card}>
            <view>
                <text style={styles.name}>
                    {item.firstName} {item.lastName} 
                </text>

                <text style={styles.email}>
                    {item.email}
                </text>
            </view>

            <view>
                <button title="editar" onPress={() => 
                    {navigation.navigate("addEdit", {person: item})}} />

                <button title="deletar" 
                    onPress={async ()=>{ 
                        await deletePerson(item.id);
                        refresh();}}/>
            </view>
        </view>
    );
}
