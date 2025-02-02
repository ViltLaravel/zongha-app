import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icon";
import { router } from "expo-router";
import { ImageBackground, SafeAreaView, View } from "react-native";
const Main_Img = require("../assets/images/splash-screen.png");

export default function MainScreen() {
  return (
    <SafeAreaView>
      <ImageBackground source={Main_Img} className="h-full pb-48">
        <View className="flex-col justify-end items-center h-full">
          <Button
            variant="solid"
            size="xl"
            className="bg-white w-full max-w-xs rounded-lg"
            onPress={() => router.push("/signin")}
          >
            <ButtonText className=" text-[#4B74E8] text-lg font-poppins font-semibold">
              Continue
            </ButtonText>
            <ButtonIcon as={ArrowRightIcon} className="text-[#4B74E8]" />
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
