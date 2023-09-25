interface Props {
  strategyData: any;
  active: number;
}

const StrategicPlanList: React.FC<Props> = ({
  strategyData,
  active,
}: Props) => {
  return (
    <div
      className={`overflow-hidden grid md:grid-cols-4 xs:grid-cols-1 md:gap-8 xs:gap-4 text-sys-dark-onSurface duration-[600ms] transition-all ${
        active === strategyData.id
          ? 'mt-6 md:mb-4 xs:mb-2'
          : 'h-0 opacity-0 -translate-y-4'
      }`}
    >
      {strategyData.management_strategy_lists.map(
        (item: any, index: number) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="md:text-desktop-title xs:text-mobile-title font-bold">
                {item.title}
              </h2>
              <p className="md:text-desktop-body-small xs:text-mobile-label font-medium">
                {item.desc}
              </p>
            </div>
          );
        },
      )}
    </div>
  );
};

export default StrategicPlanList;
