"use client";

import { motion, useAnimation, useInView, Variant } from "framer-motion";
import React, { useEffect, useRef } from "react";

type AnimatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    repeatDelay?: number;
    startDelay?: number;
    animation?: {
        hidden: Variant;
        visible: Variant;
    };
};

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
        },
    },
};

export const AnimatedText = ({
    text,
    el: Wrapper = "p",
    className,
    once,
    repeatDelay,
    startDelay,
    animation = defaultAnimations,
}: AnimatedTextProps) => {
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once });

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        timeout = setTimeout(() => {
            const show = () => {
                controls.start("visible");
                if (repeatDelay) {
                    timeout = setTimeout(async () => {
                        await controls.start("hidden");
                        controls.start("visible");
                    }, repeatDelay);
                }
            };

            if (isInView) {
                show();
            } else {
                controls.start("hidden");
            }
        }, startDelay);
        return () => clearTimeout(timeout);
    }, [isInView, startDelay, repeatDelay, controls]);

    return (
        <Wrapper className={className}>
            <span className="sr-only">{textArray.join(" ")}</span>
            <motion.span
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {},
                }}
                aria-hidden
            >
                {textArray.map((line, lineIndex) => (
                    <span className="block" key={`${line}-${lineIndex}`}>
                        {line.split(" ").map((word, wordIndex) => (
                            <span
                                className="inline-block"
                                key={`${word}-${wordIndex}`}
                            >
                                {word.split("").map((char, charIndex) => (
                                    <motion.span
                                        key={`${char}-${charIndex}`}
                                        className="inline-block"
                                        variants={animation}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className="inline-block">&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
};

export default AnimatedText;
