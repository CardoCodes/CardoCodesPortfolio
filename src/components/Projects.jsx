import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: 280,
  },
  card: {
    display: "flex",
  },
  links: {
    marginRight: "auto",
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
  },
}));

function TagsContainer({ tags }) {
  const styles = useStyles();
  return (
    <div>
      {tags.map((tag) => (
        <Chip
          className={styles.tag}
          label={tag}
          variant="outlined"
          key={tag}
        ></Chip>
      ))}
    </div>
  );
}

function Project({ title, description, imageUrl, tags, links }) {
  const styles = useStyles();
  return (
    <Grid item>
      <Card className={styles.card}>
        <div>
          <CardContent>
            <Typography variant="h5" paragraph>
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Hidden mdUp>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardContent>
          <CardActions>
            <div className={styles.links}>
              {links.map((linkItem) => (
                <IconButton href={linkItem.href} key={linkItem.href}>
                  <linkItem.icon />
                </IconButton>
              ))}
            </div>
            <Hidden smDown>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardActions>
        </div>
        <Hidden xsDown>
          <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
        </Hidden>
      </Card>
    </Grid>
  );
}

export default function Projects() {
  return (
    <Container maxWidth="md" id="projects">
      <Box pt={8} mb={2}>
        <Typography variant="h4">Projects</Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        {projectsData.map((data) => (
          <Project {...data} key={data.title} />
        ))}
      </Grid>
    </Container>
  );
}

const projectsData = [
  {
    title: "Flutter Quiz",
    description:
      "Flutter Quiz app is an extension of Dart Quiz App. This is a mobile application developed using android studio that allows a user to take a quiz. This is done by decoding a json that is then used to create multiple choice and true/false questions. The user can also review test results.",
    imageUrl:
      "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    imageAlt: "Project 1 Image",
    tags: ["Flutter", "Dart", "Android Studio"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/CardoCodes/Flutter-Quiz-App",
      },
      {
        icon: OpenInNewIcon,
        href: "https://github.com/CardoCodes/Flutter-Quiz-App",
      },
    ],
  },
  {
    title: "PHP Omok Web Service",
    description:
      "This application is a web service that allows the user to play Omok versus a bot. The application works by sending & receiving information from a web service. The user can choose from two difficulties, smart or random. The goal of this project was to learn the fundamentals of PHP.",
    imageAlt: "Project 2 Image",
    imageUrl:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    tags: ["PHP", "Web Service"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/CardoCodes/University-Projects/tree/main/PHP%20WebService/src",
      },
      {
        icon: OpenInNewIcon,
        href: "https://github.com/CardoCodes/University-Projects/tree/main/PHP%20WebService/src",
      },
    ],
  },
  {
    title: "MSP430 Blinky Buzzy Toy",
    description:
      "In this project I program an MSP430 controller to perform certain tasks. 1 of 4 buttons performs an individual task. The goal of this project is to understand the computer architecture of the MSP430. This includes I/O, interrupts, timers, state machines, registers and the C language. ",
    imageAlt: "Project 3 Image",
    imageUrl:
      "https://www.digikey.com/-/media/MakerIO/Images/blogs/hands-on-with-the-texas-instruments-msp430-launchpad/hands-on-with-the-texas-instruments-msp430-figure-1.jpg",
    tags: ["C", "Computer Organization"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/CardoCodes/University-Projects/tree/main/C%20Blinky%20Buzzy%20Toy",
      },
      {
        icon: OpenInNewIcon,
        href: "https://github.com/CardoCodes/University-Projects/tree/main/C%20Blinky%20Buzzy%20Toy",
      },
    ],
  },
  {
    title: "React Web Portfolio",
    description:
      "I made this react web portfolio to have a website where I can showcase professional information about myself. It is also an opportunity for me to learn more about javascript and react. I plan on expanding and maintaining this website as I grow my professional resume. ",
    imageUrl:
      "https://miro.medium.com/max/1600/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg",
    imageAlt: "Project 4 Image",
    tags: ["React.js", "Material-UI", "Gatsby.js"],
    links: [
      {
        icon: GitHubIcon,
        href: "",
      },
      {
        icon: OpenInNewIcon,
        href: "https://cardocodes.com/",
      },
    ],
  },
];