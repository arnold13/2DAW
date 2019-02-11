/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.p3.app.views.console;

import cat.p3.app.model.businesslayer.entities.alumne;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;


/**
 *
 * @author Arnold
 */
public class Application {
    
    public static void main(String[] args) throws UnsupportedEncodingException, IOException {
        
        alumne alumne_1 = new alumne("Jose", "Ramirez", "Urpi", "X4129412X");
        
        
        
        
        File fichero = new File("Exportar_datos.txt");
        
        List<String> lines = Arrays.asList("Nombre :" + alumne_1.getNom(), 
                                           "Primer apellido :" + alumne_1.getPrimerCognom(), 
                                           "Segundo apellido :" + alumne_1.getSegonCognom(),
                                           "DNI :" + alumne_1.getDni());

        Path file = Paths.get("Exportar_datos.txt");
        
        
        
        if(!fichero.exists()){
 
        System.out.println("Fichero creado");     
            
        Files.write(file, lines, Charset.forName("UTF-8")); // Java 7
        
        }
        
       
        
        Files.readAllLines(file).forEach((k)->System.out.println(k)); // Java 7
        
        
        
    }
    
}
