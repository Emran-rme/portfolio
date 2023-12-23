import { useState } from "react";
import { Typography } from "@mui/material";

import { RandomReveal } from "react-random-reveal";

import avatar from "../../assets/images/img.jpg";

import { alphabetPersian } from "../../constants/alphabetPersian";
import ThemeActionButton from "../ThemeActionButton";
import { CustomAvatar } from "../common";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarHeader = () => {
    const [start, setStart] = useState(false);

    return (
        <>
            <ThemeActionButton />
            <CustomAvatar avatar={avatar} size={200} fallback="ER" />
            <Typography variant="h6" color="#F93C92">
                <Typography variant="caption" color="tomato">
                    {" {{ "}
                </Typography>
                <RandomReveal
                    isPlaying
                    duration={4}
                    characters="عمران رستم زاده"
                    characterSet={alphabetPersian}
                    onComplete={() => setStart(true)}
                />
                <Typography variant="caption" color="tomato">
                    {" }} "}
                </Typography>
            </Typography>
            {start && (
                <Typography variant="caption" color="gray">
                    <Typography variant="caption" color="tomato">
                        [[{" "}
                    </Typography>
                    <RandomReveal
                        isPlaying
                        duration={4}
                        characters="توسعه دهنده وب"
                        characterSet={alphabetPersian}
                    />
                    <Typography variant="caption" color="tomato">
                        {" "}
                        ]]
                    </Typography>
                </Typography>
            )}
            <SocialMediaIcons />
        </>
    );
};

export default SidebarHeader;
