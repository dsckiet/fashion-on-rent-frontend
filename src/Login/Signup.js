import React, { useState } from 'react'
import image from "./Image/img2.PNG"
import logo from "./Image/logo.PNG"
const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    password2: ''
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    
  };
  
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-red-bg box-border overflow-hidden sm:min-h-screen">
        
        <div>
          <img src={image} alt="abc" className="image max-h-full w-96 rounded-bl-2xl rounded-tl-2xl shadow-2xl" />
        </div>

        <div className="bg-white-light rounded-br-2xl rounded-tr-2xl w-96 max-h-full shadow-2xl box">
          <h2 className="mt-5 text-center text-2xl text-gray-900 font-normal mb-5">Sign Up</h2>
          <div className="w-3/5  mx-24 mt-5">
            <div class="flex items-center">
              <img src="https://s3-alpha-sig.figma.com/img/1ea2/e220/39c5118f1714336fda778b1d9ff4b439?Expires=1635724800&Signature=f7BurWBlWrw~u~-HyCpvB9fww~2vRkyd2bnKs0tjT~qhy8pFv0lbIsJufD3xpQ9efmmtScZqQAwv7B7DrHi4MGTA68yBuo4u5wb5gkqnXJ5gg2kuvXEHurLRdhdg7RA2gJTUc7Lb84~ebPNIOQIfVKwhpVGvcAjbfCf5EJwl6RtG7JAq~m~YWk4v8KDbijjj~mznexypv4yRx2J7kzkcGLLTHYVq3cn4iFaSt9nmeS4iFUfaPhCa6XXYKih9Yh4wCqK9pTA8Xg3wQxLyO6vQ013mf2j9ZA2GARqlvvufsYn87TUG7vtdf5lYCOKuC4LvBBET35U1putMLy~iLYp~1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="" className=' fill-current text-gray-500 text-xs z-10 h-7  rounded-2xl'/>
              <a href="https://accounts.google.com/ServiceLogin/signinchooser?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&flowName=GlifWebSignIn&flowEntry=ServiceLogin"> 
                <input  id="submit"
                  name="submit"
                  type="submit"
                  value="LOGIN WITH GOOGLE"
                  placeholder="LOGIN WITH GOOGLE"
                  class="cursor-pointer -mx-6 bg-red-dark appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-white-light focus:outline-none focus:z-8 text-xs" />
              </a>   
            </div>
          </div>
       
          <div className="flex justify-between items-center mt-4 mb-4">
            <hr className="w-24 ml-auto border-gray-light" /> <span class="p-2 text-gray-440 text-xs">OR</span>
            <hr className="w-24 mr-auto border-gray-light" />
          </div>

          <form className="h-auto" onSubmit={handleSubmit} >
            <input type="hidden" name="remember" defaultValue="true" />

              <div className="w-3/5 mx-auto">
                <div class="flex items-center">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <img src="https://s3-alpha-sig.figma.com/img/1c76/0f4c/ff78e00997fa01e06a4a7fdbba86cbc8?Expires=1635724800&Signature=SDPCCyfkFsLBKcEJXF9XXJXnYG5agKUjMv1J5OVC53kSzKJeABRWvK-UDh4qubdrus0PDjRdef4QkvHUXF45Hkt1UkzRWnyeqJHWAhdKEiBybK5YZqGt5S4x5bxAE4JTFmlA4zNkEBgSbEaHwZJE8S59F~Ryl7hymwaJ993ustsNkHOPHxViHFY5DLg4t3dwTD50upAL0A0-FiWtEw-8Y4-BIj~xJYA-C~Q~3xjs2bhwm5Vqqky~RLbYtwrgPGsouRpkgJ-NJrWUUxNZJR0S~8dqc-TwN9AxzsI-AGTPtS0d7EwqMd1hmElPdplEqEz7ERKuzEEold1SOnLPA5XSfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-6 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                  <input  id="name"
                          name="name"
                          type="text"
                          autoComplete="off"
                          placeholder="Name*"
                          value={values.name}
                          onChange={handleChange}
                          class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" 
                          required 
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div class="w-3/5 mx-auto">
                  <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/1c76/0f4c/ff78e00997fa01e06a4a7fdbba86cbc8?Expires=1635724800&Signature=SDPCCyfkFsLBKcEJXF9XXJXnYG5agKUjMv1J5OVC53kSzKJeABRWvK-UDh4qubdrus0PDjRdef4QkvHUXF45Hkt1UkzRWnyeqJHWAhdKEiBybK5YZqGt5S4x5bxAE4JTFmlA4zNkEBgSbEaHwZJE8S59F~Ryl7hymwaJ993ustsNkHOPHxViHFY5DLg4t3dwTD50upAL0A0-FiWtEw-8Y4-BIj~xJYA-C~Q~3xjs2bhwm5Vqqky~RLbYtwrgPGsouRpkgJ-NJrWUUxNZJR0S~8dqc-TwN9AxzsI-AGTPtS0d7EwqMd1hmElPdplEqEz7ERKuzEEold1SOnLPA5XSfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-6 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input  id="Username*"
                            name="username"
                            type="text"
                            autoComplete="off"
                            value={values.username}
                            onChange={handleChange}
                            placeholder="Username*"
                            required
                            class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div class="w-3/5 mx-auto">
                  <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/49ff/d358/8c341ea010f348b6c0352d736b580ffe?Expires=1635724800&Signature=CQ110TQ2Sk0Qno8GeEzDR~cbiG90zlBSE63ljl-nNZDj7e1BLjeOzm~rtij5qS8AOOBgzs7almCuqxuCwmQ2dfHP5aG0kR8HkftUYibNJS~q3uye4zEuLCSzMMJy2hG74a4lk7s-iKMsiwxi-NtZcaRY6DB8RLdZ26-A1qzMYN4LsTOtOU-VeFhCHkZf~n4g7jibR7FkdqEcLo-2sGJrgYyzGrd-uORjCcI~NAiw2Y-PeHbWAkED66Fi-1lndj1S-ED9HbWBF3Gqx3ESFWdS7qeQ-OiGQX64yyirS5mqlqPJjFASqffhnIGJx-~JAhR6pRiy6lRiWbVQT~YP4HN8~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-6 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="email" className="sr-only">email</label>
                    <input  id="email"
                            name="email"
                            type="email"
                            autoComplete="off"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email (Optional)"
                            class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div class="w-3/5 mx-auto">
                  <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/0004/8206/7848f074646d703a6d22c090699db948?Expires=1635724800&Signature=HsBQp3N1YRyE9DDngo-GAfUUsR54MNTF7gwO0O5tgXBjuZQ2I7e1yVTVcI3n8BeXhJFAFuc3oMEI7JCr3llpnlsAJ7KT0xhUnwQsJxsydmgiYDjM7c67B7voOeQyvTs9h8Ec1OHf8zmVZWmF5ibKNeXa~gi3k4l3yMlikprr6sawqeV0jhalpEvisgO8fLXPDYU9F1es5k6MKG2MrkmUpxUHl2j1yp1RCk5oHc8aPbZ-hCrTU-SdBtcO6e-n6rDmTggFDljtfkq8orWvXr~G2yOiKGZHt9pZVH5HRkan3E4f-UdAlqlIrdGPVeVZuH7xLY6p2JCidOx2JOo00Ikw-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-6 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="phone" className="sr-only">phone</label>
                    <input  id="phone"
                            name="phone"
                            type="tel"
                            value={values.phone}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                            placeholder="Phone Number*"
                            required
                            class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div class="w-3/5 mx-auto">
                  <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/a900/5091/9948fcf7aa3aa2f8bfe6410181f01a4f?Expires=1635724800&Signature=btMijsq-VnhtHsR6nTy0W4Gct2NFx9J6QyDclRW6Z7gXeZCdksTp-qY2D4VQEKuuP0G6IFSfbQcAJJRCmGOUwg53HuG7ZakhPJlDMASEOWdO~hrefGzveY~5aAii23FntbX4GBtMIBmm~gBnqJj1KR4FE2aDj6yTh2GdjEiOmId6Cwuq7-HZixf~LUs7yEZfdMbjpSxdK~iZ~FlArhYfIsl9nirBPS2bfCzYWwPGtxb~xDltLLxnXYLitEh2x3m0iy4XZEXyuE5K7WwsLFj6PG5~no4KgKfiW~zrgs-xTDwLj8aFUK~S7pAkbF5Rnxv9y6bnUMslG1VITgALF50Jiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-6 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input  id="password"
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Password*"
                            class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                    </div>
                  </div>
              </div>
              <div className="mt-6 space-y-4">
                <div class="w-3/5 mx-auto">
                  <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/a900/5091/9948fcf7aa3aa2f8bfe6410181f01a4f?Expires=1635724800&Signature=btMijsq-VnhtHsR6nTy0W4Gct2NFx9J6QyDclRW6Z7gXeZCdksTp-qY2D4VQEKuuP0G6IFSfbQcAJJRCmGOUwg53HuG7ZakhPJlDMASEOWdO~hrefGzveY~5aAii23FntbX4GBtMIBmm~gBnqJj1KR4FE2aDj6yTh2GdjEiOmId6Cwuq7-HZixf~LUs7yEZfdMbjpSxdK~iZ~FlArhYfIsl9nirBPS2bfCzYWwPGtxb~xDltLLxnXYLitEh2x3m0iy4XZEXyuE5K7WwsLFj6PG5~no4KgKfiW~zrgs-xTDwLj8aFUK~S7pAkbF5Rnxv9y6bnUMslG1VITgALF50Jiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-6 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="password" className="sr-only">CPassword</label>
                    <input  id="password"
                            type='password'
                            name='password2'
                            placeholder='Confirm your password'
                            value={values.password2}
                            onChange={handleChange}
                            placeholder="Confirm Password*"
                            class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                   </div>
                  </div>
              </div>
             
            <div>
              <button
                type="submit"
                className="bg-blue-lightest my-6 m-auto group relative flex justify-center py-1.5 px-14 border border-transparent text-sm font-normal rounded-2xl text-red-txt focus:outline-none">
                Sign Up
              </button>
            </div>
         </form>   
  </div>
        </div>
        
        </>
    )
}

export default Signup