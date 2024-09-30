import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Image, ScrollView, View } from "react-native";
import { DrawerButton } from "./drawer-button";
import { CustomOptions } from "@/types/navigation";
import drawer from "expo-router/drawer";

export function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image
          source={require("@/assets/logo.png")}
          className="w-28 ml-5"
          resizeMode="contain"
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {props.state.routes.map((route, index) => {
            console.log("-------------------------");
            console.log({ pindex: props.state.index , index });
            console.log("-------------------------");
            const isFocused = props.state.index === index;
            const options = props.descriptors[route.key]
              .options as CustomOptions;
            if (options.title === undefined) {
              return;
            }

            const onPress = () => {
              const event = props.navigation.emit({
                type: "drawerItemPress",
                canPreventDefault: true,
                target: route.key,
              });
              if (!isFocused && !event?.defaultPrevented) {
                props.navigation.navigate(route.name, route.params);
              }
            };

            return (
              <View key={route.key}>
                <DrawerButton
                  onPress={onPress}
                  title={options.title}
                  iconName={options.iconName}
                  isDivider={options.isDivider}
                  notifications={options.notifications}
                  isFocused
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
