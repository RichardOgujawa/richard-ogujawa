//Next Imports
import Link from "next/link.js"
//MAIN COMPONENT
const PortfolioGridTop = () => {
  return (
    <section className='portfolio-buttons'>
      <div className='grid items-end'>
        <h1 className='heading'>.\ Portfolio</h1>
      </div>
      <Link href="/portfolio/coding">
        <button className='grid place-content-center'>
          <span>Coding</span>
          <span>[ˈkəʊdɪŋ] noun.</span>
        </button>
      </Link>
      <Link href="/portfolio/creative">
        <button>
          <span>Creative</span>
          <span>[dɪˈzʌɪn] noun.</span>
        </button>
      </Link>
      <Link href="/portfolio">
        <button>
          <span>All</span>
          <span>[/ɔːl/] noun.</span>
        </button>
      </Link>
    </section>
  )
}
export default PortfolioGridTop