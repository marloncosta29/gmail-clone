import { DrawerContent } from "@/components/drawer-content";
import { CustomOptions } from "@/types/navigation";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "75%",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        options={
          {
            title: "Todas as caixas de entrada",
            iconName: "all-inbox",
            isDivider: true,
            notifications: 10,
          } as CustomOptions
        }
        name="(tabs)"
      />
      <Drawer.Screen
        name="inbox"
        options={
          {
            title: "Entrada",
            iconName: "inbox",
            notifications: 3,
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="stars"
        options={
          {
            title: "Com estrelas",
            iconName: "star-outline",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="postponed"
        options={
          {
            title: "Adiados",
            iconName: "schedule",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="important"
        options={
          {
            title: "Importante",
            iconName: "label-important-outline",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="send"
        options={
          {
            title: "Enviado",
            iconName: "send",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="programmed"
        options={
          {
            title: "Programado",
            iconName: "schedule-send",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="exit-box"
        options={
          {
            title: "Caixa de saída",
            iconName: "outbox",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="sketch"
        options={
          {
            title: "Rascunho",
            iconName: "note",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="all-emails"
        options={
          {
            title: "Todos os e-mails",
            iconName: "email",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="span"
        options={
          {
            title: "Spam",
            iconName: "info-outline",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="trash"
        options={
          {
            title: "Lixeira",
            iconName: "delete-outline",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="read"
        options={
          {
            title: "Lidos",
            iconName: "label-important-outline",
            sectionTitle: "Marcadores",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="general"
        options={
          {
            title: "Geral",
            iconName: "label-important-outline",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="new-marker"
        options={
          {
            title: "Criar novo",
            iconName: "add",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="config"
        options={
          {
            title: "Configurações",
            iconName: "settings",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="feedback"
        options={
          {
            title: "Enviar feedback",
            iconName: "feedback",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="help"
        options={
          {
            title: "Ajuda",
            iconName: "help-outline",
          } as CustomOptions
        }
      />
    </Drawer>
  );
}
