import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { ArrowRightIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HStack className="justify-between">
        <Text>Home</Text>
        <Text>Profile</Text>
      </HStack>
      <VStack>
        <Button>
          <ButtonText>Go to login</ButtonText>
          <ButtonIcon as={ArrowRightIcon} />
        </Button>
      </VStack>
    </SafeAreaView>
  );
}
