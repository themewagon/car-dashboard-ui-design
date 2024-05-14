import { Paper, Typography, Stack } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { getDoughnutChartOption } from 'helpers/getDoughnutChartOption';
import { useState } from 'react';
import { Factor } from 'types';

const SingleFactor = ({ factor }: { factor: Factor }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // const theme = useTheme();
  // const { id, icon: Icon, iconBackground, color, title, chartOption } = factor;
  const { icon: Icon, iconBackground, color, title, chartOption } = factor;

  return (
    <Paper
      // sx={[
      //   id === 1 && { bgcolor: theme.palette.secondary.main, color: 'grey.100' },
      //   { height: 266 },
      //   // { width: { lg: 'auto' } },
      // ]}
      sx={(theme) => ({
        ':hover': {
          bgcolor: theme.palette.secondary.main,
          color: 'grey.100',
          cursor: 'pointer',
          '& .iconWrapper': {
            bgcolor: theme.palette.secondary.light,
          },
        },

        height: 266,
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack
        alignItems="center"
        justifyContent="space-between"
        sx={(theme) => ({ py: theme.spacing(2.5), height: 1 })}
      >
        <Stack alignItems="center" rowGap={1.25}>
          <Stack
            justifyContent="center"
            alignItems="center"
            className="iconWrapper"
            sx={{
              height: 38,
              width: 38,
              backgroundColor: iconBackground,
              borderRadius: '50%',
            }}
          >
            <Icon htmlColor={isHovered ? 'grey.100' : color} />
          </Stack>

          <Typography variant="h1" component="h2">
            {title}
          </Typography>
        </Stack>

        <ReactECharts
          option={getDoughnutChartOption(chartOption, color, isHovered)}
          // option={chartOption}
          lazyUpdate={true}
          opts={{ renderer: 'svg' }}
          style={{ height: 112, width: 112 }}
          // style={{ width: '100%' }}
        />
      </Stack>
    </Paper>
  );
};

export default SingleFactor;