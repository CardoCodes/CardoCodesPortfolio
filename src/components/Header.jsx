import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About Me", href: "#"},
  { name: "Resume", href: "/resume.pdf" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  avatar: {
    marginRight: "auto",
    color: "white",
    backgroundColor: "#DF711B",
    borderRadius: 5,
    height: 40,
    width: 40,
    border: "2px solid #DF711B",
    borderLeft: "0px solid transparent",
    borderRight: "0px solid transparent",
  },
}));

export default function Header() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <Avatar className={styles.avatar}>CC</Avatar>
          <Hidden xsDown>
            {navigationLinks.map((item) => (
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </ToolBar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}