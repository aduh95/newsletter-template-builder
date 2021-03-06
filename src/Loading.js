import { h } from "preact";
import { memo } from "preact/compat";

export default memo(function Loading() {
  console.log("render");
  return (
    <div data-ignore data-do-not-export className="loading">
      Loading...
    </div>
  );
});
