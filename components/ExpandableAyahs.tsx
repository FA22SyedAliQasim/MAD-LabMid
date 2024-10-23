import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Ayah } from '../types';

interface ExpandableAyahsProps {
  ayahs: Ayah[];
  animatedHeight: Animated.Value;
  expanded: boolean;
}

export const ExpandableAyahs: React.FC<ExpandableAyahsProps> = ({
  ayahs,
  animatedHeight,
  expanded,
}) => {
  return (
    <Animated.View style={[styles.container, { height: animatedHeight }]}>
      {expanded && (
        <View style={styles.ayahsContainer}>
          {ayahs.map((ayah) => (
            <View key={ayah.number} style={styles.ayahItem}>
              <View style={styles.ayahNumberContainer}>
                <Text style={styles.ayahNumber}>{ayah.numberInSurah}</Text>
              </View>
              <Text style={styles.ayahText}>{ayah.text}</Text>
            </View>
          ))}
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  ayahsContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  ayahItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  ayahNumberContainer: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  ayahNumber: {
    color: '#5400b2',
    fontSize: 18,
    fontWeight: '600',
  },
  ayahText: {
    flex: 1,
    fontSize: 18,
    lineHeight: 24,
    color: '#131111',
  },
});