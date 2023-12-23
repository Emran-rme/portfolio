import { useRef, useEffect, useCallback, useState } from "react";

import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import TextTransition, { presets } from "react-text-transition";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import bg02 from "../assets/images/bg02.jpg";
import { firefly, links } from "../constants/particles";
import { Helmet } from "react-helmet-async";

const Home = ({ helmetTitle }) => {
    const [index, setIndex] = useState(0);

    const strings = [
        " برنامه‌نویسی این امکان رو به شما می‌ده تا در مورد خودِ «فکر کردن» فکر کنید و وقتی‌ هم که دیباگ می‌کنید، در مورد خودِ «یادگیری» یاد می‌گیرید.",
        " هر کسی باید یاد بگیره که چه‌طور کد بزنه چرا که برنامه‌نویسی به شما یاد می‌ده که چه‌طور فکر کنید.",
        " در آینده برنامه‌نویسان نقش جادوگران رو بازی خواهند کرد چرا که قدرتی جادویی دارن که دیگر افراد جامعه فاقد اون هستن.",
        " طراحی خوب بیش از آنکه هزینه به بار بیاره، ارزش‌آفرینی می‌کنه.",
    ];

    useEffect(() => {
        const stringsTransition = setInterval(() => {
            setIndex((index) => index + 1);
        }, 5000);

        return () => {
            clearInterval(stringsTransition);
        };
    }, []);

    const pariclesInit = useCallback(async (engin) => {
        await loadFull(engin);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Box
            sx={{
                backgroundImage: `url(${bg02})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
            }}
        >
            <Helmet>
                <title> {helmetTitle}</title>
            </Helmet>
            <Particles
                id="tsparticles"
                init={pariclesInit}
                loaded={particlesLoaded}
                options={links}
            />
            <Box component="div" sx={{ display: "flex", marginTop: "1rem" }}>
                <TextTransition springConfig={presets.wobbly}>
                    <Typography
                        variant="h6"
                        color="whitesmoke"
                        sx={{
                            mt: 4,
                            textDecoration: "underline",
                            textDecorationColor: "#F93C92",
                        }}
                    >
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>
            </Box>
        </Box>
    );
};

export default Home;
