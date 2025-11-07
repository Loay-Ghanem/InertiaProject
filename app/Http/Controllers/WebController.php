<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Settings\ProfileUpdateRequest;

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

        $relatedItems = Item::query()
            ->where('category_id', '=', $item->category_id)
            ->where('id', '<>', $item->id)
            ->limit(4)
            ->get();

        return inertia('Items/item', [
            'item' => $item,
            'relatedItems' => $relatedItems
        ]);
    }

    public function profile()
    {
        return inertia('profile');
    }

    public function updateProfile(ProfileUpdateRequest $request)
    {
        if (!empty($request->phone)) {
            $phone = nationalFormat($request->phone);
            $request->merge(['phone' => $phone]);
        }
        
        $user = Auth::user();

        if ($request->hasFile('image')) {
            $image = $request->image->store(fileDirectoryStructure('user/img'), 'public');
        } else {
            $image = $user->image ?? null;
        }

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'image' => $image ?? $user->image,
        ]);
        
        return redirect()->route('profile')->with('success', 'profile updated successfully');
    }
}
