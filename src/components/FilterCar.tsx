import {ProductType} from '../utility/types'
type FilterBarProps = {
data:ProductType[]| null
setSelectedValue:(type: string) => void
value:string

};

const FilterCar:React.FC<FilterBarProps> = ({data,setSelectedValue,value}) => {
  const optionData = data?.map((it)=>{
     return it.bodyType 
  })
  const uniqueOption  = optionData?.filter((item, pos)=> {
    return optionData?.indexOf(item) === pos;
})
  uniqueOption?.unshift('ALL')
  return (
    <select onChange={(e)=>setSelectedValue(e.target.value)} value={value}>
    {uniqueOption?.map((item, index) => (
    <option key={index} value={item}>
    {item?.toLocaleUpperCase()}
    </option>
    ))}
  </select>
  );
};

export default FilterCar;