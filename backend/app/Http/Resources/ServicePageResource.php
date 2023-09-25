<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServicePageResource extends JsonResource
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
            'hero' => [

                'hero_title' => $this->hero_title,
                'hero_desc' => $this->hero_desc,
            ],
            'service' => [
                'service_title' => $this->service_title,
                'service_subtitle' => $this->service_subtitle,
            ],
            'technology' => [
                'technology_title' => $this->technology_title,
                'technology_desc' => $this->technology_desc,
            ],
            'methodology' => [
                'methodology_title' => $this->methodology_title,
                'methodology_subtitle' => $this->methodology_subtitle,
            ]
        ];
    }
}