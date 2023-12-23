import { useState, useEffect } from "react";

import { devSkills } from "../../constants/skiils";
import { Skill } from "./";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Skills = () => {
    const [javaScript, setJavaScript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [node, setNode] = useState(0);
    const [react, setReact] = useState(0);
    const [redux, setRedux] = useState(0);
    const [tailwind, setTailwind] = useState(0);
    const [materialUi, setMaterialUi] = useState(0);
    const [next, setNext] = useState(0);
    const [git, setGit] = useState(0);
    const [vueVueX, setVueVueX] = useState(0);
    const [typeScript, setTypeScript] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setJavaScript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 85);
            });

            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 95);
            });

            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 73);
            });

            setNext((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });

            setReact((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 80);
            });

            setRedux((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 75);
            });

            setTailwind((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 88);
            });

            setMaterialUi((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 80);
            });

            setNode((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });

            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 66);
            });

            setVueVueX((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });
            setTypeScript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 60);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const {
        htmlSkill,
        cssSkill,
        jsSkill,
        nodeSkill,
        reactSkill,
        gitSkill,
        nextSkill,
        reduxSkill,
        materialUiSkill,
        tailwindSkill,
        vueVueXSkill,
        typeScriptSkill,
    } = devSkills;

    return (
        <Grid container spacing={2}>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={htmlSkill.name}
                    icon={htmlSkill.icon}
                    color={htmlSkill.color}
                    value={html}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={cssSkill.name}
                    icon={cssSkill.icon}
                    color={cssSkill.color}
                    value={css}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={jsSkill.name}
                    icon={jsSkill.icon}
                    color={jsSkill.color}
                    value={javaScript}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={reactSkill.name}
                    icon={reactSkill.icon}
                    color={reactSkill.color}
                    value={react}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={reduxSkill.name}
                    icon={reduxSkill.icon}
                    color={reduxSkill.color}
                    value={redux}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={nextSkill.name}
                    icon={nextSkill.icon}
                    color={nextSkill.color}
                    value={next}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={nodeSkill.name}
                    icon={nodeSkill.icon}
                    color={nodeSkill.color}
                    value={node}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={tailwindSkill.name}
                    icon={tailwindSkill.icon}
                    color={tailwindSkill.color}
                    value={tailwind}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={materialUiSkill.name}
                    icon={materialUiSkill.icon}
                    color={materialUiSkill.color}
                    value={materialUi}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={gitSkill.name}
                    icon={gitSkill.icon}
                    color={gitSkill.color}
                    value={git}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={vueVueXSkill.name}
                    icon={vueVueXSkill.icon}
                    color={vueVueXSkill.color}
                    value={vueVueX}
                />
            </Grid>
            <Grid sx={{ width: 1, mt: 1 }} xs={12} md={6}>
                <Skill
                    name={typeScriptSkill.name}
                    icon={typeScriptSkill.icon}
                    color={typeScriptSkill.color}
                    value={typeScript}
                />
            </Grid>
        </Grid>
    );
};

export default Skills;
