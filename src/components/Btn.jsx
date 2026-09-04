import { playSound } from './Sound'

const Btn = ({text}) => {
  return (
    <button onMouseEnter={() => playSound()} className='group relative flex justify-center items-center gap-6 cursor-pointer overflow-hidden py-0.5'>
        <img src="/arrow-right.svg" alt="arrow-right" width={25} className='absolute left-0 translate-x-[-25px] group-hover:translate-x-[0px] transition-all duration-300'/>
        <span className={`text-xl text-black font-[fontlight] group-hover:translate-x-[35px] transition-all duration-300`}>{text}</span>
        <img src="/arrow-right.svg" alt="arrow-right" width={25} className='group-hover:translate-x-[25px] transition-all duration-300'/>

        
        <div className='w-full h-[1px] absolute bottom-0 bg-black group-hover:translate-x-[300px] transition-all duration-700'/>
        <div className='w-full h-[1px] absolute bottom-0 translate-x-[-300px] bg-black group-hover:translate-x-[0px] transition-all duration-700'/>
    </button>
  )
}

export default Btn