import { useState } from "react"

export function Search(){
  const [value,setValue]=useState("")
  const [keyWard,setKeyWard]=useState("")

  const handleInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setKeyWard(value)
    console.log(keyWard)
  }

  return(
    <div>
      <form className="" onSubmit={(e)=>handleSubmit(e)}>
      <input className=" border-2 border-gray-700 rounded w-2/4 focus:outline-none p-2" type="text" onChange={handleInput}/>
     <button type="submit" className="border-2 border-gray-700 rounded p-2 bg-slate-700 text-gray-50">検索</button>
      </form>
    </div>
  )
}