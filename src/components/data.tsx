import { Persontype } from "./type"

type personType={
  first:string,
  last:string
}
export const personName:personType={
    first:'Raman',
    last:'Saini',
  
}
type nameListType={
id:number,
first:string;
last:string
}
  export const nameList:Array<nameListType>=[
    {
      id:1,
      first:"Bruce",
      last:"Wayne"
    },
    {
      id:2,
      first:'Clark',
      last:'Kent'
    },
    {
      id:3,
      first:'Princess',
      last:'Diana'
    }
  ]