import Head from "next/head";
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
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { DiNodejs } from "react-icons/di";

import Image from "next/image";
import Pomo from "../public/img/pomodomo.png";
import ListMe from "../public/img/listme.png";
import Memory from "../public/img/memory.png";
import Gif from "../public/img/GIFONE.gif";
import Gif2 from "../public/img/SecondGif.gif";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anthony Truong Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className=" px-10 md:px-20 lg:px-40 bg-backgroundThree bg-cover">
        {/* <main className="bg-gradient-to-b from-gray-700 to-gray-500 px-10 md:px-20 lg:px-40 bg-homeBackground"> */}
        <section className="min-h-screen">
          <div className="text-center p-10">
            <h2 className="text-4xl lg:text-5xl py-2 text-emerald-500 font-Inter font-bold">
              Anthony Truong
            </h2>
            <h3 className="text-2xl py-2 text-white font-Inter font-medium">
              Web Developer
            </h3>
            <h3 className="text-2xl py-2 pb-4 font-medium">About me</h3>
            <p className="text-md py-3 leading-8 text-gray-200 font-light">
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
            <h3 className="text-2xl py-2 pb-10 font-medium">Contact Me!</h3>
            <div className="text-5xl flex justify-center gap-16 py-3 pb-10 text-white">
              <a href="https://github.com/anthonytruongg">
                <AiFillGithub className="gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                <p className="text-sm font-Noto">Github</p>
              </a>
              <a href="https://www.linkedin.com/in/anthony-truong-98339b241/">
                <AiFillLinkedin className="gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                <p className="text-sm font-Noto">LinkedIn</p>
              </a>
              <a href="https://drive.google.com/file/d/1m-gzKKCzYrFmHSupoQcQdBIA6RmcuyJ0/view?usp=sharing">
                <MdOutlinePictureAsPdf className="text-white gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                <p className="text-sm font-Noto">Resume</p>
              </a>
            </div>
          </div>
          <div>
            <div className="my-10 text-center p-10 shadow-2xl rounded-xl bg-gradient-to-b from-emerald-800 lg:flex lg:flex-col lg:items-center">
              <h3 className="text-2xl py-2 pb-4 font-medium">My Projects</h3>
              <h4 className="text-xl font-medium py-4 pt-10">
                TestMe | Flashcard Application
              </h4>

              <a href="https://flashcard-app-anthonytruongg.vercel.app/">
                <Image
                  className="hover:shadow-2xl hover:-translate-y-4 transition ease-in-out"
                  alt="Gif Two"
                  width={800}
                  height={300}
                  src={Gif2}
                />
                <Image
                  className="hover:shadow-2xl hover:-translate-y-4 transition ease-in-out pt-4"
                  alt="Gif One"
                  width={800}
                  height={300}
                  src={Gif}
                />
              </a>
              <p className="text-md pt-8 py-4 leading-8 text-gray-300 font-light">
                A fullstack CRUD application that allows users to create new
                flashcards. Users are able to study the flashcards through the
                study tab, which flips the terms and definitions. Users can also
                edit and delete existing flashcards. This full stack application
                is built with MongoDB, Express, React, and Node. This project
                solidified my knowledge of user authentication, protected
                routes, and CRUD operations. The frontend is hosted through
                Vercel, and backend has been deployed on cyclic.
              </p>

              <h4 className="text-xl font-medium py-4 pt-10">PomoDomo Study</h4>
              <a href="https://pomodomo.onrender.com/">
                <Image
                  className="hover:shadow-2xl hover:-translate-y-4 transition ease-in-out"
                  alt=""
                  width={800}
                  height={300}
                  src={Pomo}
                />
              </a>
              <p className="text-md pt-8 py-4 leading-8 text-gray-300 font-light">
                A timer application that helps you focus on your work by using
                the Pomodoro Technique, which is a timer set in intervals with
                breaks included in between to help the user stay focused on
                their task. The user has access to their Todo list, conveniently
                placed to the left of the timer. To the right, there is an API
                call to a public database to fetch a quote to help motivate
                users as well as an embedded lofi music player. This full stack
                application is built with MongoDB, Express, React, and Node.js.
                It utilizes a authentication system and calls an API to keep
                track of the user todos. The frontend has been deployed on
                Render, and backend on Cyclic.
              </p>

              <h4 className="text-xl font-medium py-4 pt-10">ListMe</h4>

              <a href="https://anthonytruongg.github.io/ListMe/">
                <Image
                  className="hover:shadow-2xl hover:-translate-y-4 transition ease-in-out"
                  alt=""
                  width={800}
                  height={300}
                  src={ListMe}
                />
              </a>
              <p className="text-md pt-8 py-4 leading-8 text-gray-300 font-light">
                Designed and developed a To-do list web application in
                JavaScript and HTML/CSS which uses multiple arrays to store task
                data. The data is stored via local storage. Designed for minimal
                and functional ease. The project is organized and packed
                together through Web-pack 5.
              </p>

              <h4 className="text-xl font-medium py-4 pt-10">Memory Game</h4>

              <a href="https://anthonytruongg.github.io/MemoryGame/">
                <Image
                  className="hover:shadow-2xl hover:-translate-y-4 transition ease-in-out"
                  alt=""
                  width={800}
                  height={300}
                  src={Memory}
                />
              </a>
              <p className="text-md pt-8 py-4 leading-8 text-gray-300 font-light">
                A memory game that tests the user memory by having them select
                cards with colors. If the same card is selected twice, the game
                is over. The user score is tracked and displayed at the top of
                the screen. The game is built with React framework.
              </p>
            </div>

            <div className="text-center p-10 shadow-2xl rounded-xl bg-gradient-to-b from-emerald-800 lg:flex lg:flex-col lg:items-center">
              <h3 className="text-2xl py-2 pb-2 font-medium">Skills</h3>

              <p className="text-md pt-8 py-4 leading-8 pb-10 text-gray-300 font-light">
                Through building smaller projects, I was able to learn the
                basics of HTML, JS, and CSS. Over my winter 2023 break, my
                desire to learn the frontend frameworks and backend technologies
                allowed me to create my first full stack project. I am still
                actively learning new skills whilst solidifying my current
                skills.
              </p>

              <div className="text-8xl flex flex-col items-center justify-center gap-10 py-3 pb-10">
                <div className="flex flex-row gap-6">
                  <IoLogoJavascript className="gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                  <SiHtml5 className="gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                </div>
                <div className="flex flex-row gap-6">
                  <SiTailwindcss className="gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                  <SiMongodb className="gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                </div>
                <div className="flex flex-row gap-6">
                  <SiExpress className="gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                  <SiReact className="gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                </div>

                <div className="flex flex-row gap-6">
                  <DiNodejs className="gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                  <SiCplusplus className="gap-6 hover:-translate-y-2 lg:hover:-translate-y-4 transition ease-in-out" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center p-10 shadow-2xl rounded-xl bg-gradient-to-b from-emerald-800 lg:flex lg:flex-col lg:items-center">
            <h3 className="text-2xl py-2 pb-2 font-medium">Education</h3>

            <p className="text-md py-2 leading-8 pb-10 text-gray-300 font-light">
              As a current student at Santa Ana/Santiago Canyon College, I
              embarked on my college journey as an undeclared major. I was never
              good at math and science until I learned to reshape my mindset.
              After taking my first programming and physics course, I discovered
              my passion for Computer Engineering and made it my major. Not only
              have I enjoyed learning about math and science, I also dived into
              web development as a side hobby and saw the potential to create
              something life changing given the right knowledge. I am excited to
              transfer to a University of California this Fall 2023 and earn my
              degree.
            </p>
          </div>
        </section>

        <section>
          <nav className="py-10 mb-4 flex justify-center">
            <h1 className="text-xl font-IBM font-light">
              Developed by anthonytruongg
            </h1>
          </nav>
        </section>
      </main>
    </>
  );
}
