<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DemoMail extends Mailable
{
    use Queueable, SerializesModels;

    public $vehicule;
    public $user;

    public function __construct($vehicule, $user)
    {
        $this->vehicule = $vehicule;
        $this->user = $user;
    }

    public function build()
    {
        return $this->subject("Quelqu'un veut contacter le véhicule {$this->vehicule->model}")
                    ->markdown('emails.demo');
    }
}
