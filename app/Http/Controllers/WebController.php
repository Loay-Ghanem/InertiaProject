<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Inertia\Inertia;
use App\Models\Category;

class WebController extends Controller
{

    public function home()
    {
        $mainCategories = Category::getAllMainCategories();

        return Inertia::render('Home', [
            'mainCategories' => $mainCategories
        ]);
    }
    public function about()
    {
        return inertia('AboutUs');
    }

    public function contact()
    {
        return inertia('Contact');
    }

    public function mainCategory(string $mainCategoryId)
    {
        $category = Category::query()
            ->with('children')
            ->whereNull('parent_id')
            ->findOrFail($mainCategoryId);
        
        return inertia('Category/MainCategory', [
            'category' => $category
        ]);
    }

    public function subCategory(string $subCategoryId)
    {
        $category = Category::query()
            ->with('items')
            ->whereNotNull('parent_id')
            ->findOrFail($subCategoryId);
        
        return inertia('Category/subCategory', [
            'category' => $category
        ]);
    }

    public function item(string $item_id)
    {
        $item = Item::findOrFail($item_id);
        
        return inertia('Items/item', [
            'item' => $item ?? null
        ]);
    }
}
