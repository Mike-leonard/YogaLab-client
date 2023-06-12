
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const LoadingAnimation = () => (
    <div className="loading-container">
        <motion.ul
            className="loading-list"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {[0, 1, 2, 3].map((index) => (
                <motion.li
                    key={index}
                    className={`loading-item loading-item-${index}`}
                    variants={item}
                />
            ))}
        </motion.ul>
    </div>
);

export default LoadingAnimation;
