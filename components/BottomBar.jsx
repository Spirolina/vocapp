import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BottomBar = ({current, total}) => {
  
  
  
    return (
      <View
      style={styles.container}
        >
            <View
                style={styles.status}
            >
                <Text
                style={styles.current}
                >
                {current+1}
                    </Text>
                    <Text
                style={styles.divider}
                >
                /
                </Text>
                <Text
                style={styles.total}
                >
                {total}
                </Text>
            </View>
            
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    current: {
        fontSize: 24,
        fontWeight: 'bold', 
        color: '#5cb85c'

    },
    divider: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 4,

    },
    status: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center', 
    },
    total: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 4,
        color: '#0275d8'
    }
})

export default BottomBar
