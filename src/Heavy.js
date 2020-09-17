import React from "react";
import _ from "lodash";
import moment from "moment";

export default function Heavy() {
  const now = moment().format("YYYY-MM-DD");
  const textArray = ["The", "date", "is"];
  const text = _.join(textArray, "");

  return (
    <div>
      {text} - {now}
    </div>
  );
}
