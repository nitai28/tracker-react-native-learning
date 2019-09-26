import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {Context as AuthContext} from "../context/AuthContext";
import {NavigationEvents} from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({navigation}) => {
    const {state, signIn, clearErrorMessage} = useContext(AuthContext);

    return <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage}/>
        <AuthForm
            errorMessage={state.errorMessage}
            onSubmit={signIn}
            headerText="Sign in your account"
            submitButtonText="Sign In"
        />
        <NavLink text="Don't have an account? Sign up instead" routeName="Signup"/>
    </View>
};

SigninScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },

});

export default SigninScreen;