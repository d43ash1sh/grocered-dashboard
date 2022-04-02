
/*
  position
  first - no avatar and name
  middle - no avatar and name
  last - will display avatar and name
*/
const ChatBubble = ({
    message,
    className = "first"
}) => {

    return (
        <div className={`each-mgs flex aife mt25 ${className}`}>
            <div className="mgs-block">
                <div className="bubble  pr">
                    <div className="text">
                        {message.text}
                    </div>
                    {/* <div className="minfo flex aic mt25 f08">
                        <Status status={message.status} />
                    <div className="ml25">{message.time}</div>
                </div> */}
                </div>
            </div>
        </div >
    );
};

export default ChatBubble;