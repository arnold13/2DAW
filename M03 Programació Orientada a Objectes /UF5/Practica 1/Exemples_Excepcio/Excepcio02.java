/* Fitxer: Excepcio02.java
   Descripció: Exemple d'excepció de la classe RuntimeException 
               provocada per error de programació i capturada
   Autor: Isidre Guixà
*/

public class Excepcio02
{
   public static void main(String args[])
   {
      String t[]={"Hola","Adéu","Fins demà"};
      try
      {
         System.out.println("Abans d'executar el for");
         for (int i=0; i<=t.length; i++)
            System.out.println("Posició " + i + " : " + t[i]);
         System.out.println("Després d'executar el for");
      }
      catch (ArrayIndexOutOfBoundsException e)
      {
         System.out.println("El programador estava a la lluna... S'ha sortir de límits!!!");
      }
      System.out.println("Final del programa");      
   }
}