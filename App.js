import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Platform,
  useWindowDimensions
  // StatusBar
} from 'react-native';


export default function App() {
  console.log(useWindowDimensions());
  const handlePress = () => console.log("Text clicked!")
  console.log(require('./assets/favicon.png')) //require function returns a number not an image
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{ color: "white" }}
        numberOfLines={1}
        onPress={handlePress}>Yay! This is my App. Oh my god! I love iiiiit!😀😀
      </Text>

      {/* Button with alert */}
      <Button
        color="orange"
        title="Alert Button"
        onPress={() => Alert.alert(
          "My Title",
          "My Message",
          [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") }
          ],
        )} />

      {/* Button with prompt */}
      <Button

        color="green"
        title="Prompt Button"
        onPress={() => Alert.prompt(
          "My Title",
          "Now type something here!",
          text => console.log(text)
        )}
      />
      {/* for local images, this doesn't need size specification */}
      <Image source={require('./assets/favicon.png')} />

      {/* This TouchableWithoutFeedback wouldn't show any visible feedback to the user */}
      <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
        {/* for online images, this one needs two more properties in order to be shown */}
        <Image
          style={{
            margin: 5
          }}
          blurRadius={2}
          // only on android
          fadeDuration={1000}
          source={{
            width: 75,
            height: 100,
            uri: "https://picsum.photos/150/200"
          }} />
      </TouchableWithoutFeedback>

      {/* TouchableOpacity will make the image opaque for a fraction of a second, so this one has a feedback */}
      <TouchableOpacity onPress={() => console.log("Image tapped and opaqued")}>
        {/* loadingIndicatorSource
        Similarly to source, this property represents the resource used to render the loading indicator for the image, displayed until image is ready to be displayed, typically after when it got downloaded from network. */}
        <Image
          style={{
            margin: 5
          }}
          resizeMode='cover'
          source={{
            width: 150,
            height: 100,
            uri: "https://picsum.photos/300/200"
          }} />
      </TouchableOpacity>


      <TouchableHighlight onPress={() => console.log("Image tapped and highlghted")}>
        <Image
          style={{
            margin: 5
          }}
          resizeMode='stretch'
          source={{
            width: 150,
            height: 100,
            uri: "https://picsum.photos/290/200"
          }} />
      </TouchableHighlight>

      {/* For Touchables, There is another Touchable called: TouchableNativeFeedback which only works on android :( */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// using StyleSheet helps for validating the properties, typos, etc.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Platform.OS === "android" ? 20 : 0, // because the height of the status bar is different in different android devices
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
