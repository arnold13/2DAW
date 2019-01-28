/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.institut;

import cat.iesjoaquimmir.institut.Exception.Error_Numero_Horas_Modulo;
import cat.iesjoaquimmir.institut.Exception.Error_mayor_edad;
import cat.iesjoaquimmir.institut.Exception.Max_Moduls;
import cat.iesjoaquimmir.institut.Exception.Max_telefon;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author toni
 */
public class Institut {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Domicili domicili = new Domicili("Industria", "24", 
                            "2n 1a", "08800", "Badalona", "Barcelona");
      
        Alumne alumne = new Alumne("Pedro", "García", "Ramírez",
              "55655678J", 220, domicili);
        
        

        
        try {
            
              if(alumne.getEdat() > 25){

                  /**
                   * Runtimexception,no necesita un try catch ya que es una excepcion no chequeada,
                   * sin embargo lo uso para provar el try catch.
                   */
                  
                  throw new Error_mayor_edad(); 
      
              }
              
        } catch (Error_mayor_edad e) {
                
            System.out.println(alumne.getEdat());
            
            System.err.println( e.toString());
            

            
        }
        
        
        // veure 02 Primeres classes - exemple 7
        // afegir a apunts
        ArrayList<String> telefons = new ArrayList<String>();
        telefons.add("943434334");
        telefons.add("943434334");
        telefons.add("943434334");
        alumne.setTelefons(telefons);
        
       alumne.setTelefon_to_Array("601412512");
       alumne.setTelefon_to_Array("601412512");

       try{
         alumne.setTelefon_to_Array("642512853");

       }catch(Max_telefon e){
        
           System.err.println("error telefono capturado (Enviado desde el metodo del propio objeto)");
       }


            
        ArrayList<Modul> moduls = new ArrayList<Modul>();
        moduls.add(new Modul("M01", "Sistemes operatius", 150));
        moduls.add(new Modul("M02", "Base de dades", 150));
        moduls.add(new Modul("M03", "Programacio", 250));
        moduls.add(new Modul("M04", "Llenguatges de Marques", 255));
        
        /**
         * Nota Personal:
         * 
         * Efecto dinamita = si la instacia de un nuevo objeto produce una excepcion,
         * este sera eliminado, pero ademas de ello al lanzar un error dentro de un arraylist
         * este arraylist que contenia el nuevo modulo tambien desaparecera
         * 
         * por eso al hacer try el array moduls desaparecia provocando un null exception en las funciones
         * que requerian de el arraylist moduls.
         */
        
        

             try{
                    Modul a = new Modul("M04", "Llenguatges de Marques", 0); 

             /** excepcion tipo exception necesita ser 
             * lanzado en un try o ser instaciado en el metodo donde este envia la excepcion.
             * 
             */
                    
            }catch (Error_Numero_Horas_Modulo e){ 
                
        
                System.err.println(e.getMessage());
                
            }
                         alumne.setModuls(moduls);

             
           try{
               
            alumne.setModul_to_Array(new Modul("M04", "Angles", 100));
            
            alumne.setModul_to_Array(new Modul("M05", "Deusch", 150));
            
               
           }catch(Max_Moduls e){
            
               
            try {
                // Capturado desde la driver
                
                throw new Max_Moduls("error capturado y disparandolo desde la driver!");
            } catch (Max_Moduls ex) {

                System.err.println(ex.getMessage());
            }
               
           }

             


        for(int i=0;i<alumne.getTelefons().size();++i) {
            System.out.println(alumne.getTelefons().get(i));
        }
        
        for(int i=0;i<alumne.getModuls().size();++i) {
            System.out.println(alumne.getModuls().get(i).getNom());
        }	
	//mostra el format cognom1 cognom2, nom
	System.out.println(alumne.getNomComplert());
		
	//mostra si l'alumne és major d'edat
	System.out.println(alumne.isMajorEdat());	
		
	//Pinta el mateix que la linia anterior
        System.out.println(domicili.getDomiciliAmigable());
	System.out.println(alumne.getDomicili().getDomiciliAmigable());
		
	System.out.println(alumne.getDomicili().getPis());
//	System.out.println(alumne);
        
    }
    
}