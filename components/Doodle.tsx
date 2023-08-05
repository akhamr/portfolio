'use client';
import { motion } from 'framer-motion';

// Stroke line-cap round bugged

export function Doodle1() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 300 200">
            <motion.path
                fill="none"
                strokeWidth={5}
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: [1, 0.4, 0.7, 0.9] }}
                d="M14.5,181.608986q17.460317-33.955867,19.84127-42.444833c2.380953-8.488966-12.698413,39.898144-6.349206,36.927005s7.142857-22.071313,11.111111-21.222417q3.968254.848896-2.380952,28.438038L54.18254,142.984187q-7.142857,29.286934-4.761905,30.560279c2.380952,1.273344,7.142857-19.100176,8.730159-19.100176s.793651,27.164693-2.380952,28.862486q-3.174603,1.697793,9.523809-15.28014l2.380953,11.035657q7.936508-25.891349,3.968253-28.862487t6.349207,22.92021Q84.34127,151.8976,86.722223,154.44429t2.380952,26.315796l11.904762-37.775899q-.023807,43.533206,0,32.258071c.023808-11.275135,12.801909-32.756798,9.52381-14.431243q-3.278098,18.325555,6.349206,7.215621-1.984127-42.869277,1.587302-25.042449t4.761904,37.775899l11.111111-30.56028q2.380953,22.495761.793651,22.92021t12.698413-30.135829l-5.555557,36.078106q15.079366-42.444826,15.079366-24.193552t-3.968255,21.222417q15.079365-20.797968,15.079365-33.106971t-1.587302,33.106971l11.111111-15.280143q4.761904,20.797968,9.52381,7.215621c4.761904-13.582346-2.592631-.639037-1.587302-13.157895c1.044716-13.009309,4.936924-3.085749,10.317461,24.193552c1.264235-10.514312,1.370684-28.027159,8.730158-36.078106v25.042449L214.5,154.44429"
            />
        </svg>
    );
}

export function Doodle2() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 70 300 200">
            <motion.path
                fill="none"
                strokeWidth={10}
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                d="M48.535114,143.47264c18.455469.593002,35.008148-7.229923,48.255066-4.30849c48.916668,10.787924,92.379222,8.169057,137.009906,4.30849"
            />
        </svg>
    );
}
