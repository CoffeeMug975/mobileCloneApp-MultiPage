import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TimerScreen = () => {
  const [minutes, setMinutes] = useState(30);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{`00:${minutes}:00`}</Text>
      <View style={styles.buttons}>
        {[10, 15, 30].map((m) => (
          <TouchableOpacity key={m} style={styles.preset} onPress={() => setMinutes(m)}>
            <Text style={styles.text}>{`00:${m}:00`}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.start}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" },
  time: { fontSize: 50, color: "white", marginBottom: 20 },
  buttons: { flexDirection: "row", marginBottom: 20 },
  preset: { backgroundColor: "#222", padding: 10, margin: 5, borderRadius: 10 },
  start: { backgroundColor: "#6C63FF", padding: 15, borderRadius: 10 },
  text: { color: "white" },
});

export default TimerScreen;
