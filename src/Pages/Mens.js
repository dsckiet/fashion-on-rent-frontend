import react from "react";
import Card from '../Components/Card.js'
import Header from '../Components/Header.js'
import Footer from '../Components/footer.js'
import { Link } from "react-router-dom";

const Mens = () => {

    return (

        <>
        <Header/>
        <div className="absolute top-30 left-20 my-3">
          <p className="mt-5 font-sans tracking-wider text-3xl font-semi-bold">
            All Mens Items
          </p>
        </div>
        <div className="grid grid-cols-5 justify-items-center mx-16 content-center mt-12">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
        <Footer/>
            </>
    )

}

export default Mens;