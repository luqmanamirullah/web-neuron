<?php

namespace App\Http\Resources;

use App\Http\Resources\JobPlusValueResource;
use App\Http\Resources\JobQualificationResource;
use App\Http\Resources\SkillRequirementResource;
use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
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
            'id' => $this->id,
            'name_position' => $this->name_position,
            'location' => $this->location,
            'desc' => $this->desc,
            'responsibilities' => $this->responsibilities,
            'link' => $this->link,
            'qualification' => new JobQualificationResource($this->jobQualification),
            'plus_values' => $this->jobPlusValues->pluck('name')->toArray(),
            'skill_requirements' => $this->skillRequirements->pluck('name')->toArray(),
        ];
    }
}
