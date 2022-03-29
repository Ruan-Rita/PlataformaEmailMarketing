<?php

namespace Database\Seeders;

use App\Models\EmailLog;
use Illuminate\Database\Seeder;

class EmailLogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        EmailLog::create(['description' => 'Avançando as Vendas', 'client_id' => 1, 'user_id' => 1, 'template' => 'Padrão']);
    }
}
