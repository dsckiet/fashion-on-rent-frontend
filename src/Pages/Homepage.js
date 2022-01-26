import React from 'react'
import Card from '../Components/Card.js'
import Header from '../Components/Header.js'
import Footer from '../Components/footer.js'
const Pag = () => {
  return (
    <>
    <Header/>
      <div className="relative">
        <img src="Banner.png" alt="123" className=" max-h-full" />
        <div className="absolute top-30 left-20 my-3">
          <p className="mt-5 font-sans tracking-wider text-3xl font-semi-bold">
            Featured Items
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
        <div className="absolute top-30 left-20 my-3">
          <p className="mt-6 font-sans tracking-wide text-3xl font-semi-bold">
            Trending In Mens
          </p>
        </div>
        <div className="flex mx-16 justify-around mt-12">
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


        <div className="absolute top-30 left-20 my-3">
          <p className="mt-6 font-sans tracking-wide text-3xl font-semi-bold">
            Trending In Kids
          </p>
        </div>
        <div className="flex mx-16 justify-around mt-12">
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
        <div className="absolute top-30 left-20 my-3">
          <p className="mt-6 font-sans tracking-wide text-3xl font-semi-bold">
            Trending In Womens
          </p>
        </div>
        <div className="flex mx-16 justify-around mt-12">
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
        <div className="absolute top-30 left-20 my-3">
          <p className="mt-6 font-sans tracking-wide text-3xl font-semi-bold">
            Trending Jwellery
          </p>
        </div>
        <div className="flex mx-16 justify-around mt-12 mb-5">
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
      </div>
      <Footer/>
    </>
  )
}

export default Pag
