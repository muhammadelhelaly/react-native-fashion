import * as SecureStore from "expo-secure-store";

const key = "userEmail";

const storeUser = async email => {
  try {
    await SecureStore.setItemAsync(key, email);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const getEmail = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

export default { getEmail, removeUser, storeUser };
