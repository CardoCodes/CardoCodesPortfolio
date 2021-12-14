import React from "react";
import GithubIcon from "@material-ui/icons/Github";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles, withTheme } from "@material-ui/core";

const socialItems = [
  { icon: GithubIcon, url: "https://github.com/CardoCodes", name: "github" },
  { icon: TwitterIcon, url: "https://twitter.com/cardocodes", name: "twitter" },
  { icon: LinkedInIcon, url: "https://www.linkedin.com/in/ricardo-mendez-300483216/", name: "linkedin" },
];

export default function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItems.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url}>
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}