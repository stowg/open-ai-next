export default function ChatBot({ messages}) {
  console.log(messages);
  return (
   <>    <input type="text" />
    <button>Send</button> 
          
          {
             messages.map((msg)=> (
              <li>{msg.val}</li>
            ))

          }
   </>

  );
}