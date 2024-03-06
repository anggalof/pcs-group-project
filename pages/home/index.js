import React, { useState, useEffect } from "react";
import pcsData from "../../data/pcs.json";
import { Member } from "../../components/sections/Member";
import { Activity } from "../../components/sections/Activity";
import { News } from "../../components/sections/News";
import { Online } from "../../components/sections/Online";

const App = () => {
  const [memberSection, setMemberSection] = useState({});
  const [activitySection, setActivitySection] = useState({});
  const [newsSection, setNewsSection] = useState([]);
  const [onlineSection, setOnlineSection] = useState([]);

  useEffect(() => {
    setMemberSection(pcsData.data.member);
    setActivitySection(pcsData.data.activity);
    setNewsSection(pcsData.data.news);
    setOnlineSection(pcsData.data.online);
  }, []);

  return (
    <React.Fragment>
      <Member data={memberSection || {}} />
      <Activity data={activitySection} />
      <News data={newsSection} />
      <Online data={onlineSection} />
    </React.Fragment>
  );
};

export default App;
