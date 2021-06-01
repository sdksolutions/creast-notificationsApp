import styled, { css } from "styled-components";

export const Title = styled.h2``;

export const MessageList = styled.div`
  diplay: flex;
  flex-direction: column;
  border: 1px solid black;
`;

interface MessageProps {
  status: string;
}

export const Message = styled.div<MessageProps>`
  display: block;
  font-size: 16px;
  padding: 5px;
  border: 1px solid black;
  ${(props) =>
    props.status === "unread" &&
    css`
      font-weight: bold;
    `}
`;

export const Sender = styled.div`
  display: inline-flex;
  width: 60%;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Invite = styled.div`
  display: inline-flex;
  font-size: 16px;
  width: 100%;
  a {
    display: contents;
  }
`;

export const Time = styled.div`
  display: inline-flex;
  font-size: 16px;
  text-align: right;
  width: 40%;
`;
