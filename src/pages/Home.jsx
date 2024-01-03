import { FaFacebookF, FaPlay } from 'react-icons/fa';
import HeroImg from '../assets/dev.png';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialLinkedin, TiSocialInstagram } from 'react-icons/ti';

import './home.css';

const Home = () => {
	return (
		<div className='container home'>
			<section className='hero-section' id='home'>
				<div className='hero-section__left'>
					<div className='hero-section__special-text'>
						Hello! I am <br /> Fallon
					</div>
					<div className='hero-section__paragraph'>
						<h3>
							Frontend Developer specialised in HTML, CSS, JavaScript and React
						</h3>
					</div>
					<a href='/resume.pdf' download='resume.pdf' className='button'>
						Get Resume
					</a>

					<div className='video-link'>
						<div className='link'>
							<a href='https://youtu.be/m4MDt7UUu1w?si=MTugFpitro7vF1t5'>
								<FaPlay />
							</a>
						</div>
						<span>Video Link</span>
					</div>
				</div>
				<div className='hero-section__right'>
					<div className='hero-section__image'>
						<img src={HeroImg} alt='hero image' />
						<div className='hero-section__image-half-round-shape'></div>
						<div className='socual-links'>
							<a href=''>
								<FaFacebookF />
							</a>
							<a href=''>
								<FaXTwitter />
							</a>
							<a href=''>
								<TiSocialLinkedin />
							</a>
							<a href=''>
								<TiSocialInstagram />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
