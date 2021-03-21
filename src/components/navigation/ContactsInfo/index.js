import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export default function ContactsInfo({ anchorEl, setAnchorEl, open }) {
  const email = "latifaabdullayeva@gmail.com";
  const [openMessage, setopenMessage] = React.useState(false);
  const [copySuccessMessage, setCopySuccessMessage] = React.useState("");

  const handleClose = () => {
    setAnchorEl(null);
    setopenMessage(null);
  };

  const handleClick = () => {
    setopenMessage(true);
    // Copy the email to clipboard
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`${email} copied to clipboard`);
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClick}>
        <IconButton>
          <MailIcon />
        </IconButton>
        Email
      </MenuItem>
      <MenuItem>
        <a
          href="https://github.com/latifaabdullayeva"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          <IconButton>
            <GitHubIcon />
          </IconButton>
          Github
        </a>
      </MenuItem>
      <MenuItem>
        <a
          href="https://www.linkedin.com/in/latifa-abdullayeva"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          LinkedIn
        </a>
      </MenuItem>

      <Snackbar
        open={openMessage}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert onClose={handleClose} severity="success" variant="filled">
          {copySuccessMessage}
        </MuiAlert>
      </Snackbar>
    </Menu>
  );
}
