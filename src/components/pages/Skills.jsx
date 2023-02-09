import { useState, useEffect } from "react";

import { devSkills } from "../../constants/skiils";
import { Skill } from "./";

const Skills = () => {
  const [javaScript, setJavaScript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [node, setNode] = useState(0);
  const [react, setReact] = useState(0);
  const [git, setGit] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setJavaScript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 82);
      });

      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 95);
      });

      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 73);
      });

      setReact((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 95);
      });

      setNode((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 86);
      });

      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 66);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { htmlSkill, cssSkill, jsSkill, nodeSkill, reactSkill, gitSkill } =
    devSkills;

  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={javaScript}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={react}
      />
      <Skill
        name={nodeSkill.name}
        icon={nodeSkill.icon}
        color={nodeSkill.color}
        value={node}
      />
      <Skill
        name={gitSkill.name}
        icon={gitSkill.icon}
        color={gitSkill.color}
        value={git}
      />
    </>
  );
};

export default Skills;
