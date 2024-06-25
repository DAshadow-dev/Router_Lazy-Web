import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const Home = lazy(() =>
    Promise.all([
      import("./Home"),
      new Promise((resolve) => setTimeout(resolve, 2000)) 
  ]).then(([moduleExports]) => moduleExports)
);   

const News = lazy(() =>
    Promise.all([
      import("./News"),
      new Promise((resolve) => setTimeout(resolve, 2000)) 
    ]).then(([moduleExports]) => moduleExports)
  );   
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
const Quiz = lazy(() => import('./Quiz/QuizApp'));


const App = () =>{
    return (
    <Router>
    <div className="App">
    <NavigationMenu />
    <Suspense fallback={<div className='text-warning fs-3 text-bold'>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      </Suspense>
    </div>
    </Router>
    )
}

export default App;