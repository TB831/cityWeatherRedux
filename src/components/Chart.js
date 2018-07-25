import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars} from 'react-sparklines';

const averageTemps = (data) => {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={100} width={200} data={props.data} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{averageTemps(props.data)/} {props.units}</div>
    </div>
  );
}
