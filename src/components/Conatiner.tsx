import React,{useEffect, useState} from "react";
import { Flex, Text, View } from "vcc-ui";
import { ProductList } from "./ProductList";
import FilterCar from "./FilterCar";
import {ProductType} from '../utility/types'


export const Conatiner: React.FC = () => {
  const [carData,setCarData] = useState<ProductType[]|null>(null)
  const [carType,setCarType] = useState('ALL')
  const [optionData,setOptionData] = useState<ProductType[]|null>(null)

  const setSelectedValue = (type:string):void=>{
    setCarType(type)
    if(type==='ALL'){
      setCarData(optionData)
    }else{
      const data = optionData?.filter(it=>{
        return it['bodyType'] === type
      })
      if(data){
        setCarData(data)
      }
    }
  }
  
  const fetchData = async ()=>{
    try {
      const result = await fetch("/api/cars.json");
      const data = await result.json();
      return data;
    } catch (error) {
      console.log("error ", error);
      return ;
    }
  }
  useEffect(() => {
    (async () => {
      const _carList = await fetchData();
      setCarData(_carList);
      setOptionData(_carList);
    })();
  }, []);
  return (
    <View spacing={4}>
      <Flex
        style={{
          margin: "2rem auto",
          width: "15rem",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text subStyle="emphasis">Select Bodytype:</Text>
        <FilterCar data={optionData} setSelectedValue = {setSelectedValue} value={carType}></FilterCar>
      </Flex>
      <ProductList cars={carData}></ProductList>
    </View>
  );
};
