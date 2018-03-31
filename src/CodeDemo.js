// @flow
import * as React from "react";
import Highlight from "react-highlight";
import colors from "./colors";

export default function CodeDemo({ code }: { code: string }) {
  return (
    <div
      className="margin-allaround-small padding-allaround-small"
      style={{
        backgroundColor: colors.gray,
        boxShadow: "inset -10px -9px 20px 3px #dfdfdfe6"
      }}
    >
      <pre>
        <code>
          <Highlight className="javascript">{`${code}`}</Highlight>
        </code>
      </pre>
    </div>
  );
}
