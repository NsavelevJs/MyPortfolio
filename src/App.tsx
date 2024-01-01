
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Topbar } from './components/topbar';
import Introduction from './pages/introduction'; 
import Portfolio from './pages/Portfolio'; 
import Skills from './pages/skills';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex justify-center p-5 items-center">
        <Topbar />

        <Routes>
          
          <Route path="/" element={<Introduction />} />

          
          <Route
            path="/portfolio"
            element={
              <Portfolio
                projects={[
                  {
                    title: 'Project 1',
                    description: 'Description of Project 1.',
                    imageUrl: 'project1.jpg',
                    link: 'project1 link',
                    git: 'project1 git',
                    
                  },
                  {
                    title: 'Project 2',
                    description: 'Description of Project 2.',
                    imageUrl: 'project2.jpg',
                    link: 'project2 link',
                    git: 'project2 git',
                   
                  },
                 
                ]}
              />
            }
          />
          <Route
            path="/skills"
            element={<Skills />}
            />
        </Routes>
      </div>
    </Router>
            
  );
}

export default App;