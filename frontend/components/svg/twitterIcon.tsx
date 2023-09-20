'use client';
import {
  SvgIcon as MuiSvgIcon,
  styled,
  type SvgIconProps,
} from '@mui/material';
const SvgIcon = styled(MuiSvgIcon, {
  name: 'TwitterIcon',
  shouldForwardProp: (prop) => prop !== 'fill',
})<SvgIconProps>(() => ({
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '0.5px',
}));

const TwitterIcon: React.FC<SvgIconProps> = ({
  fill = 'none',
  stroke = 'currentColor',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  strokeWidth = '0.5px',
  ...props
}) => {
  return (
    <SvgIcon
      fill={fill}
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeWidth={strokeWidth}
      {...props}
    >
      <path
        d="M0.5 3.25195C0.5 1.5951 1.84315 0.251953 3.5 0.251953H19.5C21.1569 0.251953 22.5 1.5951 22.5 3.25195V19.252C22.5 20.9088 21.1569 22.252 19.5 22.252H3.5C1.84315 22.252 0.5 20.9088 0.5 19.252V3.25195Z"
        fill="white"
      />
      <path
        d="M16.6747 3.25195H19.4361L13.4048 10.1437L20.5 19.5231H14.9459L10.5926 13.836L5.61734 19.5231H2.85202L9.30182 12.1503L2.5 3.25195H8.19491L12.1258 8.45013L16.6747 3.25195ZM15.7047 17.8726H17.234L7.3618 4.81649H5.71904L15.7047 17.8726Z"
        fill="black"
      />
    </SvgIcon>
  );
};

export default TwitterIcon;
