export interface Column{
    key:string
    label:string
}

export interface Row{
    id:number
    name:string
    age:number
    [key: string]: string|number
}
