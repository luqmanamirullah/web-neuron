<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
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
            'name' => $this->name,
            'desc' => $this->desc,
            'image' => $this->image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'technologies' => $this->technologies->map(function ($technology) {
                return [
                    'name' => $technology->name,
                    'icon' => $technology->icon,
                ];
            }),
            'serviceKeys' => $this->serviceKeys->pluck('name')->toArray(),
        ];
    }
}
