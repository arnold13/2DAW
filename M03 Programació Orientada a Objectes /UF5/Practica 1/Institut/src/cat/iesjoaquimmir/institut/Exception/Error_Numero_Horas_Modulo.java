package cat.iesjoaquimmir.institut.Exception;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/**
 *
 * @author Arnold
 * 
 * Aqui tenemos un exception que extiende de RuntimeException,la diferencia de su hermano Exception
 * es que esta se no esta chequeada, por lo que no hace falta instanciar un try  o especificar
 * que "x metodo lanza la excepcion.
 *
 * 
 */


public class Error_Numero_Horas_Modulo extends RuntimeException{

    
    public Error_Numero_Horas_Modulo() {
        super();
    }
    
    public Error_Numero_Horas_Modulo(String message){
        super(message);
        
    }

    @Override
    public String toString() {
        return super.toString(); //To change body of generated methods, choose Tools | Templates.
    }
    
    
    /**
     * 
     * @return Devuelve un toString por defecto, ese al extender de exception, cuando llamamemos
     * mas tarde con un try y usemos funciones como getmessage, mostrara este mensaje.
     */
    
   
           
    
    
    
    
}
