import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import TitleHeader from '../components/TitleHeader'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
        gsap.fromTo(card,
            {y: 50, opacity:0},
            {y:0, opacity: 1, duration: 1, delay: 0.3 * (index+1), scrollTrigger: {trigger: card, start: 'top bottom-=100',}}
        )
    });

    gsap.fromTo(sectionRef.current,
        {opacity: 0},
        {opacity: 1, duration: 1.5}
    )
  }, []);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <TitleHeader title="My Projects" sub="Some of my best Projects 🚀" />
            <div className='showcaselayout mt-10'>

                {/* Left Side */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/Mojito.png" alt="Ryde" />
                    </div>
                    <div className='text-content'>
                        <h2>Velvet Pour - A Fully Animated Website, with Buttery Smooth Animations and a Modern UI</h2>
                        <p className="text-white-50 md:text-xl">A website built with React, TailwindCSS, and GSAP for a smooth, user-friendly experience.</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className="project" ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/trump-word-cloud.webp" alt="Tweet Sentiment Analyser" />
                        </div>
                        <h2>Tweet Sentiment Analyser</h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/ThinkBoard.png" alt="ThinkBoard" />
                        </div>
                        <h2>ThinkBoard - A One Stop Note Managing Web App</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection