import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const navigation = useNavigation();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
      await createUser(email, password);
      setIsAuthenticating(false);
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later."
      );
      setIsAuthenticating(false);
    }
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
