<?php

namespace Database\Seeders;

use App\Models\User;
use App\Enums\UserType;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'phone' => '123-456-7890',
            'user_type' => UserType::ADMIN,
            'password' => bcrypt('password'),
        ]);

        User::create([
            'name' => 'Customer User',
            'email' => 'customer@customer.com',
            'phone' => '123-456-7891',
            'user_type' => UserType::CUSTOMER,
            'password' => bcrypt('password'),
        ]);

        User::create([
            'name' => 'Factory User',
            'email' => 'factory@factory.com',
            'phone' => '123-456-7892',
            'user_type' => UserType::FACTORY,
            'password' => bcrypt('password'),
        ]);
    }
}
