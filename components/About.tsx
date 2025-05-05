"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
  <>
    <p className="mb-3">
      My journey into programming started during my undergraduate years at
      <span className="italic underline">
        {" "}
        <a
          href="https://en.wikipedia.org/wiki/Hanoi_University_of_Science_and_Technology"
          target="_blank"
        >
          Hanoi University of Science and Technology
        </a>
      </span>
      , where I majored in computer science. I learned the fundamentals of
      programming, data structures, and databases, but it was web development
      that truly captured my interest. I remember building my first interactive
      site with HTML, CSS, and JavaScript—it made me realize the creative power
      of code and how much I enjoyed building for the web.
    </p>

    <p className="mb-3">
      As I progressed, I became deeply engaged in modern full-stack
      development, especially in the world of Web3. I started learning and
      working with
      <span className="font-medium italic">
        {" "}
        Web3.js, Solidity, and smart contract tools
      </span>
      like Hardhat and Foundry. I’ve since built several dApps integrating
      blockchain with clean, responsive frontends using
      <span className="font-medium italic"> Next.js and TailwindCSS</span>. I
      enjoy working through the unique challenges of decentralized development
      and making Web3 apps accessible and user-friendly.
    </p>

    <p className="mb-3">
      Throughout my learning and projects, I’ve also gained strong experience
      with
      <span className="font-medium italic">
        {" "}
        React, TypeScript, and full-stack tooling
      </span>
      , including REST APIs, Ethers.js, and backend services. I love solving
      real-world problems through clean code and collaboration—seeing a feature
      I built working live is one of the best parts of being a developer.
    </p>

    <p>
      In my spare time, I like exploring new technologies, building side
      projects, and sharing insights with the tech community. I run my own
      social media accounts where I post tutorials, project walkthroughs, and
      thoughts on Web3 trends. Outside of coding, I enjoy cooking, watching
      movies, and working out—these habits help me stay creative, focused, and
      energized.
    </p>
  </>
) : (
        <>
          <p className="mb-3">
            My journey into programming started during my undergraduate years at
            <span className="italic underline">
              {" "}
              <a
                href="https://en.wikipedia.org/wiki/Hanoi_University_of_Science_and_Technology"
                target="_blank"
              >
                Hanoi University of Science and Technology
              </a>
            </span>
            , where I majored in computer science. I learned the fundamentals of
            programming, data structures, and databases, but it was web development
            that truly captured my interest. I remember building my first interactive
            site with HTML, CSS, and JavaScript—it made me realize the creative power
            of code and how much I enjoyed building for the web.
          </p>
      
          <p className="mb-3">
            As I progressed, I became deeply engaged in modern full-stack
            development, especially in the world of Web3. I started learning and
            working with
            <span className="font-medium italic">
              {" "}
              Web3.js, Solidity, and smart contract tools
            </span>
            like Hardhat and Foundry. I’ve since built several dApps integrating
            blockchain with clean, responsive frontends using
            <span className="font-medium italic"> Next.js and TailwindCSS</span>. I
            enjoy working through the unique challenges of decentralized development
            and making Web3 apps accessible and user-friendly.
          </p>
      
          <p className="mb-3">
            Throughout my learning and projects, I’ve also gained strong experience
            with
            <span className="font-medium italic">
              {" "}
              React, TypeScript, and full-stack tooling
            </span>
            , including REST APIs, Ethers.js, and backend services. I love solving
            real-world problems through clean code and collaboration—seeing a feature
            I built working live is one of the best parts of being a developer.
          </p>
      
          <p>
            In my spare time, I like exploring new technologies, building side
            projects, and sharing insights with the tech community. I run my own
            social media accounts where I post tutorials, project walkthroughs, and
            thoughts on Web3 trends. Outside of coding, I enjoy cooking, watching
            movies, and working out—these habits help me stay creative, focused, and
            energized.
          </p>
        </>
      )}
    </motion.section>
  )
}
