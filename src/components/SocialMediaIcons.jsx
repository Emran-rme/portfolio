import { Box, IconButton } from "@mui/material";
import { GitHub, Instagram, Telegram, WhatsApp } from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
    <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
      <IconButton aria-label="GitHub">
        <a
          href="https://github.com/emran-rme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ color: "grey" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Instagram">
        <a
          href="https://inistagram.com/emranrostamzadeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram sx={{ color: "grey" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Telegram">
        <a
          href="https://inistagram.com/emranrostamzadeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telegram sx={{ color: "grey" }} />
        </a>
      </IconButton>
      <IconButton aria-label="WhatsApp">
        <a
          href="https://inistagram.com/emranrostamzadeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp sx={{ color: "grey" }} />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
