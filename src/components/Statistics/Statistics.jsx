
import { StatisticsTitle, StatisticsGood, StatisticsNeutral, StatisticsBad } from "./Statistics.styled";


export const Statistics = ({ state }) => (
    <>
      <StatisticsTitle> Statistics </StatisticsTitle>
      <StatisticsGood> Good: {state.good} </StatisticsGood>
      <StatisticsNeutral> Neutral: {state.neutral} </StatisticsNeutral>
      <StatisticsBad> Bad: {state.bad} </StatisticsBad>
    </>
  );
    