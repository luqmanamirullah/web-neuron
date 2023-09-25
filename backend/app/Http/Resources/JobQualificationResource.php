<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class JobQualificationResource extends JsonResource
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
            'gender' => $this->gender,
            'domicile' => $this->domicile,
            'education' => $this->education,
            'major' => $this->major,
            'other' => $this->other,
        ];
    }
}
