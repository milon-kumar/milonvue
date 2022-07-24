<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogResource extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'image'     =>['nullable','image','mimes:jpeg,png,jpg'],
            'title'     =>['required','min:5'],
            'body'      =>['required','max:10000'],
            'category'  =>['required','min:1','max:32'],
            'tags'       =>['required','min:1','max:32'],
        ];
    }
}
