import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Input from '../../../components/Input'
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation } from '@react-navigation/native' 
import SwitchMenu from '../../../components/SwitchMenu'
import { actions, defaultActions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor'

const UpdatePage = ({route}) => {
    const data = route?.params?.param;
    const navigation = useNavigation(); 
    const richText = useRef();
    const [inputs, setInputs] = useState({
        isActive: data?.status,
        judul: data?.judul,
        isi: data?.isi,
    }); 
    const [showEditor, setShowEditor] = useState(false);

    const handleOnChange = (text, input) => {
        setInputs((prevState)=>({...prevState, [input]:text}));
    };

    const toggleSwitch = (value, input) =>  setInputs((prevState)=>({...prevState, [input]:value}));

    useEffect(() => {
        setTimeout(()=>{
            try { 
                setShowEditor(true); 
            } catch (error) {
                console.log("error show editor")
            }
        }, 3000);
      }, []);

    return (
        <ScrollView className="px-2 py-3 bg-white mb-2">
            <View className="flex-row px-2 py-1">
                <Text className="font-semibold capitalize">Edit Halaman</Text> 
            </View>
            <SwitchMenu text="Active" desc="Status aktif link tampil pada halaman" onValueChange={value => toggleSwitch(value, "isActive")}
            value={inputs['isActive']} />
            <View className="py-1 w-full"> 
                <Input 
                    value={inputs?.judul}
                    label="Judul Halaman" 
                    placeholder="nama link" 
                    onChangeText={text => handleOnChange(text, 'judul')} 
                />
            </View>
            
            {showEditor?(<View className="">
                <Text className="text-sm text-gray-400">Isi halaman</Text>
                <RichEditor
                    ref={richText}
                    initialContentHTML={inputs?.isi}
                    onChange={text => handleOnChange(text, 'isi')} 
                    placeholder="Write your content here :)"
                    androidHardwareAccelerationDisabled={true} 
                    initialHeight={250}
                    className="border border-slate-200" 
                    pasteAsPlainText={true}
                />
                <RichToolbar
                    editor={richText}
                    selectedIconTint="#873c1e"
                    iconTint="#312921" 
                    actions={[
                        ...defaultActions,
                        actions.undo,
                    ]}
                />
                
            </View>):<></> }
            <View className="py-6">
                <TouchableOpacity onPress={()=>console.log("inputs", inputs)}>
                    <Text className="py-3 bg-[#303e48] w-full text-lg rounded-lg text-slate-100 text-center font-bold">Simpan</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default UpdatePage