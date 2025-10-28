<?php

namespace App\Filament\Admin\Resources\Users\Customers;

use BackedEnum;
use App\Models\User;
use Filament\Tables\Table;
use Filament\Schemas\Schema;
use App\Models\Users\Customer;
use Filament\Resources\Resource;
use Filament\Support\Icons\Heroicon;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Admin\Resources\Users\Customers\Pages\EditCustomer;
use App\Filament\Admin\Resources\Users\Customers\Pages\ListCustomers;
use App\Filament\Admin\Resources\Users\Customers\Pages\CreateCustomer;
use App\Filament\Admin\Resources\Users\Customers\Schemas\CustomerForm;
use App\Filament\Admin\Resources\Users\Customers\Tables\CustomersTable;

class CustomerResource extends Resource
{
    protected static ?string $model = User::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::UserCircle;
    protected static ?string $recordTitleAttribute = 'Customers';
    protected static ?string $modelLabel = 'Customers';

    public static function getNavigationGroup(): ?string
    {
        return 'Users';
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('user_type', '=', 'customer');
    }

    public static function form(Schema $schema): Schema
    {
        return CustomerForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return CustomersTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListCustomers::route('/'),
            'create' => CreateCustomer::route('/create'),
            'edit' => EditCustomer::route('/{record}/edit'),
        ];
    }
}
