
export const Header = () => {
  return (
    <section className="bg-[#0D5287] py-4 px-6 flex items-center justify-between rounded-tr-2xl ">
      <div className="flex gap-3">
        <img className="w-[30px] h-[30px] " src="./logo.png" alt="" />
        <h2 className="text-inter text-white text-lg font-black">Hirefy</h2>
      </div>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6672 0.344141C14.2235 -0.0995447 13.5068 -0.0995447 13.0631 0.344141L7.5 5.89591L1.93686 0.332765C1.49317 -0.110922 0.776451 -0.110922 0.332765 0.332765C-0.110922 0.776451 -0.110922 1.49317 0.332765 1.93686L5.89591 7.5L0.332765 13.0631C-0.110922 13.5068 -0.110922 14.2235 0.332765 14.6672C0.776451 15.1109 1.49317 15.1109 1.93686 14.6672L7.5 9.1041L13.0631 14.6672C13.5068 15.1109 14.2235 15.1109 14.6672 14.6672C15.1109 14.2235 15.1109 13.5068 14.6672 13.0631L9.1041 7.5L14.6672 1.93686C15.0995 1.50455 15.0995 0.776451 14.6672 0.344141Z" fill="white" />
      </svg>
    </section>
  )
}
