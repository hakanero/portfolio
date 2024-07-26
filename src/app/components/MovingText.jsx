"use client"
import { useRef } from 'react';
import styles from "../style.css"


export default function MoveText() {

	const firstText = useRef(null);

	const secondText = useRef(null);

	const slider = useRef(null);


	return (
		<div className={styles.sliderContainer}>

			<div ref={slider} className={styles.slider}>

				<p ref={firstText}>Freelance Developer -</p>

				<p ref={secondText}>Freelance Developer -</p>

			</div>

		</div>
	)
}