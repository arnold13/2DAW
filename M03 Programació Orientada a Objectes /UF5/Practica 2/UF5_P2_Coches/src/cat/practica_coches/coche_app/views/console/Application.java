/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.practica_coches.coche_app.views.console;

import cat.practica_coches.coche_app.model.businesslayer.entities.Coche;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.SortedMap;
import java.util.TreeMap;


/**
 *
 * @author Arnold
 */
public class Application {

    public static void main(String[] args) {
        
 
        
        Coche Coche_stock_num_1 = new Coche("Mercedes Benz", "x250", 15000.12);
        
        Coche Coche_stock_num_2 = new Coche("Mercedes Benz", "x250", 13521.12);
        
        Coche Coche_stock_num_3 = new Coche("Toyota", "supra", 18210.12);
        
        
        
        //<editor-fold defaultstate="collapsed" desc="Enunciado 1">
        
            /*

            Que demani N (on N ho decideix l'usuari) cotxes 

            i els mostri per pantalla fent servir un iterator. 

            Per aquest punt has de fer servir l'interfície Set amb alguna de les seves implementacions 

            (prova d'entrar dos cotxes iguals). 

            Repeteix l'exercici fent servir l'interfície SortedSet i que 

            ordeni els cotxes per la marca en ordre alfabètic (ordenació natural)

            i amb una ordenació externa a la classe que ordeni els cotxes introduïts pel preu, 

            mostra els dos casos per pantalla.   

            */
        
 
        
        // Iterator part
        
        Set<Coche> Collecion_de_coches = new LinkedHashSet<>();
        
        
        Collecion_de_coches.add(Coche_stock_num_3);
        Collecion_de_coches.add(Coche_stock_num_1);
        

        
        Iterator iterator_collecion_coches = Collecion_de_coches.iterator();

        
        while(iterator_collecion_coches.hasNext()){
            
            Coche elemento = (Coche) iterator_collecion_coches.next();
            
            System.out.println(elemento.getMarca());
            
        }
        
        
        /*
        
        for (Coche element : Collecion_de_coches) {
            System.out.print(element.getModel() + " " + "\n");
        }        
        
      */
        // Sortedset
        
        SortedSet<Coche> Collecion_de_coches_ordenada = new TreeSet<>(Collecion_de_coches);
        
        
        
        
       Iterator iterator_collecion_coches_ordenada = Collecion_de_coches_ordenada.iterator();

        
        while(iterator_collecion_coches_ordenada.hasNext()){
            
            Coche elemento = (Coche) iterator_collecion_coches_ordenada.next();
            
            System.out.println(elemento.getMarca());
            
        }
        
        
        // Sortedset orden externo

        
        SortedSet<Coche> Collecion_de_coches_ordenada_por_precio = new TreeSet<>(Comparator.comparing(Coche::getPreu));
        
          Collecion_de_coches_ordenada_por_precio.add(new Coche("a", "b", 15000));
          Collecion_de_coches_ordenada_por_precio.add(new Coche("d", "c", 14000));
          Collecion_de_coches_ordenada_por_precio.add(new Coche("a", "b", 24000));
          
        
           Iterator Iterator_Collecion_de_coches_ordenada_por_precio = Collecion_de_coches_ordenada_por_precio.iterator();
           
        while(Iterator_Collecion_de_coches_ordenada_por_precio.hasNext()){
      
            
            Coche elemento = (Coche) Iterator_Collecion_de_coches_ordenada_por_precio.next();
            
            System.out.println(elemento.getPreu());
            
            
        }
        
        
        
        
        
        
              //</editor-fold>
              
        //<editor-fold defaultstate="collapsed" desc="Enunciado 2">

/*
    2. Repeteix l'exercici fent servir l'interfície List, fes servir l'implementació LinkedList. 

        Mostra els elements de la llista amb l'ordenació natural, amb l'ordenació externa 

        i amb l'ordenació natural inversa.


        Pensa una implementació que ens permeti anar afegint cotxes a la llista 
        
        i que en el moment que tinguem que treure cotxes de la llista sempre volem eliminar 

        l’últim que hem afegit. Fes les proves necessàries.


*/

        System.out.println("----Enunciado 2 ------ \n");

        System.out.println("*Orden natural:*");
        
        List<Coche> Lista_de_coches_ordenada = new LinkedList<>(Collecion_de_coches);
        
        Lista_de_coches_ordenada.sort(Comparator.comparing(Coche::getMarca));
        
        Lista_de_coches_ordenada.forEach((Coche)->System.out.println(Coche.getMarca()));

        
       // Ordenar inversa
       
        System.out.println("*Orden inverso:*");
       
        List<Coche> Lista_de_coches_ordenada_inversa = new LinkedList<>(Collecion_de_coches);
        
        Lista_de_coches_ordenada_inversa.sort(Comparator.comparing(Coche::getMarca).reversed());
        
        Lista_de_coches_ordenada_inversa.forEach((Coche)->System.out.println(Coche.getMarca()));
        
        
        // ordenar natural inversa
        
        System.out.println("*Orden natural inverso:*");
        
        List<Coche> Lista_de_coches_ordenada_inversa_natural = new LinkedList<>(Collecion_de_coches);

        Collections.sort(Lista_de_coches_ordenada_inversa_natural,Collections.reverseOrder());
        
        Lista_de_coches_ordenada_inversa_natural.forEach((Coche)->System.out.println(Coche.getMarca()));

        insertar_eliminar_coches_lista(Lista_de_coches_ordenada_inversa_natural);
        
       
        System.out.println("<---- UPDATE ----->");
        
        Lista_de_coches_ordenada_inversa_natural.forEach((Coche)->System.out.println(Coche.getMarca()));

        
//</editor-fold>

        //<editor-fold defaultstate="collapsed" desc="Enunciado 3">

        /*
        
        Repeteix l'exercici fent servir les interfícies Map i SortedMap 
        
        amb alguna de les seves implementacions.
        
        
        */
        
        
        System.out.println("----Enunciado 3 ------ \n");

        System.out.println("*Orden natural:*");
        
        SortedMap<Integer,Coche> Mapa_de_coches_ordenada = new TreeMap<>();
        
        Mapa_de_coches_ordenada.put(1, Coche_stock_num_1);
        Mapa_de_coches_ordenada.put(2, Coche_stock_num_2);
        Mapa_de_coches_ordenada.put(3, Coche_stock_num_3);
        
        
        Mapa_de_coches_ordenada.forEach((ID,Coche)->System.out.println("Llave :" + ID + "; Marca: "+ Coche.getMarca() + "\n"));
        
        System.out.println("*Orden inverso:*");
        
        Map<Integer,Coche> Mapa_de_coches_orden_reverso = new TreeMap<>(Collections.reverseOrder());
        
        Mapa_de_coches_orden_reverso.putAll(Mapa_de_coches_ordenada);

        Mapa_de_coches_orden_reverso.forEach((ID,Coche)->System.out.println("Llave :" + ID + "; Marca: "+ Coche.getMarca() + "\n"));

        
        System.out.println("No hay una manera natural aqui");
        
        insertar_eliminar_coches_map(Mapa_de_coches_ordenada);
        
         System.out.println("<---- UPDATE ----->");
        
        Mapa_de_coches_ordenada.forEach((ID,Coche)->System.out.println("Llave :" + ID + "; Marca: "+ Coche.getMarca() + "\n"));

        
        
//</editor-fold>
        
    }
    
