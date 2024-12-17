module.exports = {
  expo: {
    name: "TestApp",
    slug: "TestApp",
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
      googleServicesFile:
        process.env.GOOGLE_SERVICES_JSON ?? "google-services.json",
      softwareKeyboardLayoutMode: "pan",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.lestlinrobins.TestApp",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: ["expo-font", "@react-native-google-signin/google-signin"],
    extra: {
      eas: {
        projectId: "82ca61f2-8440-4ea9-9075-0a088272f9e8",
      },
    },
  },
};
