"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BsWhatsapp, BsMicrosoftTeams, BsTelegram } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import Link from "next/link"
import { Source_Code_Pro } from "next/font/google"
import { useLocale } from "next-intl"
import { useSectionInView } from "@/lib/hooks"
import { TypeAnimation } from "react-type-animation"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useTranslations } from "next-intl"
import useSound from "use-sound"

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "400" })

export default function Intro() {
  const { ref } = useSectionInView("Home")
  const activeLocale = useLocale()
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const t = useTranslations("IntroSection")
  const [playHover] = useSound("/bubble.wav", { volume: 0.5 })

  return (
    <section
      ref={ref}
      className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/Ranilo.jpg"
              alt="developer-image"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-35 w-35 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            onHoverStart={() => {
              console.log("sound")
              playHover()
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.25, rotate: 15 }}
            className="absolute text-4xl bottom-0 right-0 hover:rotate-2"
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
            }}
          >
            📡
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-center text-4xl font-bold tracking-tight  sm:text-5xl">
            {t("name")}
          </h1>

          <div className="text-center">
            <h2
              id="name"
              className=" text-center  text-2xl  sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold"
            >
              <TypeAnimation
                sequence={[
                  "Web3 Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </div>
        </motion.div>
        <p>{t("short_intro")}</p>
        {activeLocale === "en" && (
          <p>
            My focus is{" "}
            <span className="italic font-bold">Web3.js(Smart Contract)</span>.
          </p>
        )}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center  gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <Link
          target="_blank"
          className="bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={
            activeLocale == "en"
              ? "/Ranilo-web3-resume.pdf"
              : "/Ranilo-web3-resume.pdf"
          }
          locale={false}
        >
          {t("download_cv")}
          <HiDownload />
        </Link>
        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://t.me/DevGlory/"
          target="_blank"
        >
          <BsTelegram />
        </a>
        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://wa.me/639534482920/"
          target="_blank"
        >
          <BsWhatsapp />
        </a>
        <a
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Nathan5467"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className=" bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://teams.microsoft.com/l/chat/0/0?users=nathanscott5467@gmail.com"
          target="_blank"
        >
          <BsMicrosoftTeams />
        </a>
      </motion.div>
    </section>
  )
}
