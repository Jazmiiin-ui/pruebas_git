<?php

namespace App\Controllers;
use CodeIgniter\HTTP\ResponseInterface;

class LoginController extends BaseController
{
    public function index()
    {
        $data = json_decode($this->request->getBody(), true);

        if ($data['dni'] === 'correct_dni' && $data['email'] === 'correct_email' && $data['password'] === 'correct_password') {
            return $this->response->setJSON(['success' => true, 'message' => 'Login exitoso']);
        }

        return $this->response->setStatusCode(ResponseInterface::HTTP_UNAUTHORIZED)
                              ->setJSON(['success' => false, 'message' => 'Credenciales incorrectas']);
    }
}
