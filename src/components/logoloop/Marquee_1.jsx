import { marquee1 } from "../../constants"

const Marquee_1 = () => {
    return (
        <>
            {marquee1.map((logo, index) => (
                <img key={index} src={`/marquee_1/${logo}.png`} alt="marquee_1" width={index === 2 ? 75 : 85} className={`${index === 2 ? 'h-[25px]' : ''}`} />
            ))}
        </>
    )
}

export default Marquee_1