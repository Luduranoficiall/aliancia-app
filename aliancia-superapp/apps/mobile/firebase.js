import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export async function registerPush() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") return null;

  const token = (
    await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId
    })
  ).data;

  return token;
}
