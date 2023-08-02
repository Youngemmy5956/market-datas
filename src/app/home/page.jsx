"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

export default function page() {
  // const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   fetch("https://randomuser.me/api/?page=5&results=5")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       console.log(data);
  //       setLoading(false)
  //     })
  // }, [])

  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>

  //   const fetchData = async () => {
  //     const { data } = await axios.get(
  //       "https://randomuser.me/api/?page=5&results=5"
  //     );
  //     setPosts([...posts,...data.results]);
  //     console.log(data.results);
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=5&results=5"
        );
        console.log(response.data.results);
        setPosts([...posts, ...response.data.results]);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <div className=" text-black">
      <div className="w-full bg-[#fff1db] flex">
        <div className="lg:md:flex md:lg:ml-32 rounded-bl-[130px] h-[100vh] pt-10 w-[70%] px-4">
          <span>
            <div className="flex">
              <Image
                className="cursor-pointer"
                src="/logo.47c1e2c4 (1).png"
                alt="Vercel Logo"
                width={120}
                height={24}
                priority
              />

              <ul className="md:lg:flex pt-4 md:lg:ml-80 gap-6">
                <li>Solutions</li>
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </div>

            <span>
              <h1 className="pt-40 font-medium text-5xl font-serif">
                Food intelligence for all, market data <br /> at your
                fingertips.
              </h1>
              <h1 className="text-lg font-bold pt-8 font-serif">
                Make smart decisions with our food data. Tap into our real-time,
                daily, and <br /> historical food market data pipeline.
              </h1>
              <button className="mt-40 px-32 rounded-md py-4 bg-black text-white">
                Get Started
              </button>
            </span>
          </span>
        </div>

        <div className="w-[30%] h-[100vh] md:lg:bg-[#4AC16C] rounded-tl-[80px] pt-10 ">
          <div className="ml-20">
            <button className="text-white px-14 py-2 rounded-[4px] border-0 bg-black">
              Sign up
            </button>
            <button className="px-10 py-1 rounded-md border-0 ">Login</button>
          </div>

          <Image
            className="-ml-20 mt-36"
            src="/fruits.png"
            alt="Vercel Logo"
            width={600}
            height={100}
            priority
          />
        </div>
      </div>

      <section className="bg-white pt-8">
        <span>
          <h1 className="pl-32 text-3xl font-serif">
            Explore the latest live trends <br /> on food data
          </h1>
          <h1 className="pl-32 pt-6">
            We constantly track and update in real-time food market data, <br />
            enabling informed decisions.
          </h1>
        </span>

        <div className="bg-[#FFC160] flex justify-around pl-32 mt-16 px-6 py-4 mx-20 rounded-tl-[6rem] rounded-tr-[6rem]">
          <ul className="flex text-black gap-32">
            <li className="mr-36">Name</li>
            <li className="mr-36" >Country</li>
            <li className=" mr-64">Email</li>
            <li className="pr-48">Gender</li>
            <li className="ml-6">Phone</li>
          </ul>

          {/* <ul className="flex text-black gap-20 ">
            <li className="">Email</li>
            <li className="ml-6">Phone</li>
            <li className="ml-20">Gender</li>
          </ul> */}
        </div>

        <div>
          {posts.map((post) => (
            <span id="#dis" className="flex justify-between ml-32 mt-2">
              <span className="flex">
                <img className="rounded-full" src={post.picture.medium} alt="" />

                <h1 className="text-black mt-4 ml-3 text-sm">
                  {post.name.first} {post.name.last}
                </h1>
              </span>

              <h1 className="text-black text-sm mt-4">
                {" "}
                {post.location.country}{" "}
              </h1>

              <h1 className="text-black text-sm mt-4"> {post.email} </h1>

              <h1 className="text-black text-sm mt-4"> {post.gender} </h1>

              <h1 className="text-black text-sm mt-4 mr-52"> {post.phone} </h1>
            </span>
          ))}

          <a href="#dis" className="flex justify-center pt-4 text-green-500 cursor-pointer">Load more data......</a>
        </div>

        {/* <div className="w-full bg-white mt-10 ">
          <table className="py-4 mx-24 bg-[#FFC160] flex pl-10 justify-between rounded-tl-[96px] rounded-tr-[96px]">
            <thead className="gap-10">
              <tr className="">
                <th className="pl-10">Name</th>
                <th className="pl-36">Country</th>
                <th className="pl-64">Email</th>
                <th className="pl-80">Phone</th>
                <th className="pl-32">Gender</th>
              </tr>
            </thead>

            </table> */}

        {/* <table className="ml-4 flex flex-col ">
              
            {posts.map((post) => (
            <tbody className="gap-10">
              <tr className="">
                <td className="pl-36"><img className="rounded-full text-black mt-32 flex flex-row" src={post.picture.medium} alt="" /> <h1 className="text-sm">{post.name.first} {post.name.last}</h1></td>
                <td className="pl-20">{post.location.country}</td>
                <td className="pl-48">{post.email}</td>
                <td className="pl-48">{post.phone}</td>
                <td className="pl-32">{post.gender}</td>
              </tr>
            </tbody>
               ))} 
                */}

        {/* {posts.map((post) => (
              <tbody className="">
                <tr className="text-sm ">
                  <td className="pl-4">
                    <img className="rounded-full text-black mt-32 flex" src={post.picture.medium} alt="" /> <h1 className="text-sm">{post.name.first} {post.name.last}</h1>
                  </td>
                  <td className="pl-96">{post.location.country}</td>
                  <td className="pl-32">{post.email}</td>
                  <td className="pl-32">{post.phone}</td>
                  <td className="pl-32">{post.gender}</td>
                </tr>
              </tbody>
            ))} */}
        {/* </table> */}
        {/* </div> */}

        <div className="w-full bg-white mt-10 pb-10 ">
          <span className="py-4 mx-80 bg-black flex justify-center rounded-tl-[96px] rounded-br-[96px]">
            <h1 className="text-white  ">
              Advertise your produce with us.{" "}
              <a href="" className="text-[#FFC160]">
                {" "}
                Click here
              </a>
            </h1>
          </span>
        </div>
      </section>

      <div className="w-full bg-[#fff1db] flex">
        <div className="w-[30%] bg-[#FF5446] h-[100vh] rounded-tl-[80px]">
          <Image
            className="ml-36 mr-[-8rem] absolute pt-72"
            src="/fruits2.59116d13.png"
            alt="Vercel Logo"
            width={500}
            height={100}
            priority
          />
        </div>

        <div className="w-[70%] flex ">
          <span className="pl-80 ">
            <h1 className="pt-40 font-medium text-5xl font-serif">
              Ready to build a smart portfolio for <br /> food market data?
            </h1>
            <h1 className="text-lg font-bold pt-8 font-serif">
              Create your account, subscribe and see how market data helps your
              business performance with informed <br /> decision making.
            </h1>
            <button className="mt-40 px-32 rounded-md py-4 bg-black text-white">
              Get Started
            </button>
          </span>
        </div>
      </div>

      <section className="bg-white">
        <h1 className="pt-16 pl-[25%]">
          Subscribe to our monthly newsletter to stay connected to our
          activities, get insights and updates on what's happening with everyday{" "}
          <br /> <h1 className="pl-[31%]">food data.</h1>
        </h1>

        <form
          action=""
          className="ml-[35%] w-[30%]  mt-[60px] border-[#ff5446] border-[1px]"
        >
          <input
            placeholder="E-mail address"
            type="text"
            className="ml-4 my-3 focus:outline-0 border-t-white border-b--white"
          />
          <button className="bg-black text-white ml-28 px-16 rounded-sm my-3 py-2">
            Subscribe
          </button>
        </form>
      </section>

      <section className="bg-white flex pl-32 pt-32 gap-64">
        <span>
          <Image
            className="cursor-pointer"
            src="/logo.47c1e2c4 (1).png"
            alt="Vercel Logo"
            width={120}
            height={24}
            priority
          />
        </span>

        <span>
          <h1 className="text-xl font-bold">Contact</h1>
          <h1 className="pt-4 text-[#4AC16C] cursor-pointer">
            info@marketdata.com
          </h1>
          <h1 className="text-[#4ac16c] cursor-pointer">
            operations@marketdata.ng
          </h1>
          <span className="flex gap-4 mt-2 cursor-pointer">
            <BsTwitter />
            <BsFacebook />
            <BiLogoLinkedin />
            <BsInstagram />
          </span>
        </span>

        <span>
          <h1 className="text-xl font-bold">Lagos</h1>
          <h1 className="pt-4 ">21, Oremeji Street, behind toll</h1>
          <h1>gate, Victoria Island, Lagos..</h1>
        </span>

        <span className="mb-10">
          <h1 className="text-xl font-bold ">Company</h1>
          <h1 className="pt-4">
            {" "}
            <a href="">Solutions</a>
          </h1>
          <h1>
            {" "}
            <a href="">About</a>
          </h1>
          <h1>
            {" "}
            <a href="">Terms of Use</a>
          </h1>
          <h1>
            <a href="">Privacy Policy</a>
          </h1>
          <h1 className="pb-20">
            <a href="">Dispute resolution</a>
          </h1>
        </span>
      </section>

      <span className="bg-white">
        <hr className="ml-[515px] p-[1px] w-[50%] bg-[#ff5446]" />
        <h1 className="bg-white text-center pb-20">
          Copyright © 2021 Market Data Limited - RC234523. Built within Lagos.💖
        </h1>
      </span>
    </div>
  );
}