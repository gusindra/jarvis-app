import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SwitchMenu from '../components/SwitchMenu'

const Setting = () => {
    const [inputs, setInputs] = useState({
        isMaintenance: "",
        isCheckout: "",
        isBooking: ""
    });
    const toggleSwitch = (value, input) =>  setInputs((prevState)=>({...prevState, [input]:value}));

  return (
    <ScrollView>
      <View>
          <SwitchMenu text="Maintenance Mode" desc="Mengaktifkan mode maintenace pada website" onValueChange={value => toggleSwitch(value, "isMaintenance")}
          value={inputs['isMaintenance']} />
          <SwitchMenu text="Checkout Mode" desc="Mengaktifkan mode keranjang belanja pada website" onValueChange={value => toggleSwitch(value, "isCheckout")}
          value={inputs['isCheckout']} />
          <SwitchMenu text="Booking Mode" desc="Mengaktifkan mode booking order pada website" onValueChange={value => toggleSwitch(value, "isBooking")}
          value={inputs['isBooking']} />
      </View>
    </ScrollView>
  )
}

export default Setting