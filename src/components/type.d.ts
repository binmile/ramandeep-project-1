export interface GreetProps {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}
export interface Persontype {

    first: string
    last: string


}
export interface ListProps {
    name: {
        first: string,
        last: string
    }[]
}
export interface AuthUser {
    name: string,
    email: string
}
export interface countState {
    count: number,
    count2:number
}
export type countState2={
    state:number
}
interface UpdateAction {
    type: 'increment' | 'decrement'| 'increment2' | 'decrement2'
    payload: number
}
interface ResetAction {
    type: 'reset'
}

export type CounterAction = UpdateAction | ResetAction

export interface createContextType {
    children: React.ReactNode
}

export type CompAType = {
    name: string,
    email: string
}
export interface FormType {
    fname: string,
    email: string,
    phone: string
}
export interface Props {
}
export interface State {
    name: string
}
export interface p {
    name: string
}
export interface CallBackType {
    children: string
}
export interface ButtonProps extends CallBackType {
    handleClick: () => void;
}
export interface CountType {
    text: string
    count: number
}
export interface ReducerContextType{
    countState:number,
    countDispatch:React.Dispatch<CounterAction>
} 
export interface loaderType{
title:string
}
export type stateuseReducer={
    loader:boolean,
    post:Record<string,string>,
    error:string
}
export type actionUseReducer={
    type:string ,
    payload?:Record<string,string>
} 


