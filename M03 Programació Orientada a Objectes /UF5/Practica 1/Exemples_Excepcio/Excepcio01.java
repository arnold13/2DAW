/* Fitxer: Excepcio01.java
   Descripció: Exemple d'excepció de la classe RuntimeException 
               provocada per error de programació i no capturada
   Autor: Isidre Guixà
*/

public class Excepcio01
{
   public static void main(String args[])
   {
      String t[]={"Hola","Adéu","Fins demà"};
      for (int i=0; i<=t.length; i++)
         System.out.println("Posició " + i + " : " + t[i]);
      System.out.println("El programa s'ha acabat.");
   }
}