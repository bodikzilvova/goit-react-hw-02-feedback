
import { StatisticsGood, StatisticsNeutral, StatisticsBad, StatisticsTotal, StatisticsPercentage} from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  
  return (
    <>
      <StatisticsGood> Good: {good} </StatisticsGood>
      <StatisticsNeutral> Neutral: {neutral} </StatisticsNeutral>
      <StatisticsBad> Bad: {bad} </StatisticsBad>
      <StatisticsTotal>Total: {total}</StatisticsTotal>
      <StatisticsPercentage>Positive feedback: {positivePercentage}%</StatisticsPercentage>
    </>
  );
};


      