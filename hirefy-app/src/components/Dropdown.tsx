import { useState } from "react"
import { DropPropsType } from "../types/dropdown"

export const Dropdown = ({ name, categories, img }: DropPropsType) => {

  const [showDropdown, setShowDropdown] = useState<boolean>(false)


  function handleDrop() {
    setShowDropdown((prev) => !prev)
  }

  return (
    <section>
      <div onClick={handleDrop} className={`flex justify-around gap-[100px]  rounded-[5px] items-center '}`}>

        <div className="flex justify-around gap-[100px] ">
          <div className="flex gap-4  cursor-pointer">
            <img src={img} alt="" />
            <h2 className="text-sm">{name}</h2>
          </div>
          <img className={`${showDropdown ? 'rotate-0' : 'rotate-90'} transition-transform`} src="./arrow.svg" alt="arrow" />

        </div>
      </div>
      <ul className=" pt-6 flex flex-col gap-4  ">
        {showDropdown &&
          categories?.map((categorie: any, index: number) => (
            <li className="pl-2 text-left   rounded-[5px] text-sm flex" key={index}>
              {categorie}</li>
          ))

        }

      </ul>

    </section>
  )
}
