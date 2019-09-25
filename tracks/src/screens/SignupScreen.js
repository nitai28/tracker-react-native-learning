import React, {useState, useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {Input, Text, Button} from 'react-native-elements'
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "../components/Spacer";

const SignupScreen = ({navigation}) => {
    const {state, signUp} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Spacer>
            <Input autoCorrect={false}
                   autoCapitalize="none"
                   onChangeText={setEmail}
                   value={email} label="Email"/>
        </Spacer>
        <Spacer>
            <Input autoCorrect={false}
                   autoCapitalize="none"
                   onChangeText={setPassword}
                   value={password}
                   secureTextEntry
                   label="Password"/>
        </Spacer>
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
        <Spacer>
            <Button onPress={() => signUp({email, password})} title="Sign Up"/>
        </Spacer>
    </View>
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    errorMessage:{
        color:'red',
        fontSize:20,
        marginLeft:15,
        marginTop:15
    },
});

export default SignupScreen;