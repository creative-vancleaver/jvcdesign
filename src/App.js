import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {

    const myStyle={
    backgroundImage:
    "url(/images/jvcdesignsbg1.png)"
  }

  return (
    
    <div className="app" style={myStyle}>

        <Header />

        <main className="py-3 main">
            <Container>
              <h1 className='title'>Jacob Van Cleave Design</h1>
            </Container>
        </main>

        <Footer />

    </div>
  );
}

export default App;
