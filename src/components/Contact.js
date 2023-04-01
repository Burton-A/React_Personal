import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
	return (
		<section className="py-16 lg:section" id="contact">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex justify-start items-center"
					>
						<div>
							<h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
								Get in touch
							</h4>
							<h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
								Send me a message...
							</h2>
						</div>
					</motion.div>
					<motion.form
						action="https://api.web3forms.com/submit"
						method="POST"
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 border rounded-2xl border-black flex flex-col gap-y-6 pb-24 p-6 items-start"
					>
							<input type="hidden" name="access_key" value="66ed978e-db31-4ad8-b7a7-3e475845a23a"/>
						<input
							className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all"
							type="text"
							name="full_name"
							placeholder="Your Name"
							required
						/>
						<input
							className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all"
							type="text"
							name="email"
							placeholder="Your Email"
							required
						/>
						<textarea
							className="bg-transparent border-b py-12 outline-none w-full placeholder:text-black focus:border-accent transition-all resize-none mb-12"
							name="message"
							placeholder="Your Message"
							required
						></textarea>
						<button type='submit' className="btn btn-lg">Send Message</button>
					</motion.form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
