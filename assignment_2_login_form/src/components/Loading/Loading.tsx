import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <ClipLoader
      css={override}
      size={50}
      color={"#123abc"}
      loading={isLoading}
    />
  );
};

export default Loading;
