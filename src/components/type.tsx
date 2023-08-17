export interface GreetProps{
    name:string,
    messageCount?:number,
    isLoggedIn:boolean
}
export interface PersonProps{
    name:{
        first:string
        last:string
    }
}
export interface ListProps{
    name:{
        first:string,
        last:string
    }[]
}
