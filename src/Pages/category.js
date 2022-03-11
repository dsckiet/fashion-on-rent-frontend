import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/footer";
const Form = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} className="w-40 h-36" alt="" key={photo} />;
    });
  };

  return (

    <div>
      <Header/>
      <div>
        <div className="relative ">
          <div>
            <img
              src="Jwellery.png"
              className="absolute fixed min-w-full min-h-screen"
            />
          </div>
          <h1 className="text-4xl text-center mt-4 font-semibold ">
            Post Your Ad
          </h1>
          <div className="flex align-center justify-items-center mb-20">
            <div className="drop-shadow-2xl tracking-wider filter rounded-lg w-3/4 border ml-40 mt-10 p-10 bg-white opacity-80">
              <p className="text-lg pb-4 m-4">
                Select the type of fashion
                <span className="text-red-500">*</span>
              </p>
              <p className="text-center">
                <select className=" border-b-2 p-2 focus: outline-0">
                  <option value="hide">select fashion type</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Kids">Kids</option>
                </select>
              </p>
              <p className="text-lg pb-4 m-4">
                Name of Product<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                className="border ml-80 rounded mb-4 p-1 px-8 text-center"
                placeholder="Enter Name Here"
              />
              <p className="pb-4 text-lg mb-2 m-4">
                Description Of Product<span className="text-red-500">*</span>
              </p>
              <textarea
                className="border  rounded p-3 px-10 text-center  ml-80   "
                placeholder="(Like colors,cloth type)"></textarea>
              <br />
              <p className="text-lg m-4">
                Sizes Available<span className="text-red-500 mb-4    ">*</span>
              </p>
              <input
                type="radio"
                name="sizes"
                value="Brand Size"
                className="ml-20 mt-4"
              />
              <label for="sizes" className="p-2">
                Brand Size
              </label>
              <br />
              <input
                type="radio"
                name="sizes"
                value="Standard Size"
                className="ml-20 mt-4"
              />
              <label for="size" className="p-2">
                Standard Size
              </label>
              <br />

              <br />
              <div className="ml-56 mt-2">
                <input
                  type="radio"
                  name="size"
                  value="small"
                  id="1"
                  className="hidden cl m-2"
                />
                <label
                  for="1"
                  className="w-10 h-10 bg-blue-100 "
                  class="cl px-3 py-1 border border-black m-2 bg-gray-100">
                  S
                </label>
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="2"
                  value="medium"
                />
                <label
                  for="2"
                  className="w-10 h-10  "
                  class="cl px-3 py-1 border border-black m-2 bg-gray-100">
                  M
                </label>
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="3"
                  value="large"
                />
                <label
                  for="3"
                  className="w-10 h-10 "
                  class="cl px-3 py-1 border border-black m-2 bg-gray-100">
                  L
                </label>
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="4"
                  value="large"
                />
                <label
                  for="4"
                  className="w-10 h-10 "
                  class="cl px-3 py-1 border border-black m-2 bg-gray-100">
                  XL
                </label>
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="5"
                  value="large"
                />
                <label
                  for="5"
                  className="w-10 h-10 "
                  class="cl px-3 py-1 border border-black m-2 bg-gray-100">
                  XXL
                </label>
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="6"
                  value="large"
                />
                <label
                  for="6"
                  className="w-10 h-10"
                  class="cl px-3 py-1 m-2 border border-black bg-gray-100">
                  3XL
                </label>
              </div>

              <p className="text-lg pb-4 mt-8 m-4">
                Set a Price<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                className="border ml-80 rounded mb-4 p-1 px-8 text-center"
                placeholder="Set a price"
              />
              <span className="mt-4 m-2 font-normal tracking-wider">/day</span>
              <p className="pb-4 text-lg mb-2"></p>
              <p className="text-lg pb-4 mt-8 m-4">
                Available from<span className="text-red-500">*</span>
              </p>
              <input
                type="date"
                className="border ml-80 rounded mb-4 p-1 px-8 text-center"
                placeholder="Set a price"
              />
              <p className="pb-4 text-lg mb-2"></p>
              <p className="text-lg pb-4 mt-8 m-4">
                Upload Photos<span className="text-red-500">*</span>
                <br />
                <span className="text-red-600 text-sm">
                  (min 4 photos required)
                </span>
              </p>
              <div className="border-dashed border-2 border-gray-400 w-2/3 h-40 p-2 flex flex-wrap justify-center items-center ml-32">
                <div class=" flex align-center justify-items-center flex-wrap">
                  <div className="app">
                    <div>
                      <input
                        type="file"
                        id="file"
                        className="hidden"
                        multiple
                        onChange={handleImageChange}
                      />
                      <div className="label-holder  w-full">
                        <label htmlFor="file" className="label">
                          <p
                            className={
                              selectedFiles === 0
                                ? "bg-red-bg drop-shadow-2xl mt-40  text-center absolute  cursor-pointer px-4 py-2 rounded-lg "
                                : "bg-red-bg drop-shadow-2xl -mt-10  text-center absolute -ml-12 cursor-pointer px-4 py-2 rounded-lg "
                            }>
                            Add Photo
                          </p>
                        </label>
                      </div>
                      <div className=" flex space-x-4">
                        {renderPhotos(selectedFiles)}
                      </div>
                      {selectedFiles &&
                        selectedFiles.map((image, index) => {
                          <button
                            onClick={() =>
                              setSelectedFiles(
                                selectedFiles.filter((e) => e !== image)
                              )
                            }>
                            delete image
                          </button>;
                        })}
                    </div>
                  </div>
                </div>{" "}
              </div>

              <br />
              <p className="pb-4 text-lg mb-2 m-4">Style Tip (optional)</p>
              <br />
              <textarea
                className="border  rounded p-3 px-10 text-center  ml-80   "
                placeholder="Type Here"></textarea>
              <br />

              <br />

              <p className="pb-4 text-lg mb-2 m-4">
                Address Of Lender<span className="text-red-500">*</span>
              </p>
              <br />
              <input
                type="radio"
                name="sizes"
                value="Brand Size"
                className="ml-20 mt-4"
              />
              <label for="sizes" className="p-2">
                Use your Location
              </label>
              <br />
              <input
                type="radio"
                name="sizes"
                value="Standard Size"
                className="ml-20 mt-4"
              />
              <label for="size" className="p-2">
                Enter Manually
              </label>
              <br />
              <p className="my-8 ml-32">Address(Area and Street)</p>
              <textarea
                className="border  rounded p-3 px-10 w-96 ml-52 text-center    "
                placeholder=""></textarea>
              <br />
              <br />
              <div className="flex">
                <div>
                  <label className="ml-32 my">City/District</label>
                  <input
                    type="text"
                    className="border ml-48 mt-6 rounded inline-block mb-4 p-1 px-4 text-center"
                    placeholder="Enter City Here"
                  />
                </div>
                <div>
                  <label>Landmark(optional)</label>
                  <input
                    type="text"
                    className="border ml-5 mt-6 rounded mb-4 p-1 px-4 text-center"
                    placeholder="Enter Landmark"
                  />
                </div>
              </div>
              <br />
              <div className="flex">
                <div>
                  <label className="ml-32 my">State</label>
                  <input
                    type="text"
                    className="border ml-48 mt-6 rounded inline-block mb-4 p-1 px-4 text-center"
                    placeholder="Enter State Here"
                  />
                </div>
                <div>
                  <label className="-ml-6">Pin Code</label>
                  <br />
                  <input
                    type="text"
                    className="border mr-20 mt-6 rounded mb-4 p-1 px-4 text-center"
                    placeholder="Enter Pincode"
                  />
                </div>
              </div>

              <button className="border px-8 py-2 text-center bg-red-bg mt-20 mb-5 font-semibold text-base tracking-wider ml-96 mt-10 rounded-lg">
                Review Ad
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Form;
