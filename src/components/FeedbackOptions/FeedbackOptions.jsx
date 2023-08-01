
import { FeedbackBtn } from "./FeedbackOptions.styled";


export const FeedbackOptions  = ({options, onLeaveFeedback}) => {
    return(
        <>
      {options.map(option => (
        <FeedbackBtn key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackBtn>
      ))}
    </>
  );
};
 
    


