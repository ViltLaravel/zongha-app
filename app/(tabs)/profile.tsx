import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import { SafeAreaView } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <VStack className="p-4 gap-4">
        <Card className="justify-center items-center rounded-lg p-4">
          <Avatar size="lg">
            <AvatarFallbackText>Nicole Amoguis</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
            <AvatarBadge />
          </Avatar>
          <Heading className="font-poppins text-xl">Nicole Amoguis</Heading>
          <Text className="font-poppins text-sm">nicole@gmail.com</Text>
        </Card>
        <Button
          className="w-full"
          size="md"
          onPress={() => router.push("/signin")}
        >
          <ButtonText className="font-poppins">Sign Out</ButtonText>
        </Button>
      </VStack>
    </SafeAreaView>
  );
}
