import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import { SafeAreaView } from "react-native";

export default function DashboardScreen() {
  return (
    <SafeAreaView>
      <VStack className="p-4">
        <Button onPress={() => router.push("/signin")}>
          <ButtonText>Go to login</ButtonText>
          <ButtonIcon as={ArrowRightIcon} />
        </Button>
      </VStack>
    </SafeAreaView>
  );
}
