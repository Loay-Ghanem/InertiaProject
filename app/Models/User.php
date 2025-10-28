<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Filament\Forms\Components\Radio;
use Illuminate\Support\Facades\Hash;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Illuminate\Notifications\Notifiable;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\ToggleColumn;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
        ];
    }

    public static function getUserFormSchema($extraAttr = []): array
    {
        $extraAttr[] =
            Radio::make('is_active')
                ->label('Is This Active User?')
                ->boolean();

        $schema = [
            TextInput::make('name')
                ->label('Name')
                ->required()
                ->maxLength(255),
            TextInput::make('email')
                ->label('Email')
                ->email()
                ->required()
                ->unique(ignoreRecord: true),
            TextInput::make('password')
                ->password()
                ->dehydrateStateUsing(fn($state) => Hash::make($state))
                ->dehydrated(fn($state) => filled($state))
                ->required(fn(string $context): bool => $context === 'create'),
            TextInput::make('phone')
                ->label('Phone Number')
                ->required()
                ->maxLength(13),
        ];

        $attrs = array_merge($schema, $extraAttr);

        return $attrs;
    }

    public static function tableSchema($extraAttr = [])
    {
        $extraAttr [] =
            ToggleColumn::make('is_active')
                ->onColor('success')
                ->offColor('danger');

        $schema = [
            TextColumn::make('name')
                ->label('Name'),
            TextColumn::make('email')
                ->label('Email')
                ->copyable()
                ->copyMessage("Email Copied")
                ->copyMessageDuration(1000),
            TextColumn::make('phone')
                ->label('Phone Number')
                ->copyable()
                ->copyMessage("Phone number Copied")
                ->copyMessageDuration(1000),
        ];

        $attrs = array_merge($schema, $extraAttr);
        return $attrs;
    }
}
