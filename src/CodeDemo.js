// @flow
import * as React from "react";
import Highlight from "react-highlight";

export default function CodeDemo({ code }: { code: string }) {
  return (
    <pre>
      <code>
        <Highlight className="javascript">{`${code}`}</Highlight>
      </code>
    </pre>
  );
}
