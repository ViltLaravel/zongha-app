import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { ChevronDownIcon, SearchIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { Pressable } from "@/components/ui/pressable";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableData,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

export default function DashboardScreen() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView className="p-4 items-center gap-5">
        <View className="justify-start gap-2 items-start w-full">
          <Pressable onPress={() => setShowDrawer(true)}>
            <Avatar size="lg">
              <AvatarFallbackText>Nicole Amoguis</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              />
              <AvatarBadge />
            </Avatar>
          </Pressable>
          <Text className="font-poppins font-extrabold text-2xl">
            Hello Nicole Amoguis,
          </Text>
          <Text className="font-poppins font-extrabold text-lg">
            Welcome Back!
          </Text>
        </View>
        <Drawer
          isOpen={showDrawer}
          onClose={() => {
            setShowDrawer(false);
          }}
          size="lg"
          anchor="left"
        >
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerHeader>
              <Heading size="3xl">Profile</Heading>
            </DrawerHeader>
            <DrawerBody>
              <Text size="2xl" className="text-typography-800">
                This is a sentence.
              </Text>
            </DrawerBody>
            <DrawerFooter>
              <Button
                onPress={() => {
                  setShowDrawer(false);
                  router.push("/signin");
                }}
                className="flex-1"
              >
                <ButtonText className="font-poppins text-base">
                  Sign Out
                </ButtonText>
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <HStack space="xl">
          <Box className="bg-background-dark gap-1 h-24 w-24 rounded-xl items-center justify-center ">
            <Ionicons name="person-outline" size={30} color="white" />
            <Text className="text-xl text-white font-poppins font-semibold">
              64
            </Text>
          </Box>
          <Box className="bg-background-dark gap-1 h-24 w-24 rounded-xl items-center justify-center ">
            <Ionicons name="bar-chart" size={30} color="white" />
            <Text className="text-xl text-white font-poppins font-semibold">
              100
            </Text>
          </Box>
          <Box className="bg-background-dark gap-1 h-24 w-24 rounded-xl items-center justify-center ">
            <Ionicons name="file-tray" size={30} color="white" />
            <Text className="text-xl text-white font-poppins font-semibold">
              55
            </Text>
          </Box>
        </HStack>
        <View className="w-full max-w-[400px] h-fit border gap-2 border-background-200 rounded-md p-2">
          <View className="flex-row gap-1">
            <Input size="xl" className="max-w-[245px] w-full">
              <InputField
                className="font-poppins text-base"
                type="text"
                placeholder="Search student"
                value=""
                onChangeText={() => {}}
              />
            </Input>
            <Button size="xl">
              <ButtonIcon as={SearchIcon} size="md" />
            </Button>
          </View>
          <View className="flex-row justify-between">
            <Select className="w-full max-w-[150px]">
              <SelectTrigger
                variant="outline"
                size="xl"
                className="justify-between px-2"
              >
                <SelectInput
                  className="items-center justify-start text-base"
                  placeholder="Filter by Year"
                />
                <SelectIcon as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Grade 11" value="ux" />
                  <SelectItem label="Grade 12" value="ux" />
                </SelectContent>
              </SelectPortal>
            </Select>
            <Select className="w-full max-w-[150px]">
              <SelectTrigger
                variant="outline"
                size="xl"
                className="justify-between px-2"
              >
                <SelectInput
                  className="items-center justify-start text-base"
                  placeholder="Filter by Section"
                />
                <SelectIcon as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Athena" value="rose" />
                  <SelectItem label="Zeus" value="rose" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </View>
        </View>
        <View className="w-full max-w-[400px] p-2 border border-background-200 rounded-md">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Section</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableData>Nicole Amoguis</TableData>
                <TableData>Grade 11</TableData>
                <TableData>Athena</TableData>
              </TableRow>
              <TableRow>
                <TableData>Mark Russel Baral</TableData>
                <TableData>Grade 11</TableData>
                <TableData>Zeus</TableData>
              </TableRow>
              <TableRow>
                <TableData>Anthony Oppus</TableData>
                <TableData>Grade 11</TableData>
                <TableData>Athena</TableData>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableCaption>Showing list of "Year 11"</TableCaption>
            </TableFooter>
          </Table>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
  },
});
