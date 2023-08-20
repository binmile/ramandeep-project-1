export interface GreetProps{
    name:string,
    messageCount?:number,
    isLoggedIn:boolean
}
export interface Persontype{

        first:string
        last:string


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

export type createContextType={
    children:React.ReactNode
}
 
export type CompAType={
    name:string,
    email:string
}
export interface FormType{
    fname:string,
    email:string,
    phone:string
}