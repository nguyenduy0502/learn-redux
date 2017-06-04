import React from 'react';

import { StyleSheet, Text } from 'react-native';

/**
 * Used across examples as a screen placeholder.
 */

const SampleText = () => (
    <Text style={styles.sampleText}>ALo </Text>
);

export default SampleText;

const styles = StyleSheet.create({
    sampleText: {
        margin: 14,
    },
});