<?php

namespace App\Filament\Admin\Resources\Users\Admins;

use BackedEnum;
use App\Models\User;
use Filament\Tables\Table;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Support\Icons\Heroicon;
use App\Filament\Admin\Resources\Users\Admins\Pages\EditAdmin;
use App\Filament\Admin\Resources\Users\Admins\Pages\ListAdmins;
use App\Filament\Admin\Resources\Users\Admins\Pages\CreateAdmin;
use App\Filament\Admin\Resources\Users\Admins\Schemas\AdminForm;
use App\Filament\Admin\Resources\Users\Admins\Tables\AdminsTable;
use Illuminate\Database\Eloquent\Builder;

class AdminResource extends Resource
{
    protected static ?string $model = User::class;
    protected static string|BackedEnum|null $navigationIcon = Heroicon::UserCircle;
    protected static ?string $recordTitleAttribute = 'Admins';
    protected static ?string $modelLabel = 'Admins';

    public static function getNavigationGroup(): ?string
    {
        return 'Users';
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('user_type', '=', 'admin');
    }

    public static function form(Schema $schema): Schema
    {
        return AdminForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return AdminsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListAdmins::route('/'),
            'create' => CreateAdmin::route('/create'),
            'edit' => EditAdmin::route('/{record}/edit'),
        ];
    }
}
