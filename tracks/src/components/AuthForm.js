import React, {useState} from "react";
import {StyleSheet} from "react-native";
import {Text, Button, Input} from 'react-native-elements'
import Spacer from "./Spacer";

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button onPress={()=>onSubmit({email, password})} title={submitButtonText}/>
            </Spacer>
        </>
    )
};
const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontSize: 18,
        marginLeft: 15,
        marginTop: 15
    },
});
export default AuthForm;