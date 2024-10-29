<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class AuthController extends ResourceController
{
    public function login()
    {
        $json = $this->request->getJSON();
        $dni = $json->dni ?? '';
        $email = $json->email ?? '';
        $password = $json->password ?? '';

        // Aquí puedes validar las credenciales (esto es solo un ejemplo)
        if ($dni && $email && $password) {
            return $this->respond(['success' => true]);
        }

        return $this->respond(['success' => false, 'message' => 'Credenciales incorrectas.']);
    }
}
