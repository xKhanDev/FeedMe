import { BrowserRouter as Router } from 'react-router-dom';
import Landing_page from './landing_page/Landing_page';
const App = () => {
  return (
    <div className="bg_gradient white_text w-full h-full px-5 pt-2 md:px-8 md:pt-4 lg:px-10 lg:pt-6">
      <Router>
      <Landing_page />
      </Router>
    </div>
  )
}

export default App