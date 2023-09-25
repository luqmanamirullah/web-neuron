<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HomeResource extends JsonResource
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
            'hero_title1' => $this->hero_title1,
            'hero_title2' => $this->hero_title2,
            'hero_title3' => $this->hero_title3,
            'hero_desc' => $this->hero_desc,
            'hero-link' => $this->{'hero-link'},
            'about_project' => $this->about_project,
            'about_experience' => $this->about_experience,
            'about_desc' => $this->about_desc,
            'about_title' => $this->about_title,
            'about_link' => $this->{'about_link'},
            'about_ilustration' => $this->about_ilustration,
            'title_service' => $this->title_service,
            'title_project' => $this->title_project,
            'title_product' => $this->title_product,
            'title_partner' => $this->title_partner,
            'title_articles' => $this->title_articles,
            'title_certificate' => $this->title_certificate,
            'neuron_program' => [
                'id' => $this->neuron_program_id,
                'title' => optional($this->neuronProgram)->title,
                'desc' => optional($this->neuronProgram)->desc,
                'image' => optional($this->neuronProgram)->image,
            ],
            'hero_title_lists' => $this->heroTitleLists->map(function ($titleList) {
                return [
                    'id' => $titleList->id,
                    'title' => $titleList->title,
                ];
            }),
            'testimonials' => $this->testimonials->map(function ($testimonial) {
                return [
                    'id' => $testimonial->id,
                    'desc' => $testimonial->desc,
                    'name' => $testimonial->name,
                    'star' => $testimonial->star,
                    'job' => $testimonial->job,
                    'image' => $testimonial->image,
                ];
            }),
            'certificates' => $this->certificates->map(function ($certificate) {
                return [
                    'id' => $certificate->id,
                    'image' => $certificate->image,
                ];
            }),
            'partners' => $this->partners->map(function ($partner) {
                return [
                    'id' => $partner->id,
                    'image' => $partner->image,
                ];
            }),
        ];
    }
}
