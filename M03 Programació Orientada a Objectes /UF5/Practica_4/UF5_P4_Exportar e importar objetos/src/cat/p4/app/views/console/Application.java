/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.p4.app.views.console;

import cat.p4.app.model.businesslayer.entities.alumne;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

import java.util.ArrayList;


/**
 *
 * @author Arnold
 */
public class Application {
    
    public static void main(String[] args) {
        
        ArrayList<Integer> telefonos = new ArrayList<>();
        
        telefonos.add(938120318);
        telefonos.add(968120312);
        telefonos.add(934112519);

 
        
        alumne prueba_1 = new alumne("Jose", "Domingo", "Herrera", "X4812292X", telefonos);
             

        File fichero = new File("Exportar_datos_objeto.txt");
        
        if(!fichero.exists()){
        
               try (ObjectOutputStream Creando_Fichero = 
	new ObjectOutputStream(new FileOutputStream("Exportar_datos_objeto.txt"))) {

			Creando_Fichero.writeObject(prueba_1);
			System.out.println("Se creo el fichero correctamente");

		} catch (Exception ex) {
			ex.printStackTrace();
		}
            
        }

        
        try (ObjectInputStream Leendo_Fichero = 
	new ObjectInputStream(new FileInputStream("Exportar_datos_objeto.txt"))) {

            
			System.out.println(Leendo_Fichero.readObject());
			System.out.println("Se leyo el fichero correctamente");

		} catch (Exception ex) {
			ex.printStackTrace();
		}
        
        
        
        
    }
    
}
