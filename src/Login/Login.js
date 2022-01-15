import React, { useState } from 'react'
import "./style.css"
import "../assets/main.css";
import image from "./Image/img1.PNG"
import logo from "./Image/logo.PNG"
import { NavLink } from 'react-router-dom'
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [record , setRecord] = useState([])
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    const newRec = { ...values , id:new Date().getTime().toString()}
    setRecord([...record,newRec])
  }
  return (
<>
  <div className="min-h-screen flex items-center justify-center bg-blue-light box-border">
      <div>
        <img src={image} alt="abc" className="image max-h-full w-96 rounded-bl-2xl rounded-tl-2xl shadow-2xl" />
      </div>

      <div className="bg-white-light rounded-br-2xl rounded-tr-2xl w-96 shadow-2xl box">
        <form className="h-auto" action="#" method="POST" onSubmit={handleSubmit}>
          <img className="max-h-16 mx-auto mt-6 logo"
                src={logo}
                alt="logo"
          />
          <h2 className="mt-6 text-center text-3xl text-gray-900 font-normal mb-6 ">Login</h2>
          <div>
            <div class="w-3/5 mx-auto">
              <div class="flex items-center">

                <label htmlFor="email-address" className="sr-only">
                    Email
                </label>
                <img src="https://s3-alpha-sig.figma.com/img/1c76/0f4c/ff78e00997fa01e06a4a7fdbba86cbc8?Expires=1635724800&Signature=SDPCCyfkFsLBKcEJXF9XXJXnYG5agKUjMv1J5OVC53kSzKJeABRWvK-UDh4qubdrus0PDjRdef4QkvHUXF45Hkt1UkzRWnyeqJHWAhdKEiBybK5YZqGt5S4x5bxAE4JTFmlA4zNkEBgSbEaHwZJE8S59F~Ryl7hymwaJ993ustsNkHOPHxViHFY5DLg4t3dwTD50upAL0A0-FiWtEw-8Y4-BIj~xJYA-C~Q~3xjs2bhwm5Vqqky~RLbYtwrgPGsouRpkgJ-NJrWUUxNZJR0S~8dqc-TwN9AxzsI-AGTPtS0d7EwqMd1hmElPdplEqEz7ERKuzEEold1SOnLPA5XSfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" className='log ml-6 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                <input  id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        placeholder="Username or Phone Number"
                        className="inner-box -mx-6 bg-blue-light hover:bg-blue-b_light appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" 
                />
              </div>
            </div>

            <div className="mt-7 space-y-4">
              <div className="w-3/5 mx-auto">
                <div className="flex items-center">
                  <img src="https://s3-alpha-sig.figma.com/img/a900/5091/9948fcf7aa3aa2f8bfe6410181f01a4f?Expires=1635724800&Signature=btMijsq-VnhtHsR6nTy0W4Gct2NFx9J6QyDclRW6Z7gXeZCdksTp-qY2D4VQEKuuP0G6IFSfbQcAJJRCmGOUwg53HuG7ZakhPJlDMASEOWdO~hrefGzveY~5aAii23FntbX4GBtMIBmm~gBnqJj1KR4FE2aDj6yTh2GdjEiOmId6Cwuq7-HZixf~LUs7yEZfdMbjpSxdK~iZ~FlArhYfIsl9nirBPS2bfCzYWwPGtxb~xDltLLxnXYLitEh2x3m0iy4XZEXyuE5K7WwsLFj6PG5~no4KgKfiW~zrgs-xTDwLj8aFUK~S7pAkbF5Rnxv9y6bnUMslG1VITgALF50Jiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt="" className='log ml-6 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input  id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          value={values.password}
                          onChange={handleChange}
                          required
                          placeholder="Password"
                          className="inner-box -mx-6 bg-blue-light hover:bg-blue-b_light appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                    </div>
                </div>
            </div>
          </div> 

          <div className="flex items-center justify-between">
            <div className="mt-3 ml-24 mb-8 text-xs for">
              <a href="#" className="font-normal text-gray-lightest">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-red-light hover:bg-red-bg m-auto group relative flex justify-center py-1.5 px-14 border border-transparent text-sm font-normal rounded-2xl text-black focus:outline-none ">
              Login
            </button>
          </div>

          <div className="flex justify-between items-center mt-6">
            <hr className="w-24 ml-auto border-gray-light" /> <span className="p-2 text-gray-440 text-xs">OR</span>
            <hr className="w-24 mr-auto border-gray-light" />
          </div>
        </form> 
        <div className="w-3/5  mx-24 mt-5 google">
                  <div className="flex">
                    <img src="https://s3-alpha-sig.figma.com/img/1ea2/e220/39c5118f1714336fda778b1d9ff4b439?Expires=1635724800&Signature=f7BurWBlWrw~u~-HyCpvB9fww~2vRkyd2bnKs0tjT~qhy8pFv0lbIsJufD3xpQ9efmmtScZqQAwv7B7DrHi4MGTA68yBuo4u5wb5gkqnXJ5gg2kuvXEHurLRdhdg7RA2gJTUc7Lb84~ebPNIOQIfVKwhpVGvcAjbfCf5EJwl6RtG7JAq~m~YWk4v8KDbijjj~mznexypv4yRx2J7kzkcGLLTHYVq3cn4iFaSt9nmeS4iFUfaPhCa6XXYKih9Yh4wCqK9pTA8Xg3wQxLyO6vQ013mf2j9ZA2GARqlvvufsYn87TUG7vtdf5lYCOKuC4LvBBET35U1putMLy~iLYp~1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" className='fill-current text-gray-500 text-xs z-10 h-7  rounded-2xl'/>
                    <a href="https://accounts.google.com/ServiceLogin/signinchooser?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&flowName=GlifWebSignIn&flowEntry=ServiceLogin"> 
                        <input  id="submit"
                        name="submit"
                        type="submit"
                        value="LOGIN WITH GOOGLE"
                        placeholder="LOGIN WITH GOOGLE"
                        className="cursor-pointer -mx-6 bg-red-dark appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-white-light focus:outline-none focus:z-8 text-xs" />
                    </a>   
                  </div>
        </div>
        <div className="pt-3 text-center my-7 footer"> 
          <span className="text-gray-600 text-xs w-2/3">New Customer?
          </span>
          
          <NavLink activeClassName="menu_active" className="text-red-dark text-xs" to="/signup">Create a Account</NavLink>
        </div> 
      </div>
    </div>
        
</>
    )
}

export default Login
