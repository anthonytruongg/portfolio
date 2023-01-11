import Head from "next/head";
import { Inter } from "@next/font/google";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

import Image from "next/image";
import Pomo from "../public/pomodomo.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Anthony Truong Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-b from-gray-700 to-gray-500 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-Heebo">Developed by anthonytruongg</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-400 font-medium">
              Anthony Truong
            </h2>
            <h3 className="text-2xl py-2 text-zinc-300 font-Heebo font-medium">
              Computer Engineering Student
            </h3>
            <h3 className="text-2xl py-2 font-medium">About me</h3>
            <p className="text-md py-3 leading-8 text-gray-300 font-light">
              As a Computer Engineering student with a passion for technology, I
              have always enjoyed learning about and exploring new technologies.
              As a kid, my interest in development began in 2012 when I created
              a fully equipped Minecraft server with over 50+ daily users and
              learned how to manage player data with a MySQL database. I also
              enjoyed tinkering with electronics, such as jailbreaking iPods and
              hacking the Wii and PSP console systems. After growing up and
              losing interest in technology for a few years, I rediscovered my
              love for it when I learned about web development in 2022. Since
              then, I have been actively creating my own projects and striving
              to provide a great user experience for others.
            </p>
          </div>
          {/* <div className="text-5xl flex justify-center gap-16 py-3 pb-10 text-gray-300"> */}
          <div className="text-center gap-16 p-10  text-5xl rounded-xl  lg:flex lg:flex-col lg:items-center">
            <h3 className="text-2xl py-2 pb-10 font-medium">Contact Me</h3>
            <div className="text-5xl flex justify-center gap-16 py-3 pb-10 text-white">
              <a href="https://github.com/anthonytruongg">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/anthony-truong-98339b241/">
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="my-10 text-center p-10 shadow-2xl rounded-xl bg-slate-500 lg:flex lg:flex-col lg:items-center">
              <h3 className="text-2xl py-2 pb-10 font-medium">Projects</h3>

              <Image alt="" width={800} height={300} src={Pomo} />
              <h4 className="text-xl font-medium py-4 pt-10">PomoDomo Study</h4>
              <p className="text-md py-2 leading-8 text-gray-300 font-light">
                A timer application that helps you focus on your work by using
                the Pomodoro Technique, which is a timer set in intervals with
                breaks included in between to help the user stay focused on
                their task. The user has access to their Todo list, conveniently
                placed to the left of the timer. To the right, there is an API
                call to a public database to fetch a quote to help motivate
                users as well as an embedded "lofi" music player. This full
                stack application is built with MongoDB, Express, React, and
                Node.js. It utilizes a authentication system and calls an API to
                keep track of the users' todo's. The frontend has been deployed
                on Render, and backend on Cyclic.
              </p>
            </div>

            <div className="text-center p-10 shadow-2xl rounded-xl bg-slate-500 lg:flex lg:flex-col lg:items-center">
              <h3 className="text-2xl py-2 pb-2 font-medium">Skills</h3>

              <p className="text-md py-2 leading-8 pb-10 text-gray-300 font-light">
                Through building smaller projects, I was able to learn the
                basics of HTML, JS, and CSS. Over my winter 2023 break, my
                desire to learn the frontend frameworks and backend technologies
                allowed me to create my first full stack project. I am still
                actively learning new skills whilst solidifying my current
                skills.
              </p>

              <div className="text-8xl flex flex-col items-center justify-center gap-10 py-3 pb-10">
                <div className="flex flex-row gap-6">
                  <IoLogoJavascript />
                  <SiHtml5 />
                </div>
                <div className="flex flex-row gap-6">
                  <SiTailwindcss />
                  <SiMongodb />
                </div>
                <div className="flex flex-row gap-6">
                  <SiExpress />
                  <SiReact />
                </div>

                <div className="flex flex-row gap-6">
                  <DiNodejs />
                  <SiCplusplus />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div></div>
        </section>
      </main>
    </>
  );
}
