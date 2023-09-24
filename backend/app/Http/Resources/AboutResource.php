<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AboutResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'hero_title' => $this->hero_title,
            'hero_desc' => $this->hero_desc,
            'hero_image' => $this->hero_image,
            'activity_image' => $this->activity_image,
            'vision_title' => $this->vision_title,
            'vision_subtitle' => $this->vision_subtitle,
            'vision_desc' => $this->vision_desc,
            'vision_image' => $this->vision_image,
            'mission_image' => $this->mission_image,
            'mission_title' => $this->mission_title,
            'mission_subtitle' => $this->mission_subtitle,
            'mission_desc' => $this->mission_desc,
            'mission_lists' => $this->missionLists->pluck('name')->toArray(),
            'value_title' => $this->value_title,
            'value_subtitle' => $this->value_subtitle,
            'value_lists' => $this->valueLists->map(function ($valueList) {
                return [
                    'id' => $valueList->id,
                    'title' => $valueList->title,
                    'desc' => $valueList->desc,
                ];
            }),
            'director_title' => $this->director_title,
            'director_subtitle' => $this->director_subtitle,
            'director_lists' => $this->directorLists->map(function ($directorList) {
                return [
                    'id' => $directorList->id,
                    'image' => $directorList->image,
                    'name' => $directorList->name,
                    'position' => $directorList->position,
                    'link' => $directorList->link,
                ];
            }),
            'strategic_title' => $this->strategic_title,
            'strategic_subtitle' => $this->strategic_subtitle,
            'management_strategies' => $this->managementStrategies->map(function ($managementStrategy) {
                return [
                    'id' => $managementStrategy->id,
                    'title' => $managementStrategy->title,
                    'management_strategy_lists' => $managementStrategy->managementStrategyLists->map(function ($managementStrategyList) {
                        return [
                            'id' => $managementStrategyList->id,
                            'title' => $managementStrategyList->title,
                            'desc' => $managementStrategyList->desc,
                        ];
                    }),
                ];
            }),
        ];
    }
}
