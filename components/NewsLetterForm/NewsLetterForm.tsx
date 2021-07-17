import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Input } from "../Input/Input";

export function NewsLetterForm() {
  const [inputValue, setInputValue] = useState("")
  
    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      console.log(inputValue)
    }

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      const value = event.target.value
      setInputValue(event.target.value)
    }

    return <form onSubmit={onSubmit}>
        <input onChange={onInputChange}/>
        <input type="submit" value="Абонирай се"/>
    </form>
}