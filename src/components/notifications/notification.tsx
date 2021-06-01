import React from "react";
import {
  getInvitations,
  getLatestInvitations,
  Invite,
} from "../../services/notification.service";
import urlRegex from "url-regex";

import * as Styled from "./notification.styles";
const Notifications = (): React.ReactElement => {
  const loadAfter = 3; //in min;
  const [invites, setInvites] = React.useState<Invite[]>([]);
  const [pullLatest, setPullLatest] = React.useState<boolean>(false);

  React.useEffect(() => {
    getInvitations().then((data) => {
      setInvites(data);
      setPullLatest(true);
    });
  }, []);

  React.useEffect(() => {
    if (pullLatest) {
      setTimeout(() => {
        getLatestInvitations().then((data) => {
          setInvites([...data, ...invites]);
        });
      }, 1000 * loadAfter);
      setPullLatest(false);
    }
  }, [pullLatest, invites]);

  const parseTemplate = (template: string): string => {
    template = template.replace(urlRegex({ strict: true }), (url) => {
      return `<br /> <a href="${url}">${url}</a>`;
    });
    template = template.replaceAll("\\n", "<br />");
    return template;
  };
  return (
    <>
      <Styled.Title>Notifications</Styled.Title>
      <Styled.MessageList>
        {invites.map((notification, index) => (
          <Styled.Message key={index} status={notification.status}>
            <Styled.Sender>{notification.sender_id}</Styled.Sender>
            <Styled.Time>
              {new Date(notification.invite_time).toLocaleTimeString()}
            </Styled.Time>
            <Styled.Invite
              dangerouslySetInnerHTML={{
                __html: parseTemplate(notification.invite),
              }}
            />
          </Styled.Message>
        ))}
      </Styled.MessageList>
    </>
  );
};

export default Notifications;
