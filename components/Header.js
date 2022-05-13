import React from 'react'
import { StyleSheet, View, Text} from 'react-native-web'
import colors from '../constants/colors'

const Header = ({title}) => {
    // const {title } = props
  return (
      <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle:{
        color:'black',
        fontSize: 18,
    },
});

export default Header

