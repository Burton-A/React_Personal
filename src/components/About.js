import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});
	return (
		<section className="section" id="about" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]  bg-top"
					></motion.div>
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent">About Me.</h2>
						<h3 className="h3 mb-4">
							As a Full Stack Developer, I am passionate about building and creating innovative
							solutions. I continuously strive to expand my skills and knowledge in the field, and
							love to challenge myself with new ideas and projects. Collaboration and teamwork are
							also important to me, as I believe that working together is the key to solving complex
							problems effectively. In my free time, I can often be found indulging in my hobbies of
							gaming and watching horror movies. If you'd like to learn more about me, or just want
							to connect, feel free to check out my resume or send me an email. I look forward to
							hearing from you!
						</h3>
						<div className="flex mb-12">
							
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
