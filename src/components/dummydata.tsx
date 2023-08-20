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
first:string,
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


type themeType={
  main:string,
  text:string
} 
type outerTheme={
  [key:string]:themeType
}
export const theme:outerTheme={
  primary:{
    main:'#3f51b5',
    text:'#fff'
  },
  secondary:{
    main:'#f50057',
    text:'#fff'
  }
}

type detailsType={
name:string,
email:string
}

export const details:detailsType={
  name:"Ramandeep saini",
  email:"ramandeep@fshgh.com"
}