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
          <span className="opacity-70">[&apos;kəʊd&#618;ŋ] noun:</span>
          <span>Coding projects I&apos;ve worked on.</span>
        </button>
      </Link>
      <Link href="/portfolio/creative">
        <button>
          <span>Creative</span>
          <span className="opacity-70">[d&#618;&apos;zʌ&#618;n] noun:</span>
          <span>Creative projects I&apos;ve worked on.</span>
        </button>
      </Link>
      <Link href="/portfolio/courses">
        <button>
          <span>Courses</span>
          <span className="opacity-70">[/&apos;/kɔ&#x02D0;s//] noun:</span>
          <span> Courses I&apos;ve completed or am doing.</span>
        </button>
      </Link>
    </section>
  )
}
export default PortfolioGridTop
