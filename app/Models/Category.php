<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id')
            ->whereNull('parent_id');
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function getAllMainCategories()
    {
        return $this->whereNull('parent_id')->get();
    }

    public function getAllSubCategories()
    {
        return $this->whereNotNull('parent_id')->get();
    }
}
