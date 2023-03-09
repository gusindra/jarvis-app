import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from 'expo-image-picker';

const ImageUploadCard = ({onPress, imgSrc}) => {
    const [singleFile, setSingleFile] = useState(null);

    const uploadImage = async () => {
        // Check if any file is selected or not
        if (singleFile != null) {
            // If file selected then create FormData
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'Image Upload');
            data.append('file_attachment', fileToUpload);
            // Please change file upload URL
            let res = await fetch(
                'http://localhost/upload.php',
                {
                method: 'post',
                body: data,
                headers: {
                    'Content-Type': 'multipart/form-data; ',
                },
                }
            );
            let responseJson = await res.json();
            if (responseJson.status == 1) {
                alert('Upload Successful');
            }
        } else {
            // If no file selected the show alert
            alert('Please Select File first');
        }
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            setSingleFile(result.assets[0].uri);
        }
      };

    return (
        <View className="flex-row justify-around mb-4">
            <View className="border border-slate-300 rounded-md">
                {singleFile && <Image source={{ uri: singleFile }} style={{ width: 200, height: 200 }} />}
            </View>
            <View>
                <TouchableOpacity onPress={pickImage}>
                    <View className="bg-slate-800 py-3 px-10 rounded-lg space-x-2">
                        <Text className="text-white text-center">Pilih Gambar</Text>
                    </View>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity onPress={uploadImage}>
                    <View className="bg-slate-800 py-3 px-10 rounded-lg space-x-2">
                        <Text className="text-white text-center">Upload</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImageUploadCard