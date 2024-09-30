import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";
import { Pressable, PressableProps, Text, View } from "react-native";


export type IconNameProps = keyof typeof MaterialIcons.glyphMap

type DrawerButtonProps = {
    title: string,
    isFocused?: boolean
    isDivider?: boolean
    iconName: IconNameProps
    notifications?: number
} & PressableProps

export function DrawerButton({title, iconName, isFocused, isDivider, notifications, ...rest}: DrawerButtonProps) {

  return (
    <Pressable
      className={clsx("py-2 w-full", {
        "border-b ml-10 border-gray-500": isDivider,
      })}
      {...rest}
    >
      <View
        className={clsx("flex-row items-center gap-4 h-14 px-6 -ml-2 w-full", {
          "-ml-12": isDivider,
          "bg-orange-800 rounded-full": isFocused
        })}
      >
        <MaterialIcons
          name={iconName}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />
        <Text
          className={clsx("text-white font-subtitle text-base flex-1", {
            "text-orange-300": isFocused,
          })}
        >
          {title}
        </Text>
        <Text className={clsx("text-gray-400 text-sm font-body", {
            "text-orange-300": isFocused
        })}>
            {notifications}
        </Text>
      </View>
    </Pressable>
  );
}
