export default {
  expo: {
    name: "TapGo",
    slug: "TapGo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    newArchEnabled: true,
    androidNavigationBar: {
      visible: true,
      barStyle: "dark-content",
      backgroundColor: "#000000",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
      softwareKeyboardLayoutMode: "pan",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.signum.TapGo",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: ["expo-font", "@react-native-google-signin/google-signin"],
    extra: {
      eas: {
        projectId: "4bcb948f-f225-4fd7-b7aa-9ea8007c3c8a",
      },
    },
  },
};
