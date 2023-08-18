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
export interface AuthUser{
    name:string,
    email:string
}
export interface countState{
    count:number
}

interface UpdateAction{
    type:'increment'|'decrement'
    payload:number
}
interface ResetAction{
    type:'reset'
}
export type CounterAction=UpdateAction|ResetAction