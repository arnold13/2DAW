/* Fitxer: Excepcio01.java
   Descripci�: Exemple d'excepci� de la classe RuntimeException 
               provocada per error de programaci� i no capturada
   Autor: Isidre Guix�
*/

public class Excepcio01
{
   public static void main(String args[])
   {
      String t[]={"Hola","Ad�u","Fins dem�"};
      for (int i=0; i<=t.length; i++)
         System.out.println("Posici� " + i + " : " + t[i]);
      System.out.println("El programa s'ha acabat.");
   }
}