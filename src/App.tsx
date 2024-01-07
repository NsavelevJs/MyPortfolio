
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
                    title: 'Duck Hunt',
                    description: 'Browser Duck Hunt',
                    imageUrl: 'https://i.pinimg.com/originals/00/79/6c/00796c794bd05ba60af2f09e96e7246a.gif',
                    link: 'http://nicks-duck-hunt.surge.sh/',
                    git: 'https://github.com/NsavelevJs/duck-hunt',
                    
                  },
                  {
                    title: 'Pick-up',
                    description: 'Pick-up where you left off with this chat app',
                    imageUrl: 'https://i.imgur.com/pRuBC6O.png',
                    link: 'https://pick-up.surge.sh',
                    git: 'https://github.com/NsavelevJs/Pick-up',
                   
                  },
                  {
                    title: 'Read&&Butter',
                    description: 'An open medium for anyone to post. No likes, no comments, no obsession. Just post and enjoy.',
                    imageUrl: 'https://i.imgur.com/YtL9W3M.png',
                    link: 'https://read-and-butter.surge.sh/',
                    git: 'https://github.com/NsavelevJs/Read-And-butter/blob/master/README.md',
                   
                  },
                  {
                    title: 'Recipe Box',
                    description: 'Recipe app that contains step by step instructions on some really nice recipes.',
                    imageUrl: 'https://i.imgur.com/xUFvesq.png',
                    link: 'https://foodiesandgoodiesrecipebox.surge.sh/',
                    git: 'https://github.com/NsavelevJs/Recipe-box',
                   
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