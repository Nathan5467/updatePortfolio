import Intro from "@/components/Intro"
import SectionDivider from "@/components/SectionDivider"
import About from "@/components/About"
// import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import { isMobileDevice } from "@/lib/utils"
// import Contact from "@/components/Contact"

export const metadata = {
  icon: "../icon.ico",
  keywords: "Ranilo, Portfolio, Web3 Developer, Next.js, TypeScript",
  title: "Ranilo | Personal Portfolio",
  description: "Ranilo is a Web3 developer with 8 years of experience.",
}

export default function Home() {
  const isMobile = isMobileDevice()

  return (
    <main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <Intro />
      <SectionDivider />
      {/* <About />
      <Projects /> */}
      <Skills />
      <Experience isMobile={isMobile} />
      {/* <Contact /> */}
    </main>
  )
}
