<?php

namespace App\Filament\Admin\Resources\Users\Factories;

use BackedEnum;
use App\Models\User;
use Filament\Tables\Table;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Support\Icons\Heroicon;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Admin\Resources\Users\Factories\Pages\EditFactory;
use App\Filament\Admin\Resources\Users\Factories\Pages\CreateFactory;
use App\Filament\Admin\Resources\Users\Factories\Pages\ListFactories;
use App\Filament\Admin\Resources\Users\Factories\Schemas\FactoryForm;
use App\Filament\Admin\Resources\Users\Factories\Tables\FactoriesTable;
use App\Filament\Admin\Resources\Users\Factories\RelationManagers\ItemsRelationManager;

class FactoryResource extends Resource
{
    protected static ?string $model = User::class;
    protected static string|BackedEnum|null $navigationIcon = Heroicon::UserCircle;
    protected static ?string $recordTitleAttribute = 'Factories';
    protected static ?string $modelLabel = 'Factories';

    public static function getNavigationGroup(): ?string
    {
        return 'Users';
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('user_type', '=', 'factory');
    }
    public static function form(Schema $schema): Schema
    {
        return FactoryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return FactoriesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            ItemsRelationManager::class
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListFactories::route('/'),
            'create' => CreateFactory::route('/create'),
            'edit' => EditFactory::route('/{record}/edit'),
        ];
    }
}
