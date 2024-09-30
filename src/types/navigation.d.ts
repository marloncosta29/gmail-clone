import { IconNameProps } from '@/components/drawer-button'
import {DrawerNavigationOptions} from '@react-navigation/drawer'

interface CustomOptions extends DrawerNavigationOptions {
    iconName: IconNameProps
    isDivider: boolean
    notifications?: number
    sectionTitle?: string
}