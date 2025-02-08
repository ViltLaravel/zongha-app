import { signInUser } from "@/actions/sign-in-action";
import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import {
  emailChanged,
  loadingChanged,
  passwordChanged,
} from "@/redux/_slice/sign-in-slice";
import { RootState } from "@/store";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignInScreen() {
  const state = useSelector((state: RootState) => state.signInState);
  const dispatch = useDispatch();
  const [isInvalid, setIsInvalid] = React.useState({
    email: false,
    password: false,
  });

  const handleSignIn = async () => {
    let hasError = false;

    if (!state.email) {
      setIsInvalid((prev) => ({ ...prev, email: true }));
      hasError = true;
    } else {
      setIsInvalid((prev) => ({ ...prev, email: false }));
    }

    if (!state.password) {
      setIsInvalid((prev) => ({ ...prev, password: true }));
      hasError = true;
    } else {
      setIsInvalid((prev) => ({ ...prev, password: false }));
    }

    if (hasError) return;

    dispatch(loadingChanged(true));

    try {
      const res = await signInUser({
        email: state.email,
        password: state.password,
      });

      if (res.data.success) {
        dispatch(emailChanged(""));
        dispatch(passwordChanged(""));
        await AsyncStorage.setItem("authToken", res.data.token);
        router.push("/(tabs)");
      } else {
        alert("Invalid Credentials!");
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      dispatch(loadingChanged(false));
    }
  };

  return (
    <SafeAreaView className="bg-[#F8F9FA] h-full items-center gap-8 justify-center">
      <View className="items-center">
        <Text className="text-4xl font-bold font-poppins">Welcome Back!</Text>
        <Text className="text-xl font-medium font-poppins">
          Sign in to continue
        </Text>
      </View>
      <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
        <FormControl isInvalid={isInvalid.email} size="md">
          <FormControlLabel>
            <FormControlLabelText className="font-poppins mt-1">
              Email
            </FormControlLabelText>
          </FormControlLabel>
          <Input size="md">
            <InputField
              className="font-poppins"
              type="text"
              placeholder="Email"
              value={state.email}
              onChangeText={(value) => dispatch(emailChanged(value))}
            />
          </Input>
          {isInvalid.email && (
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>Email is required!</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        <FormControl isInvalid={isInvalid.password} size="md">
          <FormControlLabel>
            <FormControlLabelText className="font-poppins mt-1">
              Password
            </FormControlLabelText>
          </FormControlLabel>
          <Input size="md">
            <InputField
              className="font-poppins"
              type="password"
              placeholder="Password"
              value={state.password}
              onChangeText={(value) => dispatch(passwordChanged(value))}
            />
          </Input>
          {isInvalid.password && (
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>Password is required!</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        <VStack className="mt-6 gap-2">
          <Button
            className="w-full"
            size="lg"
            variant="solid"
            onPress={() => handleSignIn()}
          >
            {state.isLoading ? (
              <>
                <ButtonSpinner color="white" />
                <ButtonText className="font-medium text-sm ml-2">
                  Please wait...
                </ButtonText>
              </>
            ) : (
              <ButtonText className="font-poppins font-semibold">
                Sign In
              </ButtonText>
            )}
          </Button>
          <Button className="w-full" size="md" onPress={() => router.push("/")}>
            <ButtonText className="font-poppins">Back</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}
