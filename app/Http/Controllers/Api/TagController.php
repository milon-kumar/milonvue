<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TagRequest;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TagController extends Controller
{
    public function index()
    {
        return TagResource::collection(Tag::all());
    }

    public function store(TagRequest $request)
    {
        $tag = Tag::create([
            'user_id'=>$request->input('user_id'),
            'title'=>$request->input('title'),
            'body'=>$request->input('body'),
            'image'=>$request->input('image'),
            'status'=>$request->input('status'),
        ]);
        return new TagResource($tag);

    }

    public function show($id)
    {
        return new TagResource(Tag::findOrFail($id));
    }

    public function update(TagRequest $request ,$id)
    {
        $tag = Tag::findOrFail($id);

         $tag->update([
           'title'  => $request->input('title'),
           'body'   => $request->input('body'),
           'status' => $request->input('status'),
        ]);

         return new  TagResource($tag);
    }
    public function destroy($id)
    {
        $tag = Tag::findOrFail($id);
        $tag->delete();
        return response()->noContent();
    }

}
