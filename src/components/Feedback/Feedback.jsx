
import { FeedbackTitle, FeedbackBtn} from "./Feedback.styled";


export const Feedback = ({handleClickGood, handleClickNeutral, handleClickBad}) => (
 <>
    <FeedbackTitle> Please leave feedback </FeedbackTitle>
    <FeedbackBtn type="button" onClick={handleClickGood}> Good </FeedbackBtn>
    <FeedbackBtn type="button" onClick={handleClickNeutral}> Neutral </FeedbackBtn>
    <FeedbackBtn type="button" onClick={handleClickBad}> Bad </FeedbackBtn>
    </>
    )


