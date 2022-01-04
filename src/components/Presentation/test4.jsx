import React from "react";
import RadialMenu from "react-radial-menu";

const items = [
  {
    href: "http://www.facebook.com",
    image: "url(@mui/icons-material/AccountBalance)",
  },
  {
    href: "http://www.reddit.com",
    image: "url(@mui/icons-material/Agriculture)",
  },
  {
    href: "http://www.flickr.com",
    image: "url(@mui/icons-material/Android)",
  },
  // {
  //   href: "http://www.google.com",
  //   image: "url(examples/dist/images/social/googleplus.png)",
  // },
  // {
  //   href: "http://www.linkedin.com",
  //   image: "url(examples/dist/images/social/linkedin.png)",
  // },
  // {
  //   href: "http://www.twitter.com",
  //   image: "url(examples/dist/images/social/twitter.png)",
  // },
  // {
  //   href: "http://www.twitter.com",
  //   image: "url(examples/dist/images/social/twitter.png)",
  // },
];

const center = {
  image: "url(assets/images/me.jpg)",
};

function Test() {
  return (
    <RadialMenu
      items={items}
      center={center}
      duration={600}
      stagger={100}
      itemsSize={100}
      distance={100}
    />
  );
}

export default Test;
