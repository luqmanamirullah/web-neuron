export interface About {
  data: {
    hero_title: string;
    hero_desc: string;
    hero_image: string;
    activity_image: string;
    vision_title: string;
    vision_subtitle: string;
    vision_desc: string;
    vision_image: string;
    mission_image: string;
    mission_title: string;
    mission_subtitle: string;
    mission_desc: string;
    mission_lists: [string];
    value_title: string;
    value_subtitle: string;
    value_lists: { id: number; title: string; desc: string }[];
    director_title: string;
    director_subtitle: string;
    director_lists: {
      id: number;
      image: string;
      name: string;
      position: string;
      link: string;
    }[];
    strategic_title: string;
    strategic_subtitle: string;
    management_strategies: {
      id: number;
      title: string;
      management_strategy_lists: { id: number; title: string; desc: string }[];
    }[];
  };
}
