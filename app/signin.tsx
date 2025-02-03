import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { HStack } from "@/components/ui/hstack";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

export default function SignInScreen() {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("12345");
  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
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
        <FormControl
          isInvalid={isInvalid}
          size="md"
          isDisabled={false}
          isReadOnly={false}
          isRequired={false}
        >
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
              value=""
              onChangeText={() => {}}
            />
          </Input>
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
              value=""
              onChangeText={() => {}}
            />
          </Input>
          <FormControlHelper>
            <FormControlHelperText className="font-poppins">
              Must be atleast 6 characters.
            </FormControlHelperText>
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <VStack className="mt-6 gap-2">
          <Button
            className="w-full"
            size="lg"
            variant="solid"
            onPress={() => router.push("/(tabs)")}
          >
            <ButtonText className="font-poppins font-semibold">
              Sign In
            </ButtonText>
          </Button>
          <Button className="w-full" size="md" onPress={() => router.push("/")}>
            <ButtonText className="font-poppins">Back</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}
