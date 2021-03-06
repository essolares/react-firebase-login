import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div className="home">
          <Header></Header>
          <section>
            <div className="jumbotron jumbotron-fluid py-5">
              <div className="container text-center py-5">
                <h1 className="display-4">Welcome to my first React project</h1>
                <p className="lead">This is just a sinple Login project with React and Firebase</p>
                <div className="mt-4">
                  <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                  <Link className="btn px-5" to="/login">Login to Your Account</Link>
                </div>
              </div>
            </div>
          </section>
          <Footer></Footer>
        </div>
      )
}

export default HomePage;