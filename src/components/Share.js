import React from "react";
import { TwitterIcon, TwitterShareButton } from "react-share";

function Share() {
  return (
    <div>
      <TwitterShareButton title="Tweet, Tweet" url="http://www.twitter.com">
        <TwitterIcon size={32} />
      </TwitterShareButton>
    </div>
  );
}

export default Share;
