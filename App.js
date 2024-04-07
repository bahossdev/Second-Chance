import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text clicked!")
  console.log(require('./assets/favicon.png')) //require function returns a number not an image
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Yay! This is my App. Oh my god! I love iiiiit!😀😀 </Text>
      {/* for local images, this doesn't need size specification */}
      <Image source={require('./assets/favicon.png')} />
      {/* for online images, this one needs two more properties in order to be shown */}
      <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
        <Image
          blurRadius={2}
          // only on android
          fadeDuration={1000}
          source={{
            width: 150,
            height: 200,
            uri: "https://picsum.photos/150/200"
          }} />
      </TouchableWithoutFeedback>
      {/* loadingIndicatorSource
        Similarly to source, this property represents the resource used to render the loading indicator for the image, displayed until image is ready to be displayed, typically after when it got downloaded from network. */}
      <Image
        resizeMode='cover'
        source={{
          width: 300,
          height: 200,
          uri: "https://picsum.photos/300/200"
        }} />
      <Image
        resizeMode='stretch'
        source={{
          width: 290,
          height: 200,
          uri: "https://picsum.photos/290/200"
        }} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
