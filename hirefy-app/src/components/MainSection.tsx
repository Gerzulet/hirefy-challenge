import { Dropdown } from "./Dropdown"
export const MainSection = () => {

  const test = ["Lorem Ipsum", "Lorem Ipsum", <Dropdown name={"Lorem Ipsum"} img={""} categories={["Lorem Ipsum", "Lorem Ipsum"]} />]
  return (
    <section className="px-[26px] pt-[32px]">
      <ul className="flex flex-col gap-[20px] text-opensans">
        <li className="flex gap-4">
          <img className="w-[15px] h-[15px]" src="./home.svg" alt="home-icon" />
          <p className="text-sm font-semibold">Home</p>
        </li>
        <li className="flex gap-4">
          <img className="w-[15px] h-[15px]" src="./question-mark.png" alt="how-it-works-icon" />
          <p className="text-sm font-semibold">How it works</p>
        </li>

        <li className="flex gap-4">
          <img className="w-[15px] h-[15px]" src="./market.png" alt="market-icon" />
          <p className="text-sm font-semibold">Marketplace</p>
        </li>

        <li className="flex gap-4">
          <img className="w-[15px] h-[15px]" src="./fortalents.png" alt="for-talents-icon" />
          <p className="text-sm font-semibold">For Talents</p>
        </li>

        <li className="flex ">
          <Dropdown name={"Categories"} img={"./categories.svg"} categories={test}></Dropdown>
        </li>
      </ul>

    </section>
  )
}
