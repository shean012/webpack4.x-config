interface IUSER {
  name: string,
  age: number,
  isMan: boolean
}


export const getUser = (name: string, age: number, isMan: boolean): IUSER => {
  let obj: IUSER = {
    name,
    age,
    isMan
  }
  return obj
}