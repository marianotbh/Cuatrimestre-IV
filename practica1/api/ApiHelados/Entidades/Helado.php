<?php
include_once("DB/AccesoDatos.php");

class Helado
{
    public $id;
    public $sabor;
    public $tipo;
    public $cantidad;
    public $foto;

    public function MostrarDatos()
    {
        return $this->sabor . " - " . $this->tipo . " - " . $this->cantidad . " - " . $this->foto;
    }

    public static function ConsultarTodos()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

        $consulta = $objetoAccesoDato->RetornarConsulta("SELECT * FROM helados");

        $consulta->execute();

        return $consulta->fetchAll(PDO::FETCH_CLASS, "Helado");
    }

    public static function Consultar($id)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta = $objetoAccesoDato->RetornarConsulta("SELECT * FROM helados where sabor = :id");
        $consulta->execute(array(":id" => $id));
        return $consulta->fetchAll(PDO::FETCH_CLASS, "Helado");
    }

    public static function Insertar($sabor, $tipo, $cantidad, $foto)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

        $consulta = $objetoAccesoDato->RetornarConsulta("INSERT INTO helados (sabor, tipo, cantidad, foto)"
            . "VALUES(:sabor, :tipo, :cantidad, :foto)");

        $consulta->bindValue(':sabor', $sabor, PDO::PARAM_STR);
        $consulta->bindValue(':tipo', $tipo, PDO::PARAM_STR);
        $consulta->bindValue(':cantidad', $cantidad, PDO::PARAM_STR);
        $consulta->bindValue(':foto', $foto, PDO::PARAM_INT);

        $consulta->execute();
    }

    public static function Modificar($id, $foto, $sabor, $tipo, $cantidad)
    {

        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

        $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE helados SET foto = :foto, sabor = :sabor, 
                                                        tipo = :tipo, cantidad = :cantidad WHERE id = :id");

        $consulta->bindValue(':id', $id, PDO::PARAM_INT);
        $consulta->bindValue(':foto', $foto, PDO::PARAM_STR);
        $consulta->bindValue(':tipo', $tipo, PDO::PARAM_STR);
        $consulta->bindValue(':cantidad', $cantidad, PDO::PARAM_INT);
        $consulta->bindValue(':sabor', $sabor, PDO::PARAM_STR);

        return $consulta->execute();
    }

    public static function Eliminar($id)
    {

        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

        $consulta = $objetoAccesoDato->RetornarConsulta("DELETE FROM helados WHERE id = :id");
        $consulta->bindValue(':id', $id, PDO::PARAM_INT);
        $consulta->execute();
        return $consulta->rowCount();
    }

}