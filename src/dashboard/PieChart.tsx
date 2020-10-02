import { PieDatum, ResponsivePie } from '@nivo/pie';
import React from 'react';
import { theme } from 'src/app/theme';

interface IProps {
  /** whether to get custom colors from data or use default palette */
  customColor?: boolean;
  data: PieDatum[];
}
const textColor = theme.global.colors.text.light;

export const PieChart = ({ customColor, data }: IProps) => (
  <ResponsivePie
    animate
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    borderWidth={1}
    colors={customColor ? (d) => d.color as string : { scheme: 'nivo' }}
    data={data}
    enableRadialLabels={false}
    margin={{ bottom: 38 }}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor={textColor}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: theme.global.colors.focus,
            },
          },
        ],
        itemHeight: 18,
        itemTextColor: theme.global.colors.text.dark,
        itemWidth: 120,
        symbolShape: 'circle',
        symbolSize: 18,
        translateY: 38,
      },
    ]}
    theme={{
      tooltip: {
        container: {
          color: textColor,
          fontSize: 11,
        },
      },
    }}
  />
);
