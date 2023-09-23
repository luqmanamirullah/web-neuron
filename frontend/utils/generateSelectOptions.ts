import { type Option } from '@/components/select';

function generateSelectOptions(data: Array<string | number>): Option[] {
  return data.map((item) => {
    return {
      label: item.toString(),
      value: item,
    };
  });
}

export default generateSelectOptions;
