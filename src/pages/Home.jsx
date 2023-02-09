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
  const nameEl = useRef(null);

  const strings = [
    "توسعه دهنده فول استک هستم",
    "فریلنسر هستم",
    "محتوا ساز دنیای برنامه نویسی هستم",
    "مدرس برنامه نویسی هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: [" عمران رستم زاده "],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
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
        justifyContent: "center",
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
        options={firefly}
      />
      <Box component="div" sx={{ display: "flex" }}>
        <Typography variant="h3" color="#F93C92">
          {"{{"}
        </Typography>
        <Typography ref={nameEl} variant="h3" color="tomato" />
        <Typography variant="h3" color="#F93C92">
          {"}}"}
        </Typography>
      </Box>
      <Box component="div" sx={{ display: "flex" }}>
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            variant="h4"
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
        <Typography variant="h4" color="whitesmoke" sx={{ mt: 4, mr: 1 }}>
          من یک
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
