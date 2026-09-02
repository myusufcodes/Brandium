import Cards from "./Cards"

const Marquee = () => {
  return (
    <div className='marquee-container mt-20'>
        <div className="marquee flex gap-4">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    </div>
  )
}

export default Marquee