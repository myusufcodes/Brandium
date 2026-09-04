import { marquee2 } from "../../constants"


const Marquee_2 = () => {
    return (
        <>
            {marquee2.map((logo, index) => (
                <img key={index} src={`/marquee_2/${logo}.png`} alt="marquee_2" width={85} />
            ))}
        </>
    )
}

export default Marquee_2