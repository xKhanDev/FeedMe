import { Navbar, Hero, Works, Feature_Campaigns, Testimonials, FAQ, Footer } from './constant'

const landing_page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Works />
      <Feature_Campaigns />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default landing_page