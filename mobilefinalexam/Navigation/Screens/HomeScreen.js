import { Accelerometer } from 'expo-sensors';
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [steps, setSteps] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [lastTimestamp, setLastTimestamp] = useState(0);

  const accelerationThreshold = 1.2; // Adjust this threshold according to your preference

  useEffect(() => {
    let subscription;
    Accelerometer.isAvailableAsync().then((result) => {
      if (result) {
        subscription = Accelerometer.addListener(({ x, y, z }) => {
          const acceleration = Math.sqrt(x * x + y * y + z * z);

          if (
            acceleration > accelerationThreshold &&
            !isCounting &&
            (Date.now() - lastTimestamp > 800)
          ) {
            setIsCounting(true);
            setLastTimestamp(Date.now());

            setSteps((prevSteps) => prevSteps + 1);

            setTimeout(() => {
              setIsCounting(false);
            }, 1200);
          }

          // Motion detection: Trigger alert for unexpected movements
          if (acceleration > 2 * accelerationThreshold) {
            Alert.alert(
              'Unexpected Movement Detected',
              'Please check your surroundings for any potential hazards.',
              [{ text: 'OK', onPress: () => console.log('Alert closed') }],
              { cancelable: false } // Prevent closing alert by tapping outside or using the back button
            );
          }
        });
      } else {
        console.log('Accelerometer not available on this device');
      }
    });

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [isCounting, lastTimestamp]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.title}>Step Counter</Text>
        <View style={styles.content}>
          <View style={styles.stepContainer}>
            <Text style={styles.stepCount}>{steps}</Text>
            <Text style={styles.stepsLabel}>Steps</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    backgroundColor: '#333', // Darker frame background color
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text color for the title
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepCount: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#00ff00', // Green text color for the step count
  },
  stepsLabel: {
    fontSize: 24,
    color: '#66ccff', // Light blue text color for the steps label
    marginLeft: 8,
  },
});