        public static void insertar_eliminar_coches_lista(List lista){
        
               Scanner frase = new Scanner(System.in);
        
        while(true){
        System.out.println("Deseas añadir un coche? O deseas eliminar el ultimo coche? (añadir|eliminar)");

            String respuesta = frase.nextLine();
            
            if("añadir".equals(respuesta)){
                
                System.out.println("Indica el modelo");
                
                String modelo = frase.nextLine();

                System.out.println("Indica la marca");
                
                String marca = frase.nextLine();
                
                System.out.println("Indica el precio");
                
                String precio = frase.nextLine();

                lista.add(new Coche(modelo,marca,Integer.parseInt(precio)));
                
                System.out.println("Quieres realizar otra operacion? (si|no)");
                
                String repeticion = frase.nextLine();
                
                if(!"si".equals(repeticion)){
                    break;
                  
                }          
    
            }else if("eliminar".equals(respuesta)){
                
                lista.remove(lista.size() - 1);
                
            }else{
                
                break;
            }   
        }
        
    }

    
         public static void insertar_eliminar_coches_map(Map map){
        
               Scanner frase = new Scanner(System.in);
        
        while(true){
        System.out.println("Deseas añadir un coche? O deseas eliminar el ultimo coche? (añadir|eliminar)");

            String respuesta = frase.nextLine();
            
            if("añadir".equals(respuesta)){
                
                System.out.println("Indica el modelo");
                
                String modelo = frase.nextLine();

                System.out.println("Indica la marca");
                
                String marca = frase.nextLine();
                
                System.out.println("Indica el precio");
                
                String precio = frase.nextLine();

                map.put(map.size() + 1,new Coche(modelo,marca,Integer.parseInt(precio)));
                
                System.out.println("Quieres realizar otra operacion? (si|no)");
                
                String repeticion = frase.nextLine();
                
                if(!"si".equals(repeticion)){
                    break;
                  
                }          
    
            }else if("eliminar".equals(respuesta)){
                
                map.remove(map.size());
                
            }else{
                
                break;
            }   
        }
        
    }

    

}
