"use client"; // This is a client component 👈🏽

import { useCallback, useState } from "react";
import Input from "../../components/Input";

const auth = () => {
  const [email, SetEmail] = useState("");
  const [Pass, SetPass] = useState("");
  const [Name, SetName] = useState("");
  const [variant,SetVariant]=useState('Sign In');
  const toggleVariant = useCallback(() => {
    SetVariant((currentVariant) => currentVariant === 'Sign In' ? 'Sign UP' : 'Sign In');
  }, []);



  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center -mt-2 lg:w-2/5 lg:max-w-md rounded-lg w-full space-y-6">
            <h1 className="text-white font-semibold text-4xl mb-8">{variant}</h1>
            <div className="flex flex-col gap-4">
            {variant==="Sign UP" && <Input
                id={""}
                onChange={(e: any) => {
                  SetName(e.target.value);
                }}
                value={Name}
                label={"Username"}
                type={"name"}
              /> }
              
              <Input
                id={"email"}
                onChange={(e: any) => {
                  SetEmail(e.target.value);
                }}
                value={email}
                label={"Email ID or Phone no"}
                type={"email"}
              />
              <Input
                id={"Password"}
                onChange={(e: any) => {
                  SetPass(e.target.value);
                }}
                value={Pass}
                label={"Password"}
                type={"Password"}
              />
            </div>
            <button onClick={()=>{
                
            }} className="bg-red-600 w-full rounded-md mt-10 py-3 text-lg text-white hover:bg-red-700 transition">{variant}</button>
            {variant==="Sign In" && <p className="text-neutral-500 ">
                First time using netflix?
                <span onClick={toggleVariant} className="text-white ml-2 text-sm hover:underline cursor-pointer">Create an account</span> 

            </p>}
            {variant==="Sign UP" && <p className="text-neutral-500 ">
                Already have an account?
                <span onClick={toggleVariant} className="text-white ml-2 text-sm hover:underline cursor-pointer">Login</span> 

            </p>}
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default auth;
