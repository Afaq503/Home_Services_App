import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navigations/TabNavigation";
import { useFonts } from 'expo-font'



const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key , value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};



export default function App() {
  const [fonstLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf')
  })
  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey="pk_test_ZmFpdGhmdWwtZG9yeS04OS5jbGVyay5hY2NvdW50cy5kZXYk">
      <View style={styles.container}>
        {/* Sing In Component */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        {/* SignOut */}
        <SignedOut>
          <Login />
        </SignedOut>

        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
