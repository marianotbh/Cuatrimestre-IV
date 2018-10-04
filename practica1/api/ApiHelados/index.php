<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';
include_once './API/HeladoAPI.php';

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true
    ]
]);

$app->group('/helado', function()
{
    $this->get('[/]', \HeladoApi::class . ':TraerTodos');
    $this->get('/{id}[/]', \HeladoApi::class . ':TraerUno');
    $this->post('[/]', \HeladoApi::class . ':CargarUno');
    $this->put('/{param}[/]', \HeladoApi::class . ':ModificarUno');
    $this->delete('/{id}[/]', \HeladoApi::class . ':BorrarUno');    
});

$app->run();