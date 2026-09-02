import Btn from './Btn'

const Cards = () => {
    return (
        <>
            <div className='h-[450px] w-[410px] shrink-0 rounded-xl bg-[url("/Cards/bg1.webp")] bg-cover bg-center p-6 flex items-end justify-center'>
                <p className='font-[fontlighter] text-[21px] text-white'>Brand repositioning unlocked € 164M in growth with a +480% uplift.</p>
            </div>

            <div className='bg-[#F5F5F5] shrink-0 p-6 h-[300px] w-[430px] rounded-xl flex flex-col justify-between'>
                <div className="text font-[fontlighter] text-[21px] w-full flex flex-col">
                    <span>From canals to continent.</span>
                    <span>We shape brands and build businesses</span>
                    <span>That are ready to scale.</span>
                </div>

                <div className="card-btn">
                    <Btn text="Work with us" />
                </div>
            </div>

            <div className='bg-[#F5F5F5] shrink-0 p-6 h-[300px] w-[430px] rounded-xl flex flex-col justify-between gap-6'>
                <div className="text font-[fontlighter] text-[21px] w-full flex flex-col">
                    <span>Making brands iconic</span>
                    <span>and websites unforgettable since</span>
                </div>

                <span className='flex justify-center items-center font-[fontmd] text-[150px]'>
                    2014
                </span>
            </div>

            <div className='h-[450px] w-[410px] shrink-0 rounded-xl bg-[url("/Cards/bg2.jpg")] bg-cover bg-center p-6 flex items-end justify-center' />

            <div className="w-[520px] h-[250px] shrink-0 text-white rounded-xl p-6 bg-[#1B1B1C] flex flex-col gap-2 font-[fontlighter]">
                <p className='text-2xl'>+346% contact requests</p>
                <p className='text-xl text-[#6e6d6d] font-[600]'>after bold brand identity</p>
            </div>

            <div className='bg-[#F5F5F5] shrink-0 p-6 h-[300px] w-[430px] rounded-xl'>
                <div className="text font-[fontlighter] text-[21px] w-full flex flex-col">
                    85+ brands successfully launched since 2014
                </div>
            </div>

        </>
    )
}

export default Cards 