<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegistrationConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public $plainPassword;
    public $userDetails;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($plainPassword, $userDetails)
    {
        $this->plainPassword = $plainPassword;
        $this->userDetails = $userDetails;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Registration Confirmation',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.registration_confirmation',
        );
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.registration_confirmation')
            ->subject('Registration Confirmation')
            ->with([
                'secretKey' => $this->plainPassword,
        ]);
    }
}
