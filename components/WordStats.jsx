import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const WordStats = () => {
  return (
      <View
      style={styles.container}
      >
          <View
          style={styles.stats}
          >
               <Text>
            Stats
          </Text>

          </View>

          <View
          style={styles.stats}
          >
               <Text>
            Stats
          </Text>

          </View>
         
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    stats: {
        backgroundColor: '#fff',
        width: '90%',
        marginTop: 16,
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        elevation: 2,
    }
})

export default WordStats
