import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ tech }) => {
  const pageUrl = typeof window !== undefined ? window.location.href : "";
  // const disqusConfig = {
  //   url: pageUrl,
  //   identifier: tech.id,
  //   title: tech.title,
  // };
  return (
    <DiscussionEmbed shortname="techblog-bww2ltggwu" config={
      {
        url: pageUrl,
        identifier: tech.id,
        title: tech.name	
    }
    } />
  );
};

export default DisqusComments;
