import React from 'react';
import './LifeJourney.css';
import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react';

const LifeJourney = () => {
	const [flip, set] = useState(false)
	const { number } = useSpring({
		from: { number: 0 },
		number: 270,
		delay: 3000,
		config: config.molasses,
		onRest: () => set(!flip),
	})
	const { number1 } = useSpring({
		from: { number1: 0 },
		number1: 199,
		delay: 600,
		config: config.molasses,
		onRest: () => set(!flip),
	})
	const { number2 } = useSpring({
		from: { number2: 0 },
		number2: 365,
		delay: 600,
		config: config.molasses,
		onRest: () => set(!flip),
	})
	const { number3 } = useSpring({
		from: { number3: 0 },
		number3: 30,
		delay: 600,
		config: config.molasses,
		onRest: () => set(!flip),
	})
	return (
		<section id="count-area" class="text-center">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 pb-5">
						<h2 className="title text-white">Life's Career</h2>
						<p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
					</div>
				</div>
				<div class="row d-lg-flex">
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="fas fa-handshake"></i>
								<span className="counter"><animated.div className="d-inline">{number.to(n => n.toFixed(0))}</animated.div></span><span>+</span>
							</div>
							<span>PROJECTS COMPLETED</span>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="fas fa-heart"></i>
								<span className="counter"><animated.div className="d-inline">{number1.to(n => n.toFixed(0))}</animated.div></span><span>+</span>
							</div>
							<span>HAPPY CLIENTS</span>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="far fa-moon"></i>
								<span className="counter"><animated.div className="d-inline">{number2.to(n => n.toFixed(0))}</animated.div></span><span>+</span>
							</div>
							<span>SLEEPLESS NIGHTS</span>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="fas fa-trophy"></i>
								<span className="counter"><animated.div className="d-inline">{number3.to(n => n.toFixed(0))}</animated.div></span><span>+</span>
							</div>
							<span>WINNING AWARDS</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LifeJourney;
