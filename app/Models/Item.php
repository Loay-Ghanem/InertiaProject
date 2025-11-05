<?php

namespace App\Models;

use App\Models\User;
use App\Enums\UserType;
use App\Models\Category;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $guarded = [];

    protected $casts = [
        'images' => 'array'
    ];

    public function factory()
    {
        return $this->belongsTo(User::class, 'factory_id')
            ->where('user_type', UserType::FACTORY->value);
    } 

    public function Category()
    {
        return $this->belongsTo(Category::class)
            ->whereNotNull('parent_id');
    }
}
