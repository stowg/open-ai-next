import ChatBot from "./chat-bot";

export default {
  title: "ChatBot",
  component: ChatBot,
};

export const NoResults = () =>
{ const messages = [ ];

  return ( <ChatBot messages={messages} /> );
}


export const SingleResult = () =>
{ const messages = [ { val: "test" }];

  return ( <ChatBot messages={messages} /> );
}


export const MultipleResults = () =>
{ const messages = [ { val: "test" }, { val: "test2"}];

  return ( <ChatBot messages={messages} /> );
}