/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.geoapp.views.console;

import cat.iesjoaquimmir.geoapp.model.businesslayer.entities.Alumne;


/**
 *
 * @author soraccari
 */
public class Driver {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
      
        Alumne alumno_1 = new Alumne();
        
        System.out.println(alumno_1.Saludo());
        
        Alumne alumno_2 = new Alumne("Arnold");
        
        System.out.println(alumno_2.Saludo());
        
        Alumne alumne_3 = new Alumne("Arnold", "X4899912X");
        
        System.out.println(alumne_3.Saludo());
        
        Alumne alumne_4 = new Alumne("X4899912X", 20);
        
        System.out.println(alumne_4.Saludo());
        
        Alumne alumne_5 = new Alumne(20, "Arnold");
        
        System.out.println(alumne_5.Saludo());
        
        Alumne alumne_6 = new Alumne("Arnold", "X4899912X", 20);
        
        System.out.println(alumne_6.Saludo());
                
        
        
        
    }
    
}
