import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function SignInScreen({ promptAsync }) {
    return (
        <SafeAreaView style={{ flex:1, alignItems:"center", justifyContent:"center"}}>
            <TouchableOpacity style={{
                backgroundColor: "#4285F4",
                width: "90%",
                padding: 10,
                borderRadius: 15,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 15,
                marginTop: 80,
                marginBottom: 150,
            }}
            onPress={() => promptAsync()}>
                <AntDesign name="google" size={30} color="white"/>
                <Text style={{ fontWeight: "bold", color:"white"}}> 
                Sign In with Google
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}