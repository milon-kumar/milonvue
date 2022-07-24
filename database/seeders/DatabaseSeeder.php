<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

         \App\Models\User::factory()->create([
             'name'     => 'Admin',
             'user_name'=>'admin91',
             'email'    => 'admin@admin.com',
             'password' =>Hash::make('admin@admin.com'),
         ]);

         Tag::create([
            'user_id'   =>1,
            'title'     =>'tagTitle',
            'body'      =>'This is a tag body',
            'image'     =>'',
            'status'    =>1,
         ]);
    }
}
