<?php

namespace App\Filament\Admin\Resources\SubCategories;

use BackedEnum;
use App\Models\Category;
use Filament\Tables\Table;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Support\Icons\Heroicon;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Admin\Resources\SubCategories\Pages\EditSubCategory;
use App\Filament\Admin\Resources\SubCategories\Pages\CreateSubCategory;
use App\Filament\Admin\Resources\SubCategories\Pages\ListSubCategories;
use App\Filament\Admin\Resources\SubCategories\Schemas\SubCategoryForm;
use App\Filament\Admin\Resources\SubCategories\Tables\SubCategoriesTable;

class SubCategoryResource extends Resource
{
    protected static ?string $model = Category::class;
    protected static string|BackedEnum|null $navigationIcon = Heroicon::FolderOpen;
    protected static ?string $recordTitleAttribute = 'Sub Category';
    protected static ?string $modelLabel = 'Sub Category';

    public static function getNavigationGroup(): ?string
    {
        return 'Categories';
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->whereNotNull('parent_id');
    }

    public static function form(Schema $schema): Schema
    {
        return SubCategoryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return SubCategoriesTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListSubCategories::route('/'),
            'create' => CreateSubCategory::route('/create'),
            'edit' => EditSubCategory::route('/{record}/edit'),
        ];
    }
}
