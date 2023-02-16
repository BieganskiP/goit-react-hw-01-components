import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
// import transactions from "./transactions.json";

import { Profile } from "./task-01/task-01";
import { Statistics } from "./task-02/task-02";
import { FriendList } from "./task-03/task-03";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} isOnline={friends.isOnline} />
  </React.StrictMode>
);
