import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CategoryCard from './CategoryCard'

const Categories = ({type}) => {
  const [catalog, setCatalog] = useState({  
        data:[ 
          {name:"Product", imgSrc:"https://s3-ap-southeast-1.amazonaws.com/cdn2.jarvis-store.com/img/2019/produk.png", link:"Comming Soon"}, 
          {name:"Category", imgSrc:"https://s3-ap-southeast-1.amazonaws.com/cdn2.jarvis-store.com/img/2019/kategori.png", link:"Comming Soon"}, 
          {name:"Collection", imgSrc:"https://s3-ap-southeast-1.amazonaws.com/cdn2.jarvis-store.com/img/2019/koleksi.png", link:"Comming Soon"}],
  });
  const [content, setContent] = useState({ 
      data:[ 
        {name:"Blog", imgSrc:"https://s3-ap-southeast-1.amazonaws.com/cdn2.jarvis-store.com/img/2019/tulisan.png", link:"ListContent"}, 
        {name:"Page", imgSrc:"https://s3-ap-southeast-1.amazonaws.com/cdn2.jarvis-store.com/img/2019/halaman.png", link:"ListContent"}, 
        {name:"Bio-Page", imgSrc:"https://s3-ap-southeast-1.amazonaws.com/cdn2.jarvis-store.com/img/2022/bio-page.jpg", link:"UpdateBioPage"}],
  });

  return (
    <ScrollView>
      <View className="flex-1 items-center">
        {type=='content'?(
          <>
            {content.data?.map((data, i) => (<CategoryCard imgUrl={data.imgSrc} title={data.name} link={data.link} key={i} />))}
          </>
        ):(
          <>
            {catalog.data?.map((data, i) => (<CategoryCard imgUrl={data.imgSrc} title={data.name} link={data.link} key={i} />))}
          </>
        )}
      </View>
    </ScrollView>
  )
}

export default Categories