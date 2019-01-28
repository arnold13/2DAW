/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.institut.Exception;


/**
 *
 * @author Arnold
 * 
 * Aqui tenemos una excepcion que extiende de Exception, esta se requiere ser instanciada en 
 * en la misma funcion donde se ejecutara o en un try catch.
 * 
 */


// Esta excepc

public class Error_mayor_edad extends Exception {

    
    public Error_mayor_edad(){
        super();
    }
    
    public Error_mayor_edad(String message) {
        super(message);
    }
    
    
    @Override
    public String toString() {
        return "No se admiten mayores de 25";
    }
    

    
   
    
}
