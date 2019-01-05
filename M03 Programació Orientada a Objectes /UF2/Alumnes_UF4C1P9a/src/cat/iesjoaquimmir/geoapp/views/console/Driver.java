/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.geoapp.views.console;

import cat.iesjoaquimmir.geoapp.model.businesslayer.entities.Alumne;
import cat.iesjoaquimmir.geoapp.model.businesslayer.entities.Domicili;
import cat.iesjoaquimmir.geoapp.model.businesslayer.entities.Modulos;
import java.util.ArrayList;

/**
 *
 * @author soraccari
 */
public class Driver {
 
    public static void main(String[] args) {

        

// UF4C1P9a

        System.out.println("Aqui comienza la practica UF4C1P9a");

   Domicili domicili = new Domicili("Industria", "188", "2n 1a",
   "08800", "Badalona", "Barcelona");
   
   Alumne alumne = new Alumne("Pedro", "García", "Ramírez",
   "55655678J", 21, domicili);
   
   //mostra el format cognom1 cognom2, nom
   System.out.println(alumne.Nombre_completo());

 
   
//Industria 188, 2o 1a, 08025, Badalona (Barcelona)
System.out.println(domicili.direccion_amigable());
//Pinta el mateix que la linia anterior
System.out.println(alumne.getDomicili().direccion_amigable());


 System.out.println("\n\n\nAqui termina la practica UF4C1P9a\n\n\n");

 
 System.out.println("\n\n\nAqui comienza la practica UF4C1P9b\n\n\n");

 
        ArrayList<String> telefono = new ArrayList<>();
        
        ArrayList<Modulos> moduls = new ArrayList<>();
        
        telefono.add("938140526");
        telefono.add("938140523");
        telefono.add("938140522");
        
        moduls.add(new Modulos("M01", "Matematicas", 259));
        moduls.add(new Modulos("M01", "Biologia", 242));
        moduls.add(new Modulos("M01", "Ingles", 123));
        moduls.add(new Modulos("M01", "Sociales", 323));
        
        Alumne alumno_prueba = new Alumne("Arnold", "Ccari", "Villalta", "X4711192X",19, domicili, telefono, moduls);

        


      

        
        alumno_prueba.informacion_modulos_y_telefono_alumno();

        
    
 System.out.println("Aqui termina la practica UF4C1P9b");

    
}

}
