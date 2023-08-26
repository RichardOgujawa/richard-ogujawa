//Next Imports
import Link from 'next/link.js'
//MAIN COMPONENT
const PortfolioGridTop = () => {
  return (
    <section className="portfolio-buttons">
      <div className="grid items-end">
        <h1 className="heading">.\ Portfolio</h1>
      </div>
      <Link href="/portfolio/coding">
        <button className="grid place-content-center">
          <span>Coding</span>
          <span className="opacity-70">[ˈkəʊdɪŋ] noun:</span>
          <span>Coding projects I&apos;ve worked on.</span>
        </button>
      </Link>
      <Link href="/portfolio/creative">
        <button>
          <span>Creative</span>
          <span className="opacity-70">[dɪˈzʌɪn] noun:</span>
          <span>Creative projects I&apos;ve worked on.</span>
        </button>
      </Link>
      <Link href="/portfolio/current">
        <button>
          <span>Current</span>
          <span className="opacity-70">[/ˈkʌrənt/] noun:</span>
          <span> What I&apos;m currently working on completing.</span>
        </button>
      </Link>
    </section>
  )
}
export default PortfolioGridTop
