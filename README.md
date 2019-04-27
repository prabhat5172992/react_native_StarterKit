# Rract Native
React Native Starter Project

# IOS
See documentation in this link: https://facebook.github.io/react-native/docs/getting-started

# ANDROID
First Install Android Studio and install latest stable AVD.
LINK: https://developer.android.com/studio?pkg=studio#downloads
==> SET ANDROID_HOME environment variable --> c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
also add tools and build-tools in user variables path

React Native app Setup
----------------------
1) npm install -g react-native-cli
2) npm install -g yarn (react-native uses yarn so you have to install it)
3) react-native init YOUR__APP__NAME
4) Go to your app directory and run ==> react-native start
5) react-native run-android (it will run your app on AVD)

====================================
For Navigation run below commands
npm install --save react-navigation
npm install --save react-native-gesture-handler
react-native link react-native-gesture-handler

Replace MainActivity.java file with below code
---------------------------------------------
package com.myapp;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
# NOTE: Replace package and className accordingly
-------------------------------------------------
