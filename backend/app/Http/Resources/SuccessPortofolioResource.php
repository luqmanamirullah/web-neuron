<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SuccessPortofolioResource extends JsonResource
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
            'technologies' => $this->technologies->map(function ($technology) {
                return [
                    'icon' => $technology->icon,
                ];
            }),
            'deliverables' => $this->deliverables->pluck('name')->toArray(),
        ];
    }
}
