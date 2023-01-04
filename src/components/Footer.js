import { Box, Typography } from "@mui/material";

//  Footer Sec Start
const Footer = (_) => {
  return (
    <Box pb={0.5}>
      <Typography
        variant="h6"
        align="center"
        backgroundColor="black"
        color="gray"
        opacity="0.2"
      >
        - Mohd Asad
      </Typography>
      <Typography variant="h6" align="right" background="">
        <a
          href="https://github.com/asadmohd786?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          {/* You Can See the Src Code */}
          💻Github Source Code
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;