import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg';


const WabeHeader = () => {
  return (
    <View style={styles.svgCurve}>
      <View style={{ backgroundColor: '#00CBA9', height: 160 }}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: 130 }}
        >
          <Path
            fill="#00CBA9"
            d="M0,256L34.3,240C68.6,224,137,192,206,197.3C274.3,203,343,245,411,266.7C480,288,549,288,617,272C685.7,256,754,224,823,224C891.4,224,960,256,1029,250.7C1097.1,245,1166,203,1234,186.7C1302.9,171,1371,181,1406,186.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  )
}

export default WabeHeader

const styles = StyleSheet.create({
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
      },
})