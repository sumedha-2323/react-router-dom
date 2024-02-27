import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Routes, Route} from 'react-router-dom';
import Success from './components/Success';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import FeaturedProjects from './components/FeaturedProjects';
import NewProjects from './components/NewProjects';
import Users from './components/Users';
import UsersDetails from './components/UsersDetails';
import { AuthProvider } from './components/auth';
import Logout from './components/Logout';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/projects" element={<Projects/>}>
            <Route path='featured' element={<FeaturedProjects/>} />
            <Route path='new' element={<NewProjects/>} />
          </Route>
          <Route path='/users' element={<PrivateRoute><Users/></PrivateRoute>}></Route>
          <Route path='/users/:userId' element={<UsersDetails/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path="*" element={<NotFound />}></Route>

        </Routes>      
    </AuthProvider>
  );
}

export default App;
